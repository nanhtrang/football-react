import React, { useEffect, useState } from "react";
import football from "../../api/football";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
// import actionTypes from '../constants/actionType'
// import footballModule from '../module/football.module'

const Home = () => {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate()
  const clickCountry = (id) => {
    navigate(`/league/${id}`)
    console.log(id);
  };

  useEffect(() => {
    football.getCountries().then((res) => {
      setCountries(res.data);
    });
  }, []);
  return (
    <div className="home-component w-100">
      <Sidebar></Sidebar>
      <div className="content-container">
        <Header></Header>
        <div>
          <div className="p-3 row col-12 w-100 overflow-auto">
            {countries.map((country) => (
              <div onClick={() => clickCountry(country.country_id)} className="col-sm-2 country-box" key={country.country_id}>
                <div className="w-100 p-1">
                  <img className="w-100 country-logo" src={country.country_logo} alt="" />
                </div>
                <div className="w-100 p-0 d-flex justify-content-center">{country.country_name}</div>
              </div>
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
