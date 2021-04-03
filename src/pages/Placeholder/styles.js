import styled from 'styled-components';

export const  Container = styled.div`
    width: 100%;
    min-width: 900px;
    background-color: #fafbfc;
    padding: 16px 48px;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;        
    }

    h1 {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        font-weight: bold;
        margin: 28px 0;
        color: #1a173b;
    }

    .panel {
        width: 100%;
        height: 500px;
        border-radius: 1.9px;
        border: solid 0.5px #ebedf8;
        background-color: #ffffff;
    }


   

    footer {
        margin: 36px 0;
        color: #aab2c0;
    }
`;