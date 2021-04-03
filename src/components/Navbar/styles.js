import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: #ffffff;
    border-bottom: solid 0.5px #ebedf8;

    .logo-container {

        svg {
            width: 36px;
            height: 36px;
            margin: 16px 26px;
        }
    }

    .navigation-container {
        width: 500px;
        height: 100%;

        button {
           height: 100%;
           font-size: 15px;
           background: transparent;
           color: #0077ff; 
           padding: 8px;
           border-radius: 4px;
           border: none;
           border-bottom: 2px solid #0077ff; 
        }
    }

    .premium-container {

        button {
           font-size: 14px;
           background: #0077ff;
           color: #fff; 
           padding: 8px 26px;
           border-radius: 2px;
           border: none;
           margin: 0 26px;
        }
    }
    

`;