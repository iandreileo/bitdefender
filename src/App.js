import './App.css';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';


function App() {
  return (
    <div>

    <Sidebar />
    <div className="content">
      <Header />
      <Landing />
    </div>


    </div>
  );
}

export default App;
