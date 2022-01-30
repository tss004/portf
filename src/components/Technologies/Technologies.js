import React from 'react';
import { DiPython,DiMongodb,DiWebplatform ,DiDatabase, DiWindows,DICpp} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technial Skills</SectionTitle>

    <List>
      <ListItem>
      <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            <h3>Day to Day:</h3>  C,C++,Python.<br />
            <h3>Intermediate:</h3>  Java,Javascript.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiWebplatform size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Web Technologies</ListTitle>
          <ListParagraph>
            <h3>Frontend:</h3> HTML,CSS,Bootstrap,Reactjs.<br/>
            <h3>Backend:</h3> Nodejs,Expressjs.

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>
            MongoDB<br/>
            MySql
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiWindows size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Operating System</ListTitle>
          <ListParagraph>
            Windows<br/>
            Linux
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
