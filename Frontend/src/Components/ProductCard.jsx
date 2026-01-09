import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

export const ProductCard = ({ product }) => {
  return (
    <Box style={{border : "solid black 1px"}}>
      <img src={product.url}  />
      <Text>{product.name}</Text>
    </Box>
  );
};
