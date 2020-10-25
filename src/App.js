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

  var transformed = [];

  console.log(info,[]);

  // Change the names of the respective fields to WORK , DOP before the below step
  // so that errors can be avoided.


   transformed = info.map(({ WORK , DOP }) => ({ name: WORK , period: DOP }));
  

  transformed.forEach((item, i) => {
    
    
  item.id = i + 1;
  var date = item.period;
  if(date === undefined){
    item.actualStart = "Coming Soon"
  }
  else if(date.includes("-")){
    date = date.substring(date.indexOf(";") + 1);
    item.actualStart = date.substring(0,date.indexOf('-'));
    item.actualEnd = date.substring(date.indexOf('-')+1);
  }
  
});
  console.log(transformed);

  var chart = anychart.ganttProject();
  chart.data(transformed,'as-tree')

  return (
    <div >
      <h1>🥗</h1>
    <input type="file" accept=".xls , .xlsx" onChange={(e)=>{
      const file = e.target.files[0];
      readExcel(file);
    }}/>

    <AnyChart width="100%"
    height={600} instance={chart}  />
    
    </div>
  )
}

export default App
