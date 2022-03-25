import React from 'react'

export default function Input({city,onKeyPress,setCity}) {
    //const [city, setCity] = React.useState('')
    const handleKeyPress = (key) =>{
        if(key.code === 'Enter')
            onKeyPress(city)
    }
  return (
    <div className='search-box'>
        <input 
            className='search-bar'
            type='text'
            placeholder='City Name'
            value={city}
            onChange={e=>setCity(e.target.value)}
            onKeyPress = {handleKeyPress}
        />
    </div>
  )
}
