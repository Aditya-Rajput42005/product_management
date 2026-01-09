import { Container, Flex, Text, Link, HStack, Button } from "@chakra-ui/react";
import React from "react";
import { IoMdPerson } from "react-icons/io";

import { Link as RouterLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

export default function Navbar() {
  return (
    <Container maxW="100%" style={{background : "#574964"}}>
      <Flex h="16" alignItems="center" justifyContent="space-between">
        <Text fontSize={{ base: "28px", sm: "22px" }}>
          <Link
            style={{
              background: "#9F8383",
              maxWidth : "fit-content",
              padding : "0.18em",
              borderRadius: "10px",
              color: "white",
            }}
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: "none" }}
          >
            Product Store
          </Link>
        </Text>
        <HStack>
          <Button
            style={{
              background: "#9F8383",
              borderRadius: "10px",
              color: "white",
              padding :"1vh"
            }}
          >
            Cart
            <TiShoppingCart />
          </Button>
          <Button
            style={{
              background: "#9F8383",
              borderRadius: "10px",
              color: "white",
              padding :"1vh"
            }}
          >
            SignIn
            <IoMdPerson/>
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}
