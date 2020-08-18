import React, { Component } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap'

class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: true,
      setCollapsed: true
    }
  }
  render (){
    let{collapsed, setCollapsed} = this.state
    // TypeError: setCollapsed is not a function
    const toggleNavbar = () => setCollapsed(!collapsed)
        return (
        <React.Fragment>
          <div>
      <Navbar color="faded" light>
        <NavbarBrand to= {`/`} className="mr-auto">Cat Tinder</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink to= {`/catindex`}>Show All Cats</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
        </React.Fragment>
        )
    }
    
}

export default Header
