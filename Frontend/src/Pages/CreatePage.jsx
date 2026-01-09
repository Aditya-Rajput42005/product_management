import { Input, Box, Button, Toast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/productstore";
import { Link } from "react-router-dom";

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    url: "",
  });

  const { createProducts } = useProductStore();

  const handelAddProduct = async () => {
    const { success, message } = await createProducts(newProduct);
    console.log("success", success);
    console.log("message", message);

    setNewProduct({ name: "", price: "", url: "" });
  };

  return (
    <div
      style={{
        background: "#686070ff",
        maxWidth: "500px",
        padding: "25px",
        margin: "7% auto",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Box display="flex" gap="20px" alignItems="center">
        <Input
          placeholder="Name"
          name="name"
          width="100%"
          bg="#FFDAB3"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
        />
      </Box>

      <Box display="flex" gap="20px" alignItems="center">
        <Input
          placeholder="Price"
          name="price"
          type="number"
          width="100%"
          bg="#FFDAB3"
          min={0}
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
        />
      </Box>

      <Box display="flex" gap="20px" alignItems="center">
        <Input
          placeholder="Image url"
          name="url"
          width="100%"
          bg="#FFDAB3"
          value={newProduct.url}
          onChange={(e) =>
            setNewProduct({ ...newProduct, url: e.target.value })
          }
        />
      </Box>
      <Link to="/" style={{ maxWidth: "100%", margin : "0 auto" }}>
        <Button style={{maxWidth: "100%"}} onClick={handelAddProduct}>Add Product</Button>
      </Link>
    </div>
  );
}

export default CreatePage;
