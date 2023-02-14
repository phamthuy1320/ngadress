import {Image, ImageProps} from "@chakra-ui/image";
import {Box} from "@chakra-ui/react";

export const IconZalo = (props: ImageProps) => {
  return <Box background={"#fff"} width={"fit-content"} height={"fit-content"} borderRadius={"50%"}>
  <Image src={"icons/zalo-icon.png"} alt={"fb-icon"} width={"50px"} borderRadius={"inherit"} {...props}/>
  </Box>
}
