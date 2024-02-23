import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './store/store';
import MainContainer from "./components/MainContainer"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import HooksDemo from './components/HooksDemo';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    },
    {
      path: "demo",
      element: <HooksDemo/>
    },
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div >
       <Header/>
       <RouterProvider router={appRouter}/>
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
