import { FC } from 'react';
import { Box, Text } from '../../atoms';
import Link from 'next/link';
import styles from './MainCard.module.scss';

interface IProps {
  href: string;
  title: string;
}

export const MainCard: FC<IProps> = ({ href, title }) => {
  return (
    <Link href={href} passHref>
      <Box className={styles.item} padding={48}>
        <Text size="h3" color="basicWhite">
          {title}
        </Text>
      </Box>
    </Link>
  );
};
