import React from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { Category } from "./components/Category";

function App() {
  return (
    <Layout>
      <Category title={"áo thu đông"} list={[]} />
    </Layout>
  );
}

export default App;
