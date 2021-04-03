import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ReactComponent as Dashboard} from '../../assets/dashboard.svg';
import { ReactComponent as Chat} from '../../assets/chat.svg';
import { ReactComponent as Folder} from '../../assets/folder.svg';
import { ReactComponent as Message} from '../../assets/message.svg';
import { ReactComponent as Cog} from '../../assets/cog.svg';

import { SidebarContainer, Button } from './styles';

function Sidebar() {

    const history = useHistory();

    const [ isDashboardSelected, setIsDashboardSelected ] = useState(true);
    const [ isChatSelected, setIsChatSelected ] = useState(false);
    const [ isFolderSelected, setIsFolderSelected ] = useState(false);
    const [ isMessageSelected, setIsMessageSelected ] = useState(false);
    const [ isConfigSelected, setIsConfigSelected ] = useState(false);

    const handleClick = (setter, route) => {
        setIsDashboardSelected(false);
        setIsChatSelected(false);
        setIsFolderSelected(false);
        setIsMessageSelected(false);
        setIsConfigSelected(false);

        setter(true);

        history.push(route);
    }

    return (
        <SidebarContainer> 
            <Button 
                onClick={() => handleClick(setIsDashboardSelected, '/dashboard')}
                selected={isDashboardSelected}>
                <Dashboard />                
            </Button>
            <Button 
                onClick={() => handleClick(setIsChatSelected, '/chat')}
                selected={isChatSelected}>
                <Chat />
            </Button>
            <Button 
                onClick={() => handleClick(setIsFolderSelected, '/folder')}
                selected={isFolderSelected}>
                <Folder /> 
            </Button>
            <Button 
                onClick={() => handleClick(setIsMessageSelected, '/message')}
                selected={isMessageSelected}>
                <Message />
            </Button>
            <Button 
                onClick={() => handleClick(setIsConfigSelected, '/config')}
                selected={isConfigSelected}>
                <Cog />
            </Button> 
        </SidebarContainer>   
    )
}

export default Sidebar
