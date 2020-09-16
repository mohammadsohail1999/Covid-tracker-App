import './App.css'

import React from 'react';

import Cards from './components/Cards/Cards';
import Charts from './components/Chart/Chart';
import Country from './components/Country picker/CountryPicker';

import {fetchData} from './Api/Api';

class App extends React.Component{

state = {

 data: {},
 country: ''


}



async componentDidMount(){

  const Data = await fetchData();
  this.setState({data: Data})




}




handleCountryChange = async (country)=>{

const fetchedData = await fetchData(country);
console.log(fetchedData);
 
this.setState({data:fetchedData, country: country});



}





    render(){

      const {data,country} = this.state



     return (

       <div className="container">
         <img src="https://i.ibb.co/7QpKsCX/image.png" alt="COVID-19"/>
           <Cards  data={data}  />
            <Country handleCountryChange={this.handleCountryChange} />
             <Charts data={data} country={country}/>
         
       </div>







     )


    






    }








}


export default App 