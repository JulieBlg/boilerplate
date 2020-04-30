import React, { FC } from 'react';
import Container from '@material-ui/core/Container';

import TopBar from '../../components/TopBar';

interface Props {
  children: Node;
}

const NoMenuLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <TopBar noMenu />
      <Container>{children}</Container>
    </>
  );
};

export default NoMenuLayout;
