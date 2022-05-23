import React from 'react'
import styled from 'styled-components'

import { 
    HeroSection,
    ProjectSuccess,
    Tokenomics, 

} from './components'

import { colors } from '../../colors'

import { Accordion, Allocation } from '../../components'

const AboutPage = () => {
  return (
    <Container>
        <HeroSection/>
        <ProjectSuccess/>
        <Tokenomics token={"Token Name"} pronto={"Defipronto"} marketcap={"Market Cap"} figure1={"$1,000,000"} initial={"Initial Supply"} figure2={"400,000"} current={"Current Total Supply"} figure3={"200,000"} burned={"Defipronto Burned"} figure4={"30,000"} circulation={"Defipronto in Circulation"} figure5={"100,000"} />
        
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

const Container = styled.main`
    padding-top: 50px;
`;
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
