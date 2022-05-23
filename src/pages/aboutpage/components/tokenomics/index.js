import React from 'react'
import styled from "styled-components";

import { 
    Container,
    TokenomicsContainer,
    TokenomicsBox,
    TokenBoxTitle,
    TokenBoxDetail,

} from './style';

import { 
    IntroWrap,

} from '../../../../components/intro';

const Tokenomics = ({token, pronto, marketcap, initial, current, circulation, burned, figure1, figure2, figure3, figure4, figure5, }) => {
  return (
    <Container> 
        
        <IntroWrap title={'Tokenomics'} desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum.'} /> 
        <TokenomicsContainer>
            <TokenomicsBox>
                <TokenBoxTitle>
                {token}
                </TokenBoxTitle>

                <TokenBoxDetail>
                    {pronto}
                </TokenBoxDetail>
            </TokenomicsBox>

            <TokenomicsBox>
                <TokenBoxTitle>
                {marketcap}
                </TokenBoxTitle>

                <TokenBoxDetail>
                    {figure1}
                </TokenBoxDetail>
            </TokenomicsBox>

            <TokenomicsBox>
                <TokenBoxTitle>
                {initial}
                </TokenBoxTitle>

                <TokenBoxDetail>
                    {figure2}
                </TokenBoxDetail>
            </TokenomicsBox>

            <TokenomicsBox>
                <TokenBoxTitle>
                {current}
                </TokenBoxTitle>

                <TokenBoxDetail>
                    {figure3}
                </TokenBoxDetail>
            </TokenomicsBox>

            <TokenomicsBox>
                <TokenBoxTitle>
                {burned}
                </TokenBoxTitle>

                <TokenBoxDetail>
                {figure4}
                </TokenBoxDetail>
            </TokenomicsBox>

            <TokenomicsBox>
                <TokenBoxTitle>
                {circulation}
                </TokenBoxTitle>

                <TokenBoxDetail>
                {figure5}
                </TokenBoxDetail>
            </TokenomicsBox>
        </TokenomicsContainer>
    
    </Container>
  )
};

export {Tokenomics}