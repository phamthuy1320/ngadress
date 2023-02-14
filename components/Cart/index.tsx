import {
  Box,
  Button, Flex, HStack, Image,
  Popover,
  PopoverBody, PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text
} from "@chakra-ui/react";
import {ICartProps} from "./types";
import {IconCart, IconClose} from "../icons";
import {useMemo, useRef} from "react";
import {TextPrice} from "../TextPrice";

export const Cart = (props: ICartProps) => {
  const { amount, data} = props;
  const ref = useRef(null)
  const title = useMemo(() => {
    if(amount > 0 && data.length) return `GIỎ HÀNG CỦA TÔI (${amount} SẢN PHẨM)`
    return "GIỎ HÀNG TRỐNG"
  }, [amount, data.length])

  const total = useMemo(() => {
    if(!data.length) return 0;
    return data?.map(item => item.price).reduce((a, b) => (a || 0) + (b || 0))
  },[data]);

  const renderDetail = useMemo(() => {
    if(!amount || !data.length) return <Text fontWeight={400}>BẠN CHƯA CÓ SẢN PHẨM NÀO TRONG GIỎ HÀNG!</Text>

    return <>
      <Box maxHeight={"315px"} overflow={"auto"}>
        {data.map((item, key) => (
          <>
          <Flex key={key} >
            <Box backgroundColor={"lightpink"} width={"70px"} marginRight={"20px"}>
              <Image src={item?.src} alt={"-"} />
            </Box>
            <Box fontWeight={"400"}>
              <Text fontWeight={"bold"}>{item?.name}</Text>
              <Text>{item?.size}</Text>
              <Text>SỐ LƯỢNG: {item?.amount}</Text>
              <Flex>
                GIÁ/SP:&nbsp;<TextPrice price={item?.price}/>
              </Flex>
            </Box>
            {/*delete */}
            <Button>
              <IconClose/>
            </Button>
          </Flex>
          <Flex height={"1px"} borderBottom={"1px dashed #000"} width={"100%"} margin={"5px 0"} _last={{border: 0}}/>
          </>
        ))}
      </Box>
      <Flex fontWeight={400} padding={"10px 0"}>TẠM TÍNH: <TextPrice price={total} fontWeight={600}/></Flex>
      <HStack spacing={"10px"}>
        <Button backgroundColor={"#000"} color={"#fff"} width={"100%"} borderRadius={4} fontSize={"11px"} padding={"5px 0"}>XEM GIỎ HÀNG</Button>
        <Button backgroundColor={"#000"} color={"#fff"} width={"100%"} borderRadius={4} fontSize={"11px"} padding={"5px 0"}>THANH TOÁN</Button>
      </HStack>
    </>
  },[amount, data])

  return <Popover initialFocusRef={ref}>
      <PopoverTrigger>
        <Button>
        <Box position={"relative"}>
          <IconCart/>
          <Text position={"absolute"} top={"50%"} left={"50%"} transform={"translate(-50%, -50%)"}>{amount}</Text>
        </Box>
      </Button>
      </PopoverTrigger>

      <PopoverContent backgroundColor={"white"} padding={"10px"} boxShadow={"0 0px 5px #000"} right={"10px"}>
        <PopoverHeader display={"flex"} justifyContent={"space-between"}  marginBottom={"20px"}>
          <Text fontWeight={"14px"}>{title}</Text>
          <PopoverCloseButton>
            <IconClose/>
          </PopoverCloseButton>
        </PopoverHeader>
        <PopoverBody>
          {renderDetail}
        </PopoverBody>
      </PopoverContent>
    </Popover>
}
