import type { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { MainLayout } from '../../layout';

const Service: NextPage<{}> = (props) => {
  return <MainLayout>Сервис Example</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export default Service;
