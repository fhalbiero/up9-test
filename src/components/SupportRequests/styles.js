import styled, { css } from 'styled-components';

export const SupportContainer = styled.div`
    margin: 36px 48px;

    .top-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        
        button {
            font-family: Helvetica;
            color: #1880e7;
            font-size: 16px;
            background-color: transparent;
            border: none;
            cursor: pointer;

            &:focus {
                outline: 0 !important;
            }
        }
    }


    table {
        width: 100%;
    }

    tr {
        height: 46px;
    }

    th {
        font-family: Lato;
        text-align: left;
        font-size: 11px;
        color: #b4bac6;
        text-transform: uppercase;
    }

    td {
        font-family: Lato;
        text-align: left;
        font-size: 15px;
        font-weight: 500;
        color: #8a96a0;       
    }

    .td-name {
        font-family: Lato;
        font-weight: bold;
        color: #354052;
    }

`;


export const StatusButton = styled.button`
    font-family: Lato;
    font-size: 14px;
    border-radius: 4px;
    padding: 6px 16px;
    cursor: pointer;

    ${ ({status}) => status === 'sent' ? 
        css`
            background-color: #0077ff;
            color: #fff;
            border: 1px solid #0077ff; 
        ` 
        : 
        css`
            background-color: transparent;
            color: #8a96a0;
            border: 1px solid #8a96a0;

            &:hover {
                color: #0077ff;
                border: 1px solid #0077ff;
            }
        `
    }

    &:focus {
        outline: 0 !important;
    }
`;