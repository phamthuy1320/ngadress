import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { productRepository } from "../../repositories";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { Category } from "../../components/Category";

const Home: React.VFC = () => {
  const { data, loading } = useFetch(productRepository.categoriesList());

  if (loading)
    return (
      <Layout>
        <Loading />
      </Layout>
    );

  return (
    <Layout>
      {data?.map((cate, index) => (
        <Category id={cate.categoryId} title={cate.categoryName} list={cate.products} key={index} />
      ))}
    </Layout>
  );
};

export default Home;
