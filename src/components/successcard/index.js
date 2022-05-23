import React from 'react'
import { 
    SectionWrap,
    TheCard,
    IconContainer,
    SuccessTitle,
    SuccessCaption,
 } from './style'

import { 
    RiRocketLine, 

} from 'react-icons/ri'

const SuccessCard = ({bgColor, title, caption, icon}) => {
  return (
    
        <TheCard bgColor={bgColor} >
            <IconContainer>
                {icon}
            </IconContainer>
            <SuccessTitle>{title}</SuccessTitle>
            <SuccessCaption bgColor={bgColor} >{caption}</SuccessCaption>
            
        </TheCard>
  )
}

export {SuccessCard}