import React, { useState, FC } from 'react';
import Container from '@material-ui/core/Container';

import Menu from '../../components/Menu';
import TopBar from '../../components/TopBar';

interface Props {
  children: Node;
}

const MenuLayout: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TopBar handleDrawerOpen={handleDrawerOpen} />
      <Menu open={open} handleDrawerClose={handleDrawerClose} />
      <Container>{children}</Container>
    </>
  );
};

export default MenuLayout;
