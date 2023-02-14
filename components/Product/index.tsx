import {IProduct} from "./types";
import {Box, Text, Image, Flex} from "@chakra-ui/react";
import Link from "next/link";
import {useCallback} from "react";
import {TextPrice} from "../TextPrice";

export const Product = (props: IProduct) => {
  const {sale, src, id, name, price, orgPrice} = props;

  const convertName = useCallback((name: string) => {
    // Remove accents
    const newName = name.toLowerCase().normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd').replace(/Đ/g, 'D');
    const regex = new RegExp(" ")
    return newName.replace(regex, "-")
  },[])

  return (
    <Box>
      <Link href={`#${id}`}>
        <Flex position={"relative"}  backgroundColor={"lightpink"} width={"100%"} borderRadius={2} justifyContent={"center"} alignItems={"center"}>
          {Number(sale) > 0 && <Text backgroundColor={"#fff"} fontWeight={500} position={"absolute"} padding={"0 8px"} top={10} left={10} borderRadius={4} fontSize={12} fontStyle={"italic"}>
            -{sale}%
          </Text>}
          <Box w={"100%"} style={{contain: "content"}} >
            <Image src={src} w={"100%"} _hover={{transform: "scale(1.05)", width:"100%"}} alt={convertName(name)}/>
          </Box>
        </Flex>
        <Text>{name}</Text>
      </Link>
      <Flex flexWrap={"wrap"} gap={10}>
        <TextPrice color={"red"} price={price}/>
        <TextPrice textDecoration={"line-through"} price={orgPrice}/>
      </Flex>
    </Box>
  )
}
