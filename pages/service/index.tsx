import type { GetServerSideProps, NextPage } from "next";

const Services: NextPage<{}> = (props) => {
  return <>Список сервисов</>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Services;
