import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import football from '../../api/football'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { Sidebar } from '../../components/sidebar/Sidebar'
import Lea from './Lea'

const League = () => {
  const [leagueData, setLeagueData] = useState([])
  const location = useLocation()
  useEffect(() => {
    const getLeagueByCountryId = async () => {
      const id = location.pathname.replace('/league/', '')
      await football.getLeagues(id).then((res) => {
        setLeagueData(res.data)
      })
    }
    getLeagueByCountryId()
  }, [])
  return (
    <div className="home-component w-100">
      <Sidebar></Sidebar>
      <div className="content-container">
        <Header></Header>
        <div>
          <div className="p-3 row col-12 w-100 overflow-auto">
          {leagueData.map((item) => (
            <Lea key={item.league_id} logo={item.league_logo} name={item.league_name} season={item.league_season}></Lea>
          ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default League