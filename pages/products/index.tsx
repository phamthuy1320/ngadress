import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "src/components/Layout";
import { Loading } from "src/components/Loading";

const ProductsPage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);
  return (
    <Layout>
      <Loading />
    </Layout>
  );
};

export default ProductsPage;
