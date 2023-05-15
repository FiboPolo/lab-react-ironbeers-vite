import React, { useState } from 'react';

const NewBeerPage = () => {
  const [beerData, setBeerData] = useState({
    name: '',
    tagline: '',
    description: '',
    abv: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBeerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(beerData),
      });
      if (response.status === 200) {
        setMessage('New beer successfully saved to the database!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create New Beer</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={beerData.name} onChange={handleInputChange} />
        </label>
        <label>
          Tagline:
          <input type="text" name="tagline" value={beerData.tagline} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <textarea name="description" value={beerData.description} onChange={handleInputChange} />
        </label>
        <label>
          ABV:
          <input type="text" name="abv" value={beerData.abv} onChange={handleInputChange} />
        </label>
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
};

export default NewBeerPage;