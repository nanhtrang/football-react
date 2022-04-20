import React, { useState } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { Sidebar } from '../components/sidebar/Sidebar'
import actionTypes from '../constants/actionType'
import footballModule from '../module/football.module'



const Home = () => {
  const [countries, getCountries] = useState()
  // getCountries(123123123123)
  // footballModule[actionTypes.GET_COUNTRIES] ().then(res => {
  //   console.log(res.data);
  //   getCountries(res.data)
  // })
  return (
    <div className='home-component min-vh-100 d-flex min-vw-100'>
      <Sidebar></Sidebar>
      <div className='w-100 d-flex flex-column min-vh-100'>
        <Header></Header>
        <div className='p-3 w-100'>
        {countries}
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home