import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
// import io from 'socket.io-client';
import Login from './views/Login';
import Messenger from './views/Messenger';

function App() {

  const [name,setName] = useState();

  return (
    <div className="App col-5 mx-auto">
      <>
        {name ? 
        <Messenger id={name} />
        :
        <Login  onNameSubmit={setName}/>}
      </>
    </div>
  );
}

export default App;
