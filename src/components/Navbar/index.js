import React from 'react'
import { Nav, HomeLink } from "./styles"
import { FaGithub } from 'react-icons/fa'


export const Navbar = () => {
  return(
    <header>
      <Nav>
        <HomeLink to="/">
          <FaGithub size={32}/>
          <span>GitHub Issues</span>
        </HomeLink>
      </Nav>
    </header>
  )

}
