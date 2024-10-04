import RouteApp from "./routes";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={300}/>
     <RouteApp/>
    </div>
  );
}

export default App;
