//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { usePosition } from 'use-position';
import { Weather } from './components/Weather';


function App() {
  const [weather, setWeather] = useState()
  const { latitude, longitude } = usePosition()

  const getWeatherData = async (lat, lon) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
      )
      setWeather(data)
    } catch {
      alert('Veri alınırken hata oluştu.')
    }
  }
  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude)
  }, [latitude,longitude])

  return <>
  <h2>Hava Durumu </h2>
  <Weather weather={weather}/>
  </>
}

export default App
