import React, {useState,useEffect} from 'react';
import {fetchDailyData} from '../../Api/Api';
import {Line,Bar} from 'react-chartjs-2';
import './Chart.css';






const Charts = ({data,country})=>{

const[dailyData,setDailyData] = useState([]);
console.log(dailyData);

useEffect(()=>{

    const fetch = async()=>{ 

      const Dailydata = await fetchDailyData();
      
     setDailyData(Dailydata);

    }
     

   fetch();


},[]);


const LineChart = (

    dailyData ? <Line
    
    data={{
        labels: dailyData.map((data)=>{return data.date}) ,
        datasets:[{
          data: dailyData.map((data)=>{return data.confirmed}),
          label: 'Infected',
          borderColor: '#3333ff',
          fill: true
        },{
          data: dailyData.map((data)=>{return data.deaths}),
          label: 'Deaths',
          borderColor: 'red',
          fill: true
        },],
    }}
    
    
    />: null



);


const barChart = (

  data.confirmed ? (<Bar data={{
    labels:['Infected', 'Recovered','Deaths'],
    datasets:[{
      labels:'People',
      backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
      data:[data.confirmed.value,data.recovered.value,data.deaths.value]
    }]
  }}  options={{
    legend:{display: false},
    title: {display: true, text: `Current state in ${country}`}
  }} />):
  
  null





)


  return <div className="container">
 {country?barChart:LineChart}



  </div>





}



export default Charts;