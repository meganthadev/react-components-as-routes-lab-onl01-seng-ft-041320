import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
<<<<<<< HEAD
    <h1>Directors Page</h1>
=======
    h1>Directors Page</h1>
>>>>>>> d4d5c212248da53f7afd12170f95b717f841503a
    {directors.map((director, index) => (
      <div key={index} className='director'>
        <h3>Name: {director.name}</h3>
        <h4>Movies:</h4>
        <ul>
          {director.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          )
          )}
        </ul>
      </div>
    ))}
  </div>
  );
}

export default Directors
