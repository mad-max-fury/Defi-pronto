import React from 'react'
import styled from 'styled-components'

import { 
    HeroSection,
    Tokenomics, 

} from './components'

import { colors } from '../../colors'

import { Accordion, Allocation } from '../../components'

const AboutPage = () => {
  return (
    <Container>
        <HeroSection/>
        <Tokenomics />
        
        <Allocation/>
        
        <AccordionContainer>
            <Divider/>
            <Accordion heading={"Governance"} />
            <Accordion heading={"Staking"} />
            <Accordion heading={"Deflationary Mechanics"} />
            <Accordion heading={"Liquidity Farming"} />
        </AccordionContainer>

        
    </Container>
  )
}

export {AboutPage}

const Container = styled.main``;
const Ceneter = styled.div`
  width: 100%;
  /* background-color: #000; */
`;
const AccordionContainer = styled.section`
    padding: 50px 0;
`

const Divider = styled.div`
    border-top: 1px solid ${colors.light_grey};
    margin: 0 auto;
    width: 40%;
    padding: 25px 0;
`;
