import {
  Box,
  Button,
  Text,
  Input,
  VStack,
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
} from "@chakra-ui/react";
import React,{useState} from "react";
import { useProductStore } from "../store/productstore";
import { MdOutlineDeleteOutline, MdEdit } from "react-icons/md";


export const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProducts, updateProducts } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    await deleteProducts(pid);
  };

  const handleUpdateProducts = async () => {
    await updateProducts(product._id, updatedProduct);
    if(resizeBy?.success){
      onclose();
      await fetchProducts()}
  };

  return (
    <Box border="3px solid #9F8383" borderRadius="14px" p="25px">
      <img src={product.url} style={{maxWidth : "400px"}}/>

      <Text fontSize="xl">{product.name}</Text>
      <Text>{product.price}</Text>

      <Button onClick={() => handleDeleteProduct(product._id)}>
        <MdOutlineDeleteOutline />
      </Button>

      <DialogRoot>
        <DialogTrigger asChild>
          <Button ml={2}>
            <MdEdit />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>Update Product</DialogHeader>
          <DialogCloseTrigger />

          <DialogBody >
            <VStack spacing={4}>
              <Input
                value={updatedProduct.name}
                onChange={(e) =>
                  setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                }
              />
              <Input
                type="number"
                value={updatedProduct.price}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    price: e.target.value,
                  })
                }
              />
              <Input
                value={updatedProduct.url}
                onChange={(e) =>
                  setUpdatedProduct({
                    ...updatedProduct,
                    url: e.target.value,
                  })
                }
              />
            </VStack>
          </DialogBody>

          <DialogFooter>
            <Button onClick={handleUpdateProducts}>Update</Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </Box>
  );
};
