import {IconProps} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/icon";

export const IconMenu = (props: IconProps) => {
  return <Icon width="24" height="24" viewBox="0 0 24 24" fill={"#222"} {...props}>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor" fillRule="evenodd"/>
  </Icon>
}
