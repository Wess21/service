import { SettingOutlined } from '@ant-design/icons';
import { FC } from 'react';
import { Box, Text } from '../../../components/atoms';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <Box
      bgColor="basicMain"
      padding={16}
      className={styles.root}
      paddingLeft={32}
      paddingRight={32}
      alignItems="center"
    >
      <SettingOutlined />
      <Box marginLeft={8}>
        <Text weight="extraBold" color="basicWhite">
          Service
        </Text>
      </Box>
    </Box>
  );
};
