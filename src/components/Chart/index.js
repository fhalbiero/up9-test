import React from 'react';

import { ChartContainer } from './styles';


function Chart({ followersCount, title, graph, pie}) {

    return (
        <ChartContainer> 
            <span className="chart-title">{title}</span>
            <div className="info-container">
                <div>
                    <div className="followers">
                        <h2>{followersCount}</h2>
                        <span>Followers</span>
                    </div>
                    {graph}
                </div>
                <div className="pie-container">
                    {pie} 
                </div>
                
            </div>     
        </ChartContainer>   
    )
}

export default Chart
