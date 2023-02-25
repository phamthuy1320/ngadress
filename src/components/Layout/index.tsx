import { Grid, GridItem } from "@chakra-ui/react";
import { ILayoutProps } from "./types";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = (props: ILayoutProps) => {
  const { children } = props;
  return (
    <Grid templateRows={"auto 1fr auto"} height={"100vh"}>
      <GridItem
        paddingInline={10}
        position={"fixed"}
        top={0}
        width={"100%"}
        boxShadow={"0 2px 5px #000"}
        backgroundColor={"#fff"}
        zIndex={2}
      >
        <Header />
      </GridItem>
      <GridItem paddingInline={10} paddingTop={"82px"}>
        {children}
      </GridItem>
      <GridItem background={"#f2f2f2"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};
