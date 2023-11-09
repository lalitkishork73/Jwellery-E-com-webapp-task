import React, { useEffect, useState } from 'react';
import { DimondLogo, Cart } from './../assets';
import { NavLink } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';
import { FaBarsStaggered } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { useCart } from '../CartContext';
import { data } from './../data';

const Header = () => {
  const [headerSticky, setHeaderSticky] = useState(false);
  const { cartState, dispatch } = useCart(); // Destructure dispatch from useCart
  const totalItems = cartState.items.length;
  const [toggle, setToggle] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const updateSearchResults = () => {
    const filteredResults: any = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);

    // Dispatch the search results after obtaining them
    dispatch({ type: 'UPDATE_SEARCH_RESULTS', payload: filteredResults });
  };

  const switchs = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isSticky = window.scrollY > window.innerHeight * 0.7;

      if (isSticky !== headerSticky) {
        setHeaderSticky(isSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerSticky]);

  return (
    <header className={`header ${headerSticky ? 'header-sticky' : ''}`}>
      <NavLink className='logosection' to='/'>
        <img src={DimondLogo} alt="DimondLogo" className='pentagon' />
        <h1>Dimonica Jwells</h1>
      </NavLink>

      <div className='menutag'>
        {!toggle ? (
          <FaBarsStaggered style={{ color: 'black' }} onClick={switchs} />
        ) : (
          <GrClose onClick={switchs} />
        )}
      </div>
      <nav>
        <ul className={toggle ? 'barone.show' : 'barone'}>
          <li>
            <NavLink className="nav" to='/rings' onClick={switchs}>
              Rings
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to='/necklaces' onClick={switchs}>
              Necklaces
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to='/earrings' onClick={switchs}>
              Earrings
            </NavLink>
          </li>
          <li>
            <NavLink to='/cart' className='carttext' onClick={switchs}>
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='rightsection'>
        <NavLink to='/cart' className='cartname'>
          <div className='cart'>
            <img src={Cart} alt="Cart" />
            <p>{totalItems}</p>
          </div>
        </NavLink>
        <NavLink to='/search'>
          <div className='searchinput'>
            <input
              type="text"
              placeholder='Search'
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button className='inputbtn' onClick={updateSearchResults}>
              <FaSearch />
            </button>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
