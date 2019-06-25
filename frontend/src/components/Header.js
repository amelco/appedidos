import React from 'react';

import './Header.css';
import logo from '../assets/logo.svg';
import plus from '../assets/plus.svg';

export default function Header() {
    return(
        <header id="main-header">
            <div className="header-content">
                <img src={logo} alt="Appedidos" />
                <img src={plus} alt="Criar publicação" />
            </div>
        </header>
    );
}