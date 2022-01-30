import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      
          <DiCssdeck size="3rem" /> <span></span>
      
  
    </Div1>
    <Div2>
    <li>
        <Link href="/">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technical Skills</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Coding Profile</NavLink>
        </Link>
      </li>         
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/tss004">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/tanay-sant-0b0673193">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/tanaysant17">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/tanay.sant.1/">
          <AiFillFacebook size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
