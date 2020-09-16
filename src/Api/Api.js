import axios from 'axios';



const url = 'https://covid19.mathdro.id/api';


export const fetchData = async (country)=>{

let chageableUrl = url;

if(country){
    chageableUrl = `${url}/countries/${country}`
}
    try{
const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(chageableUrl);

const modifiedData = {
     confirmed,
     recovered,
     deaths,
     lastUpdate

}



return modifiedData;

    }catch(error){

     
    console.log(error);


    }



}



export const fetchDailyData = async()=>{


    try {

      const {data} = await axios.get(`${url}/daily`);
      

      const modifiedData = data.map((dailyData)=>{
       
   return { 
       confirmed: dailyData.confirmed.total,
         deaths:  dailyData.deaths.total,
         date: dailyData.reportDate


   }


      }


      
      )
      
      return modifiedData;
      

    }catch(error){


    }







}



export const countries = async()=>{

try{
    const {data} = await axios.get(`${url}/countries`);
   
 const modifiedData =   data.countries.map((country)=>{
        return country.name
    })
    
    return modifiedData
    

}
catch(error){


console.log(error);

}








}