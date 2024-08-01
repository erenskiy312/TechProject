import React from 'react';
import './main.scss'
import Logo from '../images/Logo.svg'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WalletIcon from '@mui/icons-material/Wallet';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const Main = () => {
    return (
        <div className='wrapper'>
            <div className='sidebar'>
                    <img src={Logo} alt="" />
                <nav>
                    <TrendingUpIcon className='trending-icon'/>
                    <WalletIcon className='wallet-icon'/>
                    <CheckroomIcon className='cloth-icon'/>
                    <PersonAddAltIcon className='addPerson-icon'/>
                </nav>
            </div>
        </div>
    );
};

export default Main;