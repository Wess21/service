import type { GetServerSideProps, NextPage } from "next";

const Service: NextPage<{}> = (props) => {
  return <>Сервис Example</>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Service;
