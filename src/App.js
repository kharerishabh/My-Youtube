import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div >
       <Header/>
       <Body/>
       {/**
        * Head
        * Body
        *   Sidebar
        *     MenuItems
        * MainContainer
        *  ButtonList
        *  VideoContainer
        *   Video Card
        */}
    </div>
    </Provider>
  );
}

export default App;
