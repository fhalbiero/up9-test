import React, { useState } from 'react';


import { SupportContainer, StatusButton } from './styles';


function SupportRequests({ supports, handleAddClick, handleSendClick }) {

    const [ update, setUpdate ] = useState(false);

    const getTimeFromDate = (date) => {
        return new Date(date).toLocaleTimeString('en', { 
            hour: "2-digit",
            minute: "2-digit",
            hour12: true, 
            timeZone: 'UTC',
            hourCycle: "h12"          
        });
    }


    return (
        <SupportContainer> 
            <div className="top-container">
                <h1>Support Requests</h1>
                <button onClick={handleAddClick}>ADD</button>
            </div>
            
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Time</th>
                            <th>PHONE NUMBER</th>
                            <th>CITY</th>
                            <th>status</th>
                        </tr>  
                    </thead>
                    <tbody>
                        {supports.length && supports.map( (support, index) => (
                            <tr>
                                <td className="td-name">{support.name}</td>
                                <td>{support.email}</td>
                                <td>{getTimeFromDate(support.timestamp)}</td>
                                <td>{support.phoneNumber}</td>
                                <td>{support.city}</td>
                                <StatusButton 
                                    status={support.status} 
                                    onClick={() => {
                                        handleSendClick(index);
                                        setUpdate(!update);
                                    }}
                                >
                                    {support.status === 'sent' ? 'Sent' : 'Send'}
                                </StatusButton>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </SupportContainer>   
    )
}

export default SupportRequests
