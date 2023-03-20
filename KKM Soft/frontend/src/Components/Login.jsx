import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Spinner,
    useToast,
    VStack,
  } from "@chakra-ui/react";
  import { backend_URL } from './url'

const Login = () => {
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [loading, setLoading] = useState(false);

    const isEmail = email === "";
  const isPassword = password === "";
    const navigate = useNavigate();
    const toast = useToast();

    const handleSubmit=()=>{
        const payload={
            email,
            password
        }

        fetch(`${backend_URL}/login`,{
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        .then((res)=> res.json())
        .then((res)=> {
            console.log(res)
            localStorage.setItem("token",res.token)

        }) 
        .catch((err)=> console.log(err))
        console.log(payload)
        navigate("/products")
    }
  return (
    <div>
        {/* <h1>Login Here</h1>
        <input type="text" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button> */}

<Flex
      pt={{ lg: "50px", base: "10px" }}
      align={"center"}
      w="100%"
      h="100vh"
      bg={"blue.100"}
      gap="20px"
      flexDir="column"
    >
      <Heading>Login</Heading>
      <VStack
        w={["full", "400px", "450px"]}
        border={"1px solid #dedede"}
        p="20px"
        gap="10px"
        borderRadius={"md"}
        bg="white"
      >
        <FormControl isInvalid={isEmail} isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} />
          {email.length===0 ? (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          ) : (
            ""
          )}
        </FormControl>
        <FormControl isInvalid={isPassword} isRequired>
          <FormLabel>Password </FormLabel>
          <Input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
          {password.length===0 ? (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          ) : (
            ""
          )}
        </FormControl>
        <Button colorScheme={"yellow"} w="full" onClick={handleSubmit}>
          {loading ? <Spinner /> : "Submit"}
        </Button>
      </VStack>
    </Flex>

        
    </div>
    
  )
}

export default Login