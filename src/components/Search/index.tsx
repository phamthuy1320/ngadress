import React from "react";
import { Flex, Input, Text } from "@chakra-ui/react";

export const Search = () => {
  return (
    <Flex alignItems={"end"}>
      <Text marginRight={10}>TÌM KIẾM </Text>
      <Input
        _hover={{}}
        _active={{}}
        _focus={{ outline: "none" }}
        backgroundColor={"transparent"}
        borderBottom={"1px solid #000"}
      />
    </Flex>
  );
};
