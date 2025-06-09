import React from 'react'
import './MainDash.css'
import Cards from '../cards/cards'
import Table from '../Tables/Table'


const MainDash = () => {
  return (
    <div className="MainDash"> 
   <h1>DashBoard</h1>
  
   <Cards/>
  <Table/>

    </div>
  )
}

export default MainDash

