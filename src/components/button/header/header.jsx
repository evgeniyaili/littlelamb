import React from 'react';
import { hooks } from '../../../hooks/hooks';
import Button from '../button';
import './header.css';


const Header = (props) => {
   const {user, onClose} = hooks();

    return (
        <div className={'header'}>
            <div className={'logoContainer'}>
            <img src="../media/pic1.png" alt="sneaker logo"/>
            </div>
        {/* <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span> */}
        </div>
    );
 
};
export default Header;