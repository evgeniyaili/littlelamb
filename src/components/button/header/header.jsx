import React from 'react';
import { hooks } from '../../../hooks/hooks';
import Button from '../button';
//import './components/button/header/header.css';


const Header = (props) => {
   const {user, onClose} = hooks();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
 
};
export default Header;