import { Box, Button, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { backend_URL } from './url'

const ProductsCreate = () => {

    const [product_name,setProduct_name]= useState("");
    const [quantity,setQuantity]= useState("");
    const [price,setPrice]= useState("");
    const [status,setStatus]= useState("Active");

    const handleSubmit=()=>{
        const payload={
            product_name,
            price,
            quantity,
            status
        }

        fetch(`${backend_URL}/products/create`,{
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }

        })
        .then((res)=> res.json())
        .then((res)=> console.log(res.msg))
        .catch((err)=> console.log(err))
        console.log(payload)
    }
  return (
    <div>
        <Box 
        // display={"block"}
        // w={"40%"}
        // p="10px"
        // alignItems="center"
        
        // justify={"center"}
        // spacing="10px"
        pt={{ lg: "50px", base: "10px" }}
      align={"center"}
      w="100%"
      h="100vh"
    //   bg={"blue.100"}
      gap="20px"
      flexDir="column"
        
        mb="10px">
            <VStack
            
            w={["full", "400px", "450px"]}
            border={"1px solid #dedede"}
            p="20px"
            gap="10px"
            borderRadius={"md"}
            bg="white"
          >
            <Heading>Create Product</Heading>
            <Input type="text" placeholder='product_name' value={product_name} onChange={(e)=>setProduct_name(e.target.value)} />
            <Input type="text" placeholder='price' value={price} onChange={(e)=>setPrice(e.target.value)} />
            <Input type="text" placeholder='quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
            <Input type="text" placeholder='status' value={status} onChange={(e)=>setStatus(e.target.value)} />
            <Button onClick={handleSubmit}>Submit</Button>
            

            </VStack>
            
        </Box>
        {/* <h1>Create Product</h1>
        <input type="text" placeholder='product_name' value={product_name} onChange={(e)=>setproduct_name(e.target.value)} />
        <input type="text" placeholder='Product' value={Product} onChange={(e)=>setProduct(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button> */}

    </div>
    
  )
}

export default ProductsCreate