import React from 'react'
import { 
    SectionWrap,
    TheCard,
    IconContainer,

 } from './style'

import { 
    RiRocketLine, 

} from 'react-icons/ri'

const SuccessCard = () => {
  return (
    <SectionWrap>
        <TheCard>
            <IconContainer>
                <RiRocketLine size={"42px"}/>
            </IconContainer>
            
        </TheCard>
    </SectionWrap>
  )
}

export {SuccessCard}