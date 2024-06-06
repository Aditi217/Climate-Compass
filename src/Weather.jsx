import React, { useState } from 'react'

export default function Weather() {
  const [cityName, setCityName] = useState('Jaipur')
  const [weather, setWeather] = useState({})
  const apiKey = 'd8680242f27beb14a3998af360ad4b00';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  const handleChange = (e)=>{
    setCityName(e.target.value)
  }
  
  const handleSearch = ()=>{
    if(cityName){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json()
    })
    .then((data)=>{
      setWeather(data)
      console.log('weather data '+JSON.stringify(data, null, 2))
      
    })
    .catch((error) => {
      console.error('Error fetching the weather data:', error);
    });
    }
  }
  return (
    <>
      <div className='bg-image bg-cover bg-no-repeat h-screen flex justify-center items-center'>
        <div className='w-3/5 h-4/5 bg-indigo-300 bg-opacity-20 rounded-lg flex relative'>
          {/* left side */}
          <div className='bg-left bg-cover w-1/2'>
            <p className='font-bold text-xl flex justify-end mr-2 mt-2'>{weather.name}, {weather.sys.country}</p>
            <div className='flex justify-between items-end w-1/2 absolute bottom-0 mb-2'>
              <div className='ms-2'>
                <p className='text-white font-bold text-xl'>{weather.coord && weather.coord.lon.toFixed(1)}</p>
                <p className='text-white font-bold text-xl'>{weather.coord && weather.coord.lat.toFixed(1)}</p>
              </div>
              <p className='text-white font-bold text-xl me-2'>{weather.main && weather.main.temp} deg</p>
            </div>
          </div>
          {/* right side */}
          <div className='w-1/2 mt-16'>
            <hr />
            <div className='mt-11 '>
              <p className=''>
               <input type="text" placeholder='search weather' className='w-3/4 bg-transparent p-3 text-xl' value={cityName} onChange={handleChange}/>
               <button className='font-bold text-xl text-center w-1/4' onClick={handleSearch}>Search</button>
              </p>
            </div>
            <div>
              <p className='text-center'>{weather.name}, {weather.sys.country}</p>
              <p className='text-center'>{weather.weather[0]["description"]}</p>
              <div className='mt-10'>
                <div className='flex justify-around font-bold text-white text-l mb-4 border-b border-gray-300 m-4 p-2'>
                  <p>Visibility</p>
                  <p>{(weather.visibility)/100} Km</p>
                </div>
                <div className='flex justify-around font-bold text-white text-l mb-4 border-b border-gray-300 m-4 p-2'>
                <p>Feels Like</p>
                  <p>{weather.main.feels_like.toFixed(1)} deg</p>
                </div>
                <div className='flex justify-around font-bold text-white text-l mb-4 border-b border-gray-300 m-4 p-2'>
                  <p>Wind Speed</p>
                  <p>{weather.wind && weather.wind.speed}km</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
