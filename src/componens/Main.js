import React from 'react';
let value = Math.random();
let result;
setInterval(() => {
  result = value > 0.5 ? 'win' : 'loss';
}, 1000);
console.log(result);

const Main =({techs, contents}) => {

    const topics = contents.map((content) => {
        return <div>
            <h1>{content.topic}</h1>
            <p>{content.content}</p>
        </div>
    })
  return <main>
      <h3>Prerequisite to get started react:</h3>
      {techs.map((tech, i) => {
        return <h3 key={'id' + i}>{tech}</h3>;
      })}
      <h2> A JavaScript library for building user interfaces </h2>
      {topics}

      <h2 className={result}>{result}</h2>
    </main>;
};
export default Main;
