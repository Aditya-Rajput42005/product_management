import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useProductStore } from "../store/productstore";

export const ProductCard = ({ product }) => {
  const {deleteProducts} = useProductStore(); 
  const handleDeleteProduct = async (pid)=>{
    const {success,message} = await deleteProducts(pid)
    console.log("Success : ", success)
    console.log("Message : ", message)
  }
  return (
    <Box style={{ border: "solid #9F8383 3px",borderRadius : "14px", padding: "25px",justifyContent : "flex-start" }}>
      <img src={product.url} />
      <Text style={{color : "black", padding:"5px", fontSize : "1.45rem"}}>{product.name}</Text>
      <Text style={{color : "black", padding:"5px", fontSize : "1.1rem"}}>{product.price}</Text>

      <Button style={{maxWidth : "25px", background : "rgb(205, 98, 91)"}} onClick={()=>{handleDeleteProduct(product._id)}}>
        <MdOutlineDeleteOutline />
      </Button>
      
      
    </Box>
  );
};
