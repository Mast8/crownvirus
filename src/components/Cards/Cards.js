import React from 'react';
import './Cards.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  const addComma = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  

  const porcentage = (confirmed, recovered) => {
    const porcentaje = (recovered*100)/confirmed ;
    return porcentaje.toFixed(2) ;
  }

  const stillInfected = (confirmed, recovered, deaths) => {
    const still = confirmed-recovered-deaths ;
    console.log(still +"still");
    return still ;
  }

  return (
      <div className="cards">
        <div className="card infected">
           <h2>  Confirmed  </h2>
           <h1>    {addComma(confirmed.value)} </h1>
            <p> Number of Confirmed cases of COVID-19.  </p>
            <p>  {new Date(lastUpdate).toDateString()} </p>
        </div>
        <div className="card recovered">
            <h2>  Recovered ({porcentage(confirmed.value, recovered.value)}%)  </h2>
             <h1>    {addComma(recovered.value)} </h1>
         
            <p>   Number of recoveries from COVID-19. </p>
            <p> {new Date(lastUpdate).toDateString()}  </p>
        </div>
        <div className="card still">
            <h2>  Still infected ({porcentage(confirmed.value, stillInfected(confirmed.value, recovered.value, deaths.value))}%) </h2>
            <h1>    {addComma(stillInfected(confirmed.value, recovered.value, deaths.value))} </h1>
            <p>    Number of infected with COVID-19. </p>
            <p> {new Date(lastUpdate).toDateString()}  </p>
        </div>
        <div className="card deaths">
            <h2>  Deaths ({porcentage(confirmed.value, deaths.value)}%) </h2>
            <h1>    {addComma(deaths.value)} </h1>
            <p>    Number of deaths case of COVID-19. </p>
            <p> {new Date(lastUpdate).toDateString()}  </p>
        </div>

        
    </div>
    
    
 );
};
export default Info;
