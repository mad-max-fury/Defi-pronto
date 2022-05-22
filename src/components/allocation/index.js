import React from 'react'
import styled from "styled-components";

import { 
    Container,
    AllocationChartImg,
    ChartInfoContainer,
    ChartInfo,
    Purple,
    Blue,
    Yellow,
    Red,
    Lemon,
    ChartText,
} from './style';

import { 
    IntroWrap,
} from '../intro';

import{
  allocationChart
} from '../../assets'


const Allocation = () => {
  return (
    <Container>
        <IntroWrap title={'Allocation & Utility'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum.'} /> 
        <AllocationChartImg src={ allocationChart } />
        
        <ChartInfoContainer>
          <ChartInfo>
            <Purple/> <ChartText>Seed Round - 20%</ChartText>
          </ChartInfo>

          <ChartInfo>
            <Blue/> <ChartText>Strategic Round - 10%</ChartText>
          </ChartInfo>

          <ChartInfo>
            <Yellow/> <ChartText>Pre-Sale - 25%</ChartText>
          </ChartInfo>

          <ChartInfo>
            <Red/> <ChartText>Liquidity - 6%</ChartText>
          </ChartInfo>

          <ChartInfo>
            <Lemon/> <ChartText>DAO - 39%</ChartText>
          </ChartInfo> 
        </ChartInfoContainer>
    </Container>
  )
}

export {Allocation}