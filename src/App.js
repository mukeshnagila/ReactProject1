
import './App.css';
import './Components/nav.css';
// import ContextStore from './ContextStore/ContextStore';
import AllRoutes from './Routes/AllRoutes';

function App(){
  return(
    <>
        
        <div className='App'>
            <AllRoutes />
        </div>
        <div>
            {/* <ContextStore /> */}
        </div>

    </>
)
}

export default App;