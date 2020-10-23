import React, { useState } from 'react'
import "./App.css"
import xlsx from "xlsx"
import AnyChart from '../node_modules/anychart-react/dist/anychart-react.min.js'
import anychart from 'anychart'
var data = require('./gantt')
console.log(data);

function App() {

  const [ info, setInfo ] = useState([])
  const readExcel = (file) => {

    const promise = new Promise((resolve,reject)=>{
      const fileReader = new FileReader;
      fileReader.readAsArrayBuffer(file);

      fileReader.onload=(e)=>{
        const bufferArray = e.target.result;

        const wb = xlsx.read(bufferArray, {type:"buffer"})

        const wsName = wb.SheetNames[0];
        const ws = wb.Sheets[wsName];

        const data = xlsx.utils.sheet_to_json(ws);

        resolve(data);
      }

      fileReader.onerror=(error)=>{
        reject(error);
      };


    });

    promise.then((d)=>{
      setInfo(d);
      
    })
  }

  
  console.log(info,[]);
  const transformed = info.map(({ WORK }) => ({ name: WORK }));

  transformed.forEach((item, i) => {
  item.id = i + 1;
});
  console.log(transformed);

  var chart = anychart.ganttProject();
  chart.data(transformed,'as-tree')

  return (
    <div >
      
    <input type="file" onChange={(e)=>{
      const file = e.target.files[0];
      readExcel(file);
    }}/>

    <AnyChart width="100%"
    height={600} instance={chart}  />
    
    </div>
  )
}

export default App
