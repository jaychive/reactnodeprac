import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './Main';

function App(props) {
  const newdb = props.sort;
  const [nodejson, updateNodejson] = useState({});

  useEffect(() => {
    axios.get('http://localhost:5000/viewget/probsDB')// 비동기 통신을 갔다가 온(get) 후(then)
    .then((res)=>{
      console.log('data is'+ JSON.stringify(res.data));
      const probsdata = {...res.data};
      updateNodejson(probsdata);
    })
  },[]);

  console.log(nodejson[newdb].h2);

  return (
    <div className="App">
      <h2>{nodejson[newdb].h2}</h2>
    </div>
  );
}

export default App;

