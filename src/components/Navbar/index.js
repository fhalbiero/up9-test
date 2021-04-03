import React from 'react';

import { ReactComponent as Logo} from '../../assets/logo.svg';

import { NavbarContainer } from './styles';

function Navbar() {
    return (
        <NavbarContainer> 
            <div className="logo-container">
                <Logo />
            </div>
            <div className="navigation-container">
                <button>
                    Overview
                </button>
            </div>
            <div className="premium-container">
                <button>
                    Premium
                </button>
            </div>
        </NavbarContainer>   
    )
}

export default Navbar
