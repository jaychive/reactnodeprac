import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './Main';

function App() {
  const [nodejson, updateNodejson] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/probsDB')// 비동기 통신을 갔다가 온(get) 후(then)
    .then((res)=>{
      console.log('data is'+ JSON.stringify(res.data));
      updateNodejson(JSON.stringify(res.data));
    })
  },[]);

  console.log(nodejson);
  return (
    <div className="App">
      {nodejson}
    </div>
  );
}

export default App;

