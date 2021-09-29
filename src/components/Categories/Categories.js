import React, { useEffect, useCallback, useState } from 'react';
import './Categories.css';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
const Categories = () => {
  let { catName } = useParams();

  const history = useHistory();
  const location = useLocation();

  // console.log(history, 'history');

  const [categories, setCategories] = useState([]);

  // console.log(catName, 'catName');

  const fetchRandomCategories = useCallback((catName) => {
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${catName}`)
      .then((response) => {
        // console.log(response.data);
        setCategories((oldArray) => [...oldArray, response.data]);
      });
  }, []);

  useEffect(() => {
    fetchRandomCategories(catName);
    fetchRandomCategories(catName);
    fetchRandomCategories(catName);
    fetchRandomCategories(catName);
    fetchRandomCategories(catName);

    if (history.location.pathname === `/category/${catName}`) {
      const json = JSON.stringify(categories);
      localStorage.setItem('categories', json);
      setCategories([]);
    }
    // eslint-disable-next-line
  }, [fetchRandomCategories, setCategories, catName, location.key]);

  const localCategories = JSON.parse(localStorage.getItem('categories'));

  return (
    <div className='container'>
      <div className='container_grid'>
        {categories &&
          categories.map((cat) => (
            <div className='grid'>
              <div className='jokeDetail'>
                <div key={cat.id} className='flex'>
                  <img src={cat.icon_url} alt='' />
                  <span>{cat.categories}</span>
                </div>
              </div>
              <p className='jokeText'>{cat.value}</p>
            </div>
          ))}
      </div>
      <h1>Last Joke Items</h1>
      <div className='container_grid'>
        {localCategories &&
          localCategories.map((localCat) => (
            <div className='grid'>
              <div className='jokeDetail'>
                <div key={localCat.id} className='flex'>
                  <img src={localCat.icon_url} alt='' />
                  <span>{localCat.categories}</span>
                </div>
              </div>
              <p className='jokeText'>{localCat.value}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
