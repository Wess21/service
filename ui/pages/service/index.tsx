import type { GetServerSideProps, NextPage } from 'next';
import { MainLayout } from '../../layout';

const Services: NextPage<{}> = (props) => {
  return <MainLayout>Сервис Example</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Services;
