import React from 'react'
import { useCart } from '../CartContext';

function Search() {
  const { cartState } = useCart();
  const { searchResults } = cartState;

  return (
    <section className='searchPage'>
      <div className='innersearch'> 
        <h1>Search Result</h1>
        <ul>
          {searchResults.map((result: any) => (
            <li key={result.id} className='displaysearchcard'>
              <img src={result.image} alt="" />
              <h3>{result.name}</h3>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Search