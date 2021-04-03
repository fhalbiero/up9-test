import React, { createContext, useContext, useState, useEffect } from 'react';


const DataContext = createContext({});

const DataContextProvider = ({ children }) => {
    
    const [ general, setGeneral ] = useState({});
    const [ charts, setCharts ] = useState({});
    const [ terms, setTerms ] = useState([]);
    const [ supportRequests, setSupportRequests ] = useState({});

    const getGeneral = async () => {
        const response = await fetch('http://localhost:3333/general');
        const data = await response.json();
        setGeneral(data);
    }

    const getCharts = async () => {
        const response = await fetch('http://localhost:3333/charts');
        const data = await response.json();
        setCharts(data);
    }

    const getTerms = async () => {
        const response = await fetch('http://localhost:3333/terms');
        const data = await response.json();
        setTerms(data);
    }

    const getSupportRequests = async () => {
        const response = await fetch('http://localhost:3333/supportRequests');
        const data = await response.json();
        setSupportRequests(data);
    }

    useEffect(() => {
        getGeneral();
        getCharts();
        getTerms();
        getSupportRequests();
    }, []);
    

    return (
        <DataContext.Provider value={{ general, charts, terms, supportRequests }}>
            {children}
        </DataContext.Provider>
    )
}

const useDataContext = () => {
    const context = useContext(DataContext);

    if (!context) {
        throw new Error("This function must be called within a DataContextProvider");
    }

    return context;
}

export { DataContextProvider, useDataContext }