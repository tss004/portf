import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './Onlinejudgestyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Judgesid } from '../../constants/constants';

const Onlinejudges = () => (
  <Section nopadding id="Coding Profile">
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

export default Onlinejudges;