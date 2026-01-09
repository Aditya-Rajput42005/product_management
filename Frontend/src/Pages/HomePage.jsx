import React, { useEffect } from "react";
import { Box, Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useProductStore } from "../store/productstore.js";
import { ProductCard } from "../Components/ProductCard.jsx";

function HomePage() {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products", products);

  console.log("Products", products);

  return (
    <Container maxW="container.xl">
      <VStack>
        <Box>
          <Text style={{ margin: "0 auto", color: "white" }}>
            Current Products
          </Text>

          <SimpleGrid style={{gap:"20px"}}
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w={"full"}
          >
            {(Array.isArray(products) ? products : products?.message || []).map(
              (product) => (
                <ProductCard key={product._id} product={product} />
              )
            )}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
}

export default HomePage;
