import styled, { css } from 'styled-components';

export const SidebarContainer = styled.div`
    width: 86px;
    min-width: 86px;
    border-radius: 2px;
    border: solid 0.5px #ebedf8;
    border-top: 0;
    background-color: #ffffff;
    padding-top: 36px;

    
`;

export const Button = styled.button`
    width: 100%;
    padding: 16px 0;
    margin: 16px 0;  
    border: none;
    background-color: transparent;  
    border-right: 3px solid transparent;
    cursor: pointer;
    transition: all .3s;
    
    &:focus {
        outline: 0 !important;
    }

    svg {
        width: 24px;
        height: 24px;
        object-fit: contain;

        path {
            fill: #b4bac6;

            ${props =>  props.selected && css`
                fill: #0077ff;
            `}
        }
    }

    ${props =>  props.selected && css`
        border-right: 3px solid #0077ff;
    `}
`;