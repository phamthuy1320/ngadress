import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { ICategoryProps } from "./types";
import { Product } from "../Product";
import React from "react";
import { useCategory } from "./hooks";
import Link from "next/link";

const CategoryComponent = (props: ReturnType<typeof useCategory>) => {
  const { title, data, showMore, id } = props;

  if (!data?.length) return <></>;
  // Just test
  return (
    <Box padding={"10"}>
      <Flex justifyContent={"center"}>
        <Text
          width={"fit-content"}
          fontWeight={500}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          marginBottom={"20px"}
          _after={{
            content: `""`,
            width: "95%",
            borderBottom: "3px solid #000",
            margin: "auto",
          }}
        >
          {title.toUpperCase()}
        </Text>
      </Flex>
      <Grid
        templateColumns={{ base: "repeat(3, minmax(auto, 1fr))", md: "repeat(5, minmax(auto, 1fr))" }}
        gridGap={"20px"}
      >
        {data.map((pro, index) => (
          <GridItem key={index}>
            <Product {...pro} />
          </GridItem>
        ))}
      </Grid>
      {showMore && (
        <Link href={`/collections/${id}`}>
          <Text textAlign={"center"} _hover={{ textDecoration: "underline" }}>
            Xem thêm sản phẩm ...
          </Text>
        </Link>
      )}
    </Box>
  );
};

export const Category = (props: ICategoryProps) => {
  return <CategoryComponent {...useCategory(props)} />;
};
