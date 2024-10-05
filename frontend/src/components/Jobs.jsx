import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'

const Jobs = () => {
  return (
    <div>
      <Navbar/>
      {/* Filte page */}
      <FilterCard/>

      {/* jobs card */}
    </div>
  )
}

export default Jobs