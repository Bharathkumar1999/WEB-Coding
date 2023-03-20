import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
    useToast,
    VStack,
  } from "@chakra-ui/react";
  import { backend_URL } from './url'

const Products = () => {
    const[loading, setLoading]= useState(false);
    const navigate = useNavigate();
    const[error,setError]= useState(false);
    const[products,setproducts]= useState("");
    // const [title,setTitle]= useState("");
    // const [des,setDes]= useState("");
    const [product_name,setProduct_name]= useState("");
    const [quantity,setQuantity]= useState("");
    const [price,setPrice]= useState("");
    const [status,setStatus]= useState("Active");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    useEffect(()=>{
        setLoading(true)
        fetch(`${backend_URL}/products`,{
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res)=> res.json())
        .then((res)=> {
            console.log(res)
            setproducts(res)
            setLoading(false)
        }) 
        .catch((err)=> {
            console.log(err)
            setError(true)
            setLoading(false)

        })
    },[])

    const deleteproduct=(productID)=>{
        fetch(`${backend_URL}/products/delete/${productID}`,{
            method: "DELETE",
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        window.location.reload();
    }

    // const handleEdit = () => {
    //     dispatch(editEntry(id, newAge));
    //     toast({
    //       position: "top",
    //       description: "Updated successfully",
    //       status: "success",
    //       duration: 3000,
    //       isClosable: true,
    //     });
    //     onClose();
    //   };

    const handleEdit=(productID)=>{
        const payload={
            product_name,
            price,
            quantity,
            status
        }

        fetch(`http://localhost:8080/products/update/${productID}`,{
            method: "PATCH",
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }

        })
        .then((res)=> res.json())
        .then((res)=>{
            console.log(res.msg)
            alert("updated successfully")

        } )
        
        // toast({
        //           position: "top",
        //           description: "Updated successfully",
        //           status: "success",
        //           duration: 3000,
        //           isClosable: true,
        // })
                // onClose()
        .catch((err)=> console.log(err))

        onClose()
        window.location.reload();
        // console.log(payload)
    }


    const handleLogout=()=>{
        localStorage.setItem("token","")
        navigate("/login")
    
    
      }
    
   

        
       
    
  return (
    <div>
        <Heading>Products Management App</Heading>
        <div>
            <Button onClick={handleLogout}>Logout</Button>
        </div>

        <h1>Products</h1>
        
        
        {
            loading && "loading..."
        }
        {
            error && "something went wrong..."
        }
        {/* {
            products && products.length>0 && products.map((product)=>{ */}
                {/* return(
                    <div> */}
                        <Container maxW={{base:"full", md:"container.xl"}} p={{base:2,lg:0}}>
                    <Grid templateColumns={{base:"repeat(1, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"}} width='80%' margin="auto"gap="20px"marginTop="20px"  w='full'>
                        {
                        products && products.length>0 && products.map((product)=>(
                            <GridItem key={product.id}>
                            <Box
                            bg='gray.50'
                            columns={{ sm: 2, md: 4 }}
                            spacing='8'
                            p='2'
                            textAlign='center'
                            rounded='lg'
                            // color='gray.600'
                            mt={4}
                            >
                                <VStack>
                                {/* <Box>
                                <Image boxSize="100px"  src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"/>
                                </Box> */}
                                <Box>
                                <Text>ID:{product._id}</Text>
                                </Box>
                                <Box>
                                <Text>Name: {product.product_name}</Text>
                                </Box>
                                <Box>
                                <Text>Price: {product.price}</Text>
                                </Box>
                                <Box>
                                <Text>Quantity: {product.quantity}</Text>
                                </Box>
                                <Box>
                                <Text>status: {product.status}</Text>
                                </Box>
                                <Flex
                                    justifyContent={"center"}
                                    align="center"
                                    w="full"
                                    fontSize={"20px"}
                                    mt="4px"
                                    px="2px"
                                    // ml="10px"
                                >
                                    <Button m={1} onClick={()=> deleteproduct(product._id)}>Delete</Button>
                                    <Button m={1} onClick={onOpen}>Edit</Button> 
                                    
                                </Flex> 

                                <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                    <ModalHeader>Update</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <FormControl>
                                        <FormLabel>Product Name</FormLabel>
                                        <Input
                                            type="text"
                                            name="product_name"
                                            onChange={(e)=>setProduct_name(e.target.value)}
                                            placeholder={product_name}
                                        />
                                        <FormLabel>Price</FormLabel>
                                        <Input
                                            type="number"
                                            name="setPrice"
                                            onChange={(e)=>setPrice(e.target.value)}
                                            placeholder={price}
                                        />
                                        <FormLabel>Quantity</FormLabel>
                                        <Input
                                            type="number"
                                            name="quantity"
                                            onChange={(e)=>setQuantity(e.target.value)}
                                            placeholder={quantity}
                                        />
                                        <FormLabel>Status</FormLabel>
                                        <Input
                                            type="text"
                                            name="status"
                                            onChange={(e)=>setStatus(e.target.value)}
                                            placeholder={status}
                                        />
                                        </FormControl>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme={"green"} onClick={()=> handleEdit(product._id)}>
                                        Update
                                        </Button>
                                    </ModalFooter>
                                    </ModalContent>
                                </Modal>
                                <Divider />
                                
                                </VStack>
                            </Box>
                            
                            
                        </GridItem>

                        ))
                        }
                    </Grid>
                </Container>
       
       
                        {/* <p>{product._id}</p>
                        <p>{product.title}</p>
                        <p>{product.product}</p>
                        <Button onClick={()=> deleteproduct(product._id)}>Delete</Button>
                        <Button onClick={onOpen}>Edit</Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                onChange={(e)=>setTitle(e.target.value)}
                placeholder={title}
              />
              <FormLabel>product</FormLabel>
              <Input
                type="text"
                name="des"
                onChange={(e)=>setDes(e.target.value)}
                placeholder={des}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={"green"} onClick={()=> handleEdit(product._id)}>
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                        <hr /> */}
                    {/* </div>
                )

            })
        } */}
        
       

    </div>
    
  )
}

export default Products