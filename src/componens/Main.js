import React from 'react';
import './main.css'

   let value = Math.random();
   let result;
   setInterval(() => {
       result =  value > 0.5 ? 'win' : 'loss';
   },1000)
console.log(result)

const Main = (props) => {
 
return <main>
     < p > A JavaScript library
     for building user interfaces < /p>
    <h5>Prerequisite to get started react:</h5>
    {props.techs.map((tech,i)=> {
        return <h3 key={"id"+i}>{tech}</h3>
    })}
   
    <h2 className={result}>Result</h2>
</main>
};
export default Main;