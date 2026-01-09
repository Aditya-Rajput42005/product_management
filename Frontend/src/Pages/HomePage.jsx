import React, { useEffect } from "react";
import { Box, Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useProductStore } from "../store/productstore.js";
import { ProductCard } from "../Components/ProductCard.jsx";
import { Link } from "react-router-dom";

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
        <h1
          style={{
            color : "white",
            fontSize: "32px",
            fontWeight: "bold",
            margin: "0.67em 0",
          }}
        >
          This is heading 1
        </h1>

        <Box>
          <SimpleGrid
            style={{ gap: "20px" }}
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            w={"full"}
          >
            {products.length === 0 ? (
              <Text
                color="gray.400"
                fontSize="lg"
                textAlign="center"
                gridColumn="1 / -1"
              >
                No products available{" "}
                <Link to="/create" style={{ textDecoration: "underline" }}>
                  {" "}
                  Create Product{" "}
                </Link>
              </Text>
            ) : (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
}

export default HomePage;
