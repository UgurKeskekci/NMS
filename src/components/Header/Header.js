import React from "react";
import classes from './Header.module.css';
import logo from '../../assets/opticoms_logo.png';


import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';   //Optional for grouping
        

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="#default" className={classes.logo}>
       <img src={logo} alt='logo'/>
      </a>
      <div className={classes['header-right']}>
        <a className={classes.active} href="#home">
          Home
        </a>
        
        <a href="#info">Info</a>
        <a href="#badge"><Avatar size="small" label="U" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" /> </a>
      </div>
    </header>
  );
};


export default Header;
