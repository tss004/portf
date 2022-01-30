import React from 'react';
import Link from 'next/link';
import { Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,RightSection } from './HeroStyles';



const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        
          <center>
          <img  src="/images/12.png" height="200" width="200"/>
          </center>
          <center>
          <SectionTitle main center>
          Tanay Sant
          </SectionTitle>
          </center>
          < SectionText>Hi ! I am Undergraduate of Computer Science and Engineering at Indian Institute of Information Technology (IIIT) Nagpur. I am boardly interested in Data Structures,Algorithm and there applications and also in Software development (Frontend development and Backend(server side development with databases)). For more Details on my academic Front, have a look at my resume,skills,projects and profiles. </SectionText>
          <center>
          
          <Link href="https://drive.google.com/file/d/1sOkCw3fC5AXhP74y1AVlcQp60wRSji06/view?usp=sharing">
              <Button><a>Resume</a></Button>
          </Link>
          </center>
          
          
        
      </LeftSection>
      
      
      
    </Section>
    
    
  </>
);

export default Hero;