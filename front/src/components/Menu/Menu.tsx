import React, { FC } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import styles from './styles';

interface Props {
  open: boolean;
  handleDrawerClose: () => void;
}

const Menu: FC<Props> = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const classes = makeStyles(styles)();

  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <Toolbar className={classes.drawer}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </Toolbar>
    </Drawer>
  );
};

export default Menu;
