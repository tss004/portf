import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './TimeLineStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Judgesid } from '../../constants/constants';


const TimeLine = () => (
  <Section id="about">
    <SectionDivider />
    <SectionTitle main>Coding Profiles</SectionTitle>
    <GridContainer>
      {Judgesid.map((p, i) => {
        return (
          <BlogCard key={i}>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <UtilityList>
              <ExternalLinks href={p.visit}>Link</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>

  </Section>
);


export default TimeLine;
