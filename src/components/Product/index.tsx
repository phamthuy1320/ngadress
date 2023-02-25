import { IProduct } from "./types";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { TextPrice } from "../TextPrice";
import { useProduct } from "./hooks";

const ProductComponent = (props: ReturnType<typeof useProduct>) => {
  const { sale, src, name, price, salePrice, url, alt, onAdd } = props;

  return (
    <Box>
      <Link href={url}>
        <Flex
          position={"relative"}
          backgroundColor={"lightpink"}
          width={"100%"}
          borderRadius={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {Number(sale) > 0 && (
            <Text
              backgroundColor={"#fff"}
              fontWeight={500}
              position={"absolute"}
              padding={"0 8px"}
              top={10}
              left={10}
              borderRadius={4}
              fontSize={12}
              fontStyle={"italic"}
            >
              -{sale}%
            </Text>
          )}
          <Box w={"100%"} style={{ contain: "content" }}>
            <Image src={src} w={"100%"} _hover={{ transform: "scale(1.05)", width: "100%" }} alt={alt} />
          </Box>
        </Flex>
        <Text>{name}</Text>
      </Link>
      <Flex flexWrap={"wrap"} gap={10}>
        <TextPrice color={"red"} price={salePrice} />
        {price > salePrice && <TextPrice textDecoration={"line-through"} price={price} />}
        <p onClick={onAdd}>cho vao gio</p>
      </Flex>
    </Box>
  );
};

export const Product = (props: IProduct) => {
  return <ProductComponent {...useProduct(props)} />;
};
