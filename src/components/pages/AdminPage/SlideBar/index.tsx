import * as React from 'react';
import styles from './style.module.css'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DraftsIcon from '@mui/icons-material/Drafts';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FaceIcon from '@mui/icons-material/Face';
import SellIcon from '@mui/icons-material/Sell';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link, NavLink } from 'react-router-dom';

export default function SlideBar() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List disablePadding>
          <NavLink to='user' className={styles.navLink}>
          <ListItem disablePadding className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                <ManageAccountsIcon  />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItemButton>
          </ListItem>
          </NavLink>

          <NavLink to='author' className={styles.navLink}>
          <ListItem disablePadding className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary="Author" />
            </ListItemButton>
          </ListItem>
          </NavLink>

          <NavLink to='bill' className={styles.navLink}>
          <ListItem disablePadding className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                <SellIcon />
              </ListItemIcon>
              <ListItemText primary="Bill" />
            </ListItemButton>
          </ListItem>
          </NavLink>

          <NavLink to='book' className={styles.navLink}>
          <ListItem disablePadding className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                <ImportContactsIcon />
              </ListItemIcon>
              <ListItemText primary="Book" />
            </ListItemButton>
          </ListItem>
          </NavLink>

        <NavLink to='checkout' className={styles.navLink}>
          <ListItem disablePadding className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to='category' className={styles.navLink}>
          <ListItem disablePadding className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Category" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to='publisher' className={styles.navLink}>
          <ListItem disablePadding className={styles.listItem}>
            <ListItemButton>
              <ListItemIcon>
                <InventoryIcon />
              </ListItemIcon>
              <ListItemText primary="Publisher" />
            </ListItemButton>
          </ListItem>
        </NavLink>
        </List>
      </nav>
      <Divider />
    </Box>
  );
}