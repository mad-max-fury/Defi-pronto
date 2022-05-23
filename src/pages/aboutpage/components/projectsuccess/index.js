import React from 'react'
import { 
    SuccesWrapper, 
    TextContainer,
    SuccessBox,
    SuccessTitle,
    SuccessText,
    
} from "./style"

import{
    SuccessCard
} from "../../../../components/successcard"

import{
    RiRocketLine
} from "react-icons/ri"

import{
    AiOutlineHeart,
} from "react-icons/ai"

import{
    RiBitCoinLine,
} from "react-icons/ri"
import { colors } from '../../../../colors'


const ProjectSuccess = () => {
  return( 
    <SuccesWrapper>

        <TextContainer>
            <SuccessTitle>we can help your project succeed</SuccessTitle>

            <SuccessText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque. Sed adipiscing risus aenean neque imperdiet amet fermentum. Nulla ut sagittis dignissim quisque scelerisque vitae tempor ante. 
            Elementum, augue iaculis condimentum quis. Quis tortor ultricies placerat nam urna.
            </SuccessText>
        </TextContainer>

        <SuccessBox>
            <SuccessCard title={"Cardano IDO Launchpad"} bgColor={colors.secondary} icon={ <RiRocketLine size={'40px'}/> } caption={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."} />
            <SuccessCard title={"Project Endorsement"} icon={ <AiOutlineHeart size={'40px'}/> } caption={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."} />
            <SuccessCard title={"Private/Public Sale Options"} icon={ <RiBitCoinLine size={'40px'}/> } caption={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio imperdiet nibh at et neque."} />
        </SuccessBox>

        
    </SuccesWrapper>
  )
}

export {ProjectSuccess}