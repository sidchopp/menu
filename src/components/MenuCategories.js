import React, { useState } from 'react'

import Menu from './Menu'
import Categories from './Categories'
import Data from './Data';

// for dynamic buttons based on each category
// We are making an array with 'all' and  (items).Hence spread operator
//A value in the Set may only occur once; it is unique in the Set's collection, so that we get everything in items only once
// const allCategories = ['all', ...new Set(Data.map((item) => item.category))];


function MenuCategories() {

  // states

  // Initial value of menuItems is the object (items) coming from Data.js
  const [menuItems, setMenuItems] = useState(Data);
  //console.log(Data);

  // The initial value of categories is 'allCategories' which is an array of 'all' and 'each individual' category
  const [categories, setCategories] = useState([]);

  // for creating buttons based on category, we will iterate over our ORIGINAL list of Data
  const filterItems = (categ) => {
    //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    const newItems = Data.filter((item) => item.category === categ)
    // so if the property category of item(which is coming from Data category) matches with whatever categ i m passing,then change the state of setMenuItems to newItems
    setMenuItems(newItems);
  }




  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filterItm={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </div>
  )
}

export default MenuCategories
