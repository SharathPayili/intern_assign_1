import React from 'react'
import AnyChart from '../node_modules/anychart-react/dist/anychart-react.min.js'
import anychart from 'anychart'




 function Gantt() {

    var info;

     anychart.data.loadGoogleSpreadsheet('1vLGbBZoBDXVT3IaykMb4HhvfXgoAOzEM3Rrk1xLN5aU', function(data) {
    
        info = data;    
});
 
console.log(info);
  var chart = anychart.ganttProject(); 
  chart.data(info, 'as-table');
  chart.title('Create a Gantt Project chart');

    return (
        <div>
            <h1>Hello world</h1>
      <AnyChart width="100%"
    height={600} instance={chart}  />
        </div>
    )
};



export default Gantt;