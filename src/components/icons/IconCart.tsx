import { Icon } from "@chakra-ui/icon";
import { IconProps } from "@chakra-ui/react";

export const IconCart = (props: IconProps) => {
  return (
    <Icon width="32px" height="32px" viewBox="0 0 32 32" {...props}>
      <path
        fill="#000"
        fillRule="nonzero"
        d="M12 7V6c0-1 1-2 2-2h4c1 0 2 1 2 2v1h7v19H5V7h7zm14 1H6v17h20V8zM13 6v1h6V6c0-.5-.5-1-1-1h-4c-.5 0-1 .5-1 1z"
      />
    </Icon>
  );
};
