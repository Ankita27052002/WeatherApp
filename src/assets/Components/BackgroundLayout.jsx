
import { useState, useEffect } from 'react';
import { useStateContext } from '../../Context';
//images
import Clear from '../images/Clear.jpg'
import Fog from '../images/fog.png'
import Cloudy from '../images/Cloudy.jpg'
import Rainy from '../images/Rainy.jpg'
import Snow from '../images/snow.jpg'
import Stormy from '../images/Stormy.jpg'
//import Sunny from '../assets/images/Sunny.jpg'
const BackgroundLayout = () => {

  const {weather} = useStateContext()
  const[image, setImage] = useState(Clear)

  useEffect(() => {
    if(weather.conditions){
      let imageString = weather.conditions
      if(imageString.toLowerCase().includes('clear')){
        setImage(Clear)
      } else if(imageString.toLowerCase().includes('cloud')){
        setImage(Cloudy)
      } else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')){
        setImage(Rainy)
      } else if(imageString.toLowerCase().includes('snow')){
        setImage(Snow)
      } else if(imageString.toLowerCase().includes('fog')){
        setImage(Fog)
      } else if(imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')){
        setImage(Stormy)
      } 
    }
  })

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left=0 top-0 left-0 -z-[10]' />
  );
}

export default BackgroundLayout;
