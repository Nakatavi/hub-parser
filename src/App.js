import React, { useState } from 'react';
import FileUpload from "./components/fileUpload";
import Results from './components/results';

function App() {
  const [data, setData] = useState([]);

  const handleFileUpload1 =(data) =>{
    setData(data);
  };
  

  return (
    <div className="App">
      <FileUpload uploadData = {handleFileUpload1}/>
      <Results data = {data}/>
    </div>
  );
}

export default App;

