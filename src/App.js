import './App.css';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Toast from './Components/Toast/Toast';
import { useContext } from 'react';
import { ModalContext } from './Providers/ModalProvider';


function App() {

  const [modal, setModal] = useContext(ModalContext);

  return (
    <div>

    <Sidebar />
    <div className="content">
      <Header />
      <Landing />
    </div>

    {
      modal ? <div className="overlay"/> : ''
    }
    {/* Aici putem adauga orice proprietati, sau putem crea un vector de astfel de toast-uri. */}
    <Toast message="Successfully saved the report" type="success"/>

    </div>
  );
}

export default App;
