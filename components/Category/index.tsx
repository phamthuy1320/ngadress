import {Box, Flex, Grid, GridItem, HStack, Text} from "@chakra-ui/react";
import {ICategoryProps} from "./types";
import {Product} from "../Product";
import React from "react";

export const Category = (props: ICategoryProps) => {
  const {title, list} = props;
  return (
    <Box padding={"10"} width={"full"}>
      <Flex justifyContent={"center"}>
        <Text
          width={"fit-content"}
          fontWeight={500}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          _after={{
            content: `""`,
            width: "95%",
            borderBottom: "3px solid #000",
            margin: "auto"
          }}
        >{title.toUpperCase()}</Text>
      </Flex>
     <Grid templateColumns={"repeat(5, minmax(200px, 1fr))"} width={"100%"} gridGap={"20px"}>
       {Array(15).fill("").map(
         (pro, index) => (
           <GridItem  key={index}>
             <Product name={"Ao dai"} src={"https://product.hstatic.net/1000277297/product/2ad30029934__2__ec89ff392dfe4377b69b86033004dcdd_grande.jpg"} price={10}/>
           </GridItem>
         )
       )}

     </Grid>
    </Box>
  )
}
