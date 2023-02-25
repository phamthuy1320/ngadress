import { Flex, Text } from "@chakra-ui/react";
import { Search } from "../Search";
import { Cart } from "../Cart";
import { Menu } from "../Menu";
import Link from "next/link";

export const Header = () => {
  return (
    <Flex justifyContent={"space-between"} paddingBlock={"25px"} fontWeight={500}>
      <Menu list={[{ categoryName: "ao", id: "ao" }]} />
      <Text as={Link} href={"/"}>
        NGA
      </Text>
      <Search />
      <Cart />
    </Flex>
  );
};
