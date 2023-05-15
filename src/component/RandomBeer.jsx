import React, { useEffect, useState } from 'react';

const RandomBeerPage = () => {
  const [beer, setBeer] = useState(null);

  const fetchRandomBeer = async () => {
    try {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/random');
      if (response.status === 200) {
        const data = await response.json();
        setBeer(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomBeer();
  }, []);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{beer.name}</h2>
      <p>Tagline: {beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Description: {beer.description}</p>
      <p>ABV: {beer.abv}</p>
      <img src={beer.image_url} alt={beer.name} style={{ width: '200px' }} />
    </div>
  );
};

export default RandomBeerPage;