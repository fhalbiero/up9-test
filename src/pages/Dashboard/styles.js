import styled from 'styled-components';

export const DashboardContainer = styled.div`
    width: 100%;
    min-width: 900px;
    background-color: #fafbfc;
    padding: 16px 48px;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            width: 500px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                font-size: 15px;
                color: #aab2c0;
            }

            b {
                color: #000;
                margin-right: 5px;
            }

            .insertions-indicator {
                width: 240px;
                height: 5px;
                border-radius: 2px;
                background-color: #0077ff;
                border-right: 40px solid #c7cdd9;
            }
        }
        
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
        border-radius: 1.9px;
        border: solid 0.5px #ebedf8;
        background-color: #ffffff;

        .charts-container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 40px;
            border-bottom: solid 0.5px #f0f0f0;
        }
    }


    .terms-container {

        div {
            margin: 16px 0px;

            span {
                font-size: 12px;
                color: #999999;
                padding: 0 26px;
            }

            b {
                color: #000;
            }
        }
    }

    footer {
        margin: 36px 0;
        color: #aab2c0;

        b {
            color: #333;
        }
    }
`;