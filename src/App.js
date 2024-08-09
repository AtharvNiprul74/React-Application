// import logo from './logo.svg';
import './App.css';
import Form from './my-components/Form';
import NavBar from './my-components/NavBar';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
        <div className="container my-3">
            <Form/>
        </div>
      </div>
    </div>
  );
}

export default App;
