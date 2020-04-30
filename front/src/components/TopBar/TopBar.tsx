import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './styles';

interface Props {
  handleDrawerOpen: () => void;
  noMenu: boolean;
}

const TopBar: FC<Props> = ({ noMenu = false, handleDrawerOpen }) => {
  const classes = makeStyles(styles)();

  return (
    <>
      <AppBar position="fixed" className={classes.topBar}>
        <Toolbar>
          {!noMenu && (
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon
                className={classes.menuButton}
                onClick={handleDrawerOpen}
              />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {/* prevents content to show under the appBar */}
      <Toolbar />
    </>
  );
};

export default TopBar;
