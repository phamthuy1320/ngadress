import {Flex, Input, Text} from "@chakra-ui/react"
import {IconMenu} from "../icons";
import {Search} from "../Search";

export const Header = () => {
  return (
    <Flex justifyContent={"space-between"} paddingBlock={"25px"} fontWeight={500}>
      <IconMenu height={"30"}/>
      <Text>PHAM NGA</Text>
      <Search />
    </Flex>
  )
}
