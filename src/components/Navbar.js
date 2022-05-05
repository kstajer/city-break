import React, {useEffect} from 'react'
import Logo from './../img/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <header className="navbar">

        <img className="logo" src={Logo} onClick={() => {
            navigate("/")
          }
        }/>
        <nav className="navigation">
          <div onClick={() => {
            navigate("/tips")
          }}>Wskazówki</div>
          <div onClick={() => {
            navigate("/")
          }}>Miejsca</div>
          <div onClick={() => {
            navigate("/about")
          }}>Info</div>
        </nav>

    </header>
  )
}

export default Navbar