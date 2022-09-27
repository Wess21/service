import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '../components/atoms';
import { MainCard } from '../components/molecules';

import { MAIN_MENU } from '../consts';
import styles from './Index.module.scss';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Сервис</title>
        <meta name="description" content="Все для обслуживания авто" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box alignItems="center" justifyContent="center" gap={16} className={styles.root}>
        {MAIN_MENU.map((m) => (
          <MainCard key={m.href} {...m} />
        ))}
      </Box>
    </>
  );
};

export default Index;
