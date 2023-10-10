import React, { useState } from 'react';
import FileUpload from "./components/fileUpload";
import Results from './components/results';
import Login from './services/login'
import Layout from './components/layout';
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(false);

  const handleFileUpload =(data) =>{
    setData(data);
  };
  const handleLogin = (status) => {
    setUser(status);
  };

  return (
    <div className="App">
      <Layout uploadData={handleFileUpload}/>
        <FileUpload uploadData={handleFileUpload} />
        <Results data={data} />
    </div>
  );
}

export default App;

