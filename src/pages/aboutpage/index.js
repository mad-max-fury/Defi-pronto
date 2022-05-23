import React from 'react'
import styled from 'styled-components'

import { HeroSection } from '../landingpage/components'

const AboutPage = () => {
  return (
    <Container>
        <HeroSection/>
    </Container>
  )
}

export {AboutPage}

const Container = styled.main``;
const Ceneter = styled.div`
  width: 100%;
  /* background-color: #000; */
`;
