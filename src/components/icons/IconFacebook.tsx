import React from "react";
import { HTMLProps } from "react";

export const IconFacebook = (props: HTMLProps<HTMLImageElement>) => {
  return (
    <img src={"icons/fb-icon.png"} alt={"fb-icon"} width={"50px"} {...props} />
  );
};
