import styled from 'styled-components';

export const ChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 8px;

    .chart-title {
        font-family: Lato;
        font-size: 15px;
        font-weight: bold;
        color: #354052;
        margin-bottom: 46px;
    }

    .info-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;


        div {
            display: flex;
            flex-direction: column;

            .followers {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 16px;

                h2 {
                    font-family: Helvetica;
                    font-size: 26px;
                    color: #37394c;
                    font-weight: 500;
                }

                span {
                    margin-left: 16px;
                    color: #8a96a0;
                }
            }
        }

        .pie-container {
            margin-left: 56px;
        }
    }

`;