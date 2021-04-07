import React, {useState} from 'react';
import Main from './Main';
import LoginMain from './LoginMain';
import { Router } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css';
import FileUploader from './components/FileUploader';
import './App.css';
import NuggetForm from './components/NuggetApp/NuggetForm';
import NuggetList from './components/NuggetApp/NuggetList';
import axios from 'axios';
import RegistrationForm from './components/LoginApp/RegistrationForm';


function App() {
  // const [name, setName] = useState("");
  // const [selectedFile, setSelectedFile] = useState(null);
  
  // const submitForm = () => {
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("file", selectedFile);

  //   axios.post('http://localhost:8000/static', formData)
  //   .then((res) => {
  //     alert("file upload success");
  //   })
  //   .catch((err) => alert("file upload error"));
  // };

  return (
    <div className="App">
      {/* <Main path="/nugget/new" /> */}
      {/* <form>
        <input type="text" value= {name} onChange={(e) => setName(e.target.value)}/>

        <FileUploader
        onFileSelectSuccess={(file) => setSelectedFile(file)} 
        onFileSelectError={({ error }) => alert(error)} 
        />

        <button onClick={submitForm}>Submit</button>
      </form> */}

{/* THIS IS THE CODE THAT WORKS FOR REGISTRATION: */} 
          <a href="/">
            <h1> Root of Chaos </h1>
          </a>
      <div className="container" id="contentContainer">
          
        <Router>
          <LoginMain path="/" />
          <NuggetForm path="/nuggets/new" />
          <NuggetList path="/nuggets" />
        </Router>
          {/* 
          <TempDashboard /> 
          </div> */}
      </div>
    </div>
  );
}

export default App;
