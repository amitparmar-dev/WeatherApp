import React from "react";
import Container from "./components/Container";
import Input from "./components/Input";
import './style.css'
import axios  from "axios";

const App = props =>{
    const [city, setCity] = React.useState('')
    const [tempObj, setTempObj] = React.useState({});
      
    const api = {
        baseURL : "http://api.openweathermap.org/data/2.5/weather",
        key : "995af56703c54a0fbfb4baae77c4fda" // This is a dummy key value. You can generate your key from openweathermap.org
    }

    const onKeyPress = city => {
        setCity(city);
        axios.get(`${api.baseURL}?q=${city}&appid=${api.key}&units=metric`)
        .then((res)=>{
            if(res.status == 200){
                setTempObj({
                        temp : res.data.main.temp,
                        city : city,
                        country : res.data.sys.country                    
                    })
            }
        })
        .catch(error =>{
            setCity('')
            setTempObj({})
         console.log(error)})
    }
   const tempClass = temp =>{
        if(temp < 0)
            return 'app-cold';
        else
            return 'app-warm';
        }
       
    return(<div className={tempClass(tempObj.temp)}>
        <Input 
            city = {city}
            setCity = {setCity}
            onKeyPress = {onKeyPress}
        />
        <Container 
            tempData={tempObj} 
            city = {city}
        />
    </div>)
}

export default App;