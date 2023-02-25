import React, { useRef } from "react";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { Button, Text, useDisclosure } from "@chakra-ui/react";
import { IconMenu } from "../icons";
import Link from "next/link";

export interface IMenuProps {
  list: {
    categoryName: string;
    id: string;
  }[];
}

export const Menu = (props: IMenuProps) => {
  const { list } = props;
  const { isOpen, onClose, onToggle } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <Button ref={btnRef} onClick={onToggle}>
        <IconMenu />
      </Button>
      <Drawer isOpen={isOpen} placement={"left"} onClose={onClose} finalFocusRef={btnRef} isFullHeight>
        <DrawerOverlay background={"rgba(51,51,51,0.4)"} />
        <DrawerContent maxWidth={"300px"} backgroundColor={"#f6f6f6"} borderRight={"1px solid #e9e9e9"}>
          <DrawerHeader
            minHeight={"82px"}
            borderBottom={"1px solid #333"}
            display={"flex"}
            alignItems={"Center"}
            padding={"0 15px"}
          >
            <Text textAlign={"center"} width={"100%"}>
              NGA
            </Text>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            {list &&
              list.map((item, index) => (
                <Link href={`/collections/${item.id}`} key={index}>
                  <Text
                    margin={"0 15px"}
                    padding={"10px 0"}
                    borderBottom={"1px solid #e9e9e9"}
                    color={"#333"}
                    fontWeight={500}
                  >
                    {item.categoryName}
                  </Text>
                </Link>
              ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
