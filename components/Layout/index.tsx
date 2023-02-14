import {Box, Grid, GridItem} from "@chakra-ui/react";
import {ILayoutProps} from "./types";
import {IconMenu} from "../icons/IconMenu";
import {IconFacebook} from "../icons/IconFacebook";
import {IconZalo} from "../icons/IconZalo";
import {Header} from "../Header"
import {Footer} from "../Footer";

export const Layout = (props: ILayoutProps) => {
  const {children} = props;
  return <Grid templateRows={"auto 1fr auto"} height={"100vh"}>
    <GridItem paddingInline={10}  position={"sticky"} top={0} width={"100%"} boxShadow={"0 2px 5px #000"}>
      <Header/>
    </GridItem>
    <GridItem background={"lightgray"} paddingInline={10}>
      {children}
    </GridItem>
    <GridItem background={"lightgreen"}>
      <Footer/>
    </GridItem>
  </Grid>
}
