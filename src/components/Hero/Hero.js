import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there! <br />
      </SectionTitle>
      <SectionText>
        My name is Tri. I'm a freshman Mechatronics Engineering student at the University of Waterloo who has a deep passion for programming and learning new technologies. I'm currently looking for my 1st coop and here are some of my projects that I have made. Hope you enjoy it!
      </SectionText>
      <Button onClick={() => window.location = "mailto:tri.dao@uwaterloo.ca"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;