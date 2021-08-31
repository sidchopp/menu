import React from 'react'

function Categories({ filterItm }) {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => {
        filterItm('breakfast')
      }}>Breakfast</button>
    </div>
  )
}

export default Categories
