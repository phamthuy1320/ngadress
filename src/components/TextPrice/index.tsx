import React from "react";
import { Text, TextProps } from "@chakra-ui/react";
import numeral from "numeral";

interface ITextPrice extends TextProps {
  price?: number;
}

export const TextPrice = (props: ITextPrice) => {
  const { price, ...rest } = props;
  return (
    <Text
      as={"span"}
      _after={{
        content: "\"đ\"",
        fontSize: 10,
        textDecoration: "underline",
        marginTop: "5px",
      }}
      display={"flex"}
      {...rest}
    >
      {numeral(price).format("0,0")}
    </Text>
  );
};
