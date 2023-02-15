import React from "react";
import { Icon } from "@chakra-ui/icon";
import { IconProps } from "@chakra-ui/react";

export const IconSearch = (props: IconProps) => {
  return (
    <Icon width="24" height="24" viewBox="0 0 24 24" fill={"#222"} {...props}>
      <path
        d="M19.757 17.433l-2.787-2.78c.864-1.136 1.374-2.546 1.374-3.995C18.344 6.978 15.36 4 11.672 4 7.982 4 5 6.977 5 10.658c0 3.68 2.983 6.658 6.672 6.658 1.452 0 2.865-.47 4.003-1.37l2.787 2.78c.157.157.392.274.628.274.235 0 .47-.078.628-.274.157-.157.274-.392.274-.627.04-.278-.078-.51-.235-.67zm-8.085-1.958c-2.67 0-4.827-2.154-4.827-4.817 0-2.663 2.158-4.817 4.827-4.817 2.67 0 4.827 2.158 4.827 4.82s-2.16 4.818-4.83 4.818z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Icon>
  );
};
