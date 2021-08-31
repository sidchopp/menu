import React from 'react'

function Categories({ filterItm, myCategory }) {
  return (

    // for dynamic button we iterate over 'myCategory' and display button for each of its value(1st param)
    // we are passing index( 2nd param) for key

    <div className="btn-container">
      {myCategory.map((value, index) => {
        // console.log(value);
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItm(value)}
          >
            {value}
          </button>
        )


      })}

    </div>
  )
}

export default Categories
