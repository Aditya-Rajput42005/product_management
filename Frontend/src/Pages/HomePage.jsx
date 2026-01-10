import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/productstore";
import { useEffect } from "react";
import { ProductCard } from "../Components/ProductCard";

function HomePage() {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // for not getting any error
  const safeProducts = Array.isArray(products)
    ? products.filter((p) => p && p._id)
    : [];

  return (
    <Container maxW="container.lg">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} style={{gap :"20px"}}>
        {safeProducts.length === 0 ? (
          <Text
            color="gray.400"
            fontSize="lg"
            textAlign="center"
            gridColumn="1 / -1"
          >
            No products available{" "}
            <Link to="/create" style={{ textDecoration: "underline" }}>
              Create Product
            </Link>
          </Text>
        ) : (
          safeProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </SimpleGrid>
    </Container>
  );
}

export default HomePage;
