import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { IconMenu } from "../icons";
import { Search } from "../Search";
import { Cart } from "../Cart";

export const Header = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      paddingBlock={"25px"}
      fontWeight={500}
    >
      <IconMenu height={"30"} />
      <Text></Text>
      <Search />
      <Cart
        amount={1}
        data={[
          {
            id: "1",
            name: "ao",
            price: 100000000,
            amount: 2,
            size: "XS",
          },
          {
            id: "1",
            name: "ao",
            price: 100000000,
            amount: 2,
            size: "XS",
          },
        ]}
      />
    </Flex>
  );
};
