import React, { useState, useEffect, useContext } from 'react';

import { ReactComponent as Graph1} from '../../assets/graph-1.svg';
import { ReactComponent as Graph2} from '../../assets/group-2.svg';
import { ReactComponent as Pie1} from '../../assets/pie-chart.svg';
import { ReactComponent as Pie2} from '../../assets/pie-chart2.svg';

import { useDataContext } from '../../context/data';

import SupportRequests from '../../components/SupportRequests';
import Chart from '../../components/Chart';


import { DashboardContainer } from './styles';



const additionalJsonData = `{
    "supportRequests": [
      {
        "name": "Bob Sacamento",
        "email": "bob_sacamento@gottlieb.ca",
        "timestamp": "2012-04-23T11:06:43.511Z",
        "phoneNumber": "214-300-5846",
        "city": "Long Island",
        "status": "unsent"
      },
      {
        "name": "Hal Kitzmiller",
        "email": "hal_kitzmiller@lindgren.com",
        "timestamp": "2012-04-23T08:22:43.511Z",
        "phoneNumber": "057-812-4000",
        "city": "The Bronx",
        "status": "unsent"
      },
      {
        "name": "Bob Cobb",
        "email": "bob.cobb@nelson.tv",
        "timestamp": "2012-04-23T14:22:43.511Z",
        "phoneNumber": "866-668-0327",
        "city": "Florence",
        "status": "unsent"
      },
      {
        "name": "Mike Moffett",
        "email": "mike_moffett@kaia.org",
        "timestamp": "2012-04-23T07:22:43.511Z",
        "phoneNumber": "647-851-1333",
        "city": "Upper East Side",
        "status": "unsent"
      }
    ]
  }`;




function Dashboard() {

    const { general, charts, terms, supportRequests } = useDataContext();

    const [ indexAddedData, setIndexAddedData ] = useState(0);

    const additionalData = JSON.parse(additionalJsonData);
    

    const handleAddClick = async () => {
        const data = additionalData.supportRequests[indexAddedData];

        supportRequests.push(data);

        if (indexAddedData >= 3 ) {
            setIndexAddedData(0)
        } else {
            setIndexAddedData(indexAddedData + 1); 
        }      
    }


    const handleSendClick = async (index) => {
        supportRequests[index].status = 'sent';
    }

    return (
        <DashboardContainer>
           <header>
                <h1>Data overview</h1>
                <div>
                    <div className="insertions-indicator"></div>
                    <span><b>{general.insertionsCount}</b> insertions needed to complete</span>
                </div>
           </header>
            
           <div className="panel">
               <div className="charts-container">
                    <Chart 
                        title="General results"
                        followersCount={charts.general && charts.general.followersCount}
                        graph={<Graph1 width={240}/>}
                        pie={<Pie1 width={110}/>}
                    />
                    <Chart 
                        title="Ratings by category"
                        followersCount={charts.ratingsByCategory && charts.ratingsByCategory.followersCount}
                        graph={<Graph2 width={240}/>}
                        pie={<Pie2 width={110}/>}
                    />
                    <div className="terms-container">
                        {terms && terms.map( (term, index) => {
                            return (
                                <div>
                                    <span>TERM {index + 1}</span>
                                    <span><b>{term}</b></span>
                                </div>
                            )
                        })}
                    </div>
               </div>


               {supportRequests.length && (
                    <SupportRequests 
                        supports={supportRequests}
                        handleAddClick={handleAddClick}
                        handleSendClick={handleSendClick}
                    />
               )}
               
           </div>

           <footer>
                <span>Showing <b>1</b> to <b>{supportRequests.length}</b> of {supportRequests.length} elements</span>
           </footer>
        </DashboardContainer>   
    )
}

export default Dashboard
