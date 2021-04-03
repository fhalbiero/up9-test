import Navbar from './components/Navbar';
import GlobalStyle from './styles/global';

import Routes from './routes';

import { DataContextProvider } from './context/data';

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Navbar />
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <Routes />
        </div>
      </DataContextProvider>
      
      <GlobalStyle />
    </div>
  );
}

export default App;
