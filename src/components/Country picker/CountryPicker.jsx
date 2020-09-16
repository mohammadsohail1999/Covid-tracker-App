import React, {useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core'



import './Country.css'


import {countries} from '../../Api/Api';

const Country = ({handleCountryChange})=>{

const [fetchCountries,setFetchCountries] = useState([]);
console.log(fetchCountries);

    useEffect(()=>{
     
        const FetchCountries = async () =>{


             const data = await countries();
          
             setFetchCountries(data)

        }

                  
        FetchCountries();



    },[setFetchCountries]);


return (<div>
    <FormControl className="formcontrol">
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value="">Global</option>
{fetchCountries.map((country,i)=>{ return <option key={i} value={country}>{country}</option>})}
        
        </NativeSelect>
    </FormControl>
</div>)





}



export default Country;


