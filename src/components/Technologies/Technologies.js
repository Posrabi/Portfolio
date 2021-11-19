import React from 'react';
import {DiJsBadge, DiPython} from 'react-icons/di';
import {SiCplusplus} from "react-icons/si"
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem"/>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
            Experienced with Python<br />
            and its framework like <br / >
            Pandas, Geopy, Pillow and Pygame
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiCplusplus size="3rem"/>
        <ListContainer>
          <ListTitle>C++/C</ListTitle>
          <ListParagraph>
            Experienced with C/C++ <br />
            and RobotC
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJsBadge size="3rem"/>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
            Experienced with JavaScript<br />
            and frameworks like React and Next
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
