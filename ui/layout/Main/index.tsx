import { FC } from 'react';
import { Box } from '../../components/atoms';
import { IDefaultComponentProps } from '../../models';
import { Header } from './Header';

export const MainLayout: FC<IDefaultComponentProps> = ({ children }) => {
  return (
    <Box column>
      <Header />
      <Box>{children}</Box>
      <Box>footer</Box>
    </Box>
  );
};
