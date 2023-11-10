//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import React, { useState, useEffect } from 'react'
import { usePosition } from 'use-position';

function App() {
  const [weather, setWeather] = useState()
  const { latitude, longitude } = usePosition()

  const getWeatherData = async (lat, long) => {
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
  console.log(latitude, longitude, weather);

  return <>Hava Durumu</>
}

export default App
