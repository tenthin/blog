import React from 'react'
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavigationBar.scss';


function NavigationBar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    Tenzin
                </Navbar.Brand>
        </Navbar>
    </div>
  )
}


export default NavigationBar;