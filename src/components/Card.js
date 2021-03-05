import React from 'react'
import styled from 'styled-components'

const Card = () => {
    return (
        <CardContent>
            
        </CardContent>
    )
}

const CardContent = styled.div`
    width: 18rem;
    height: 6rem;
    flex-direction: row;
    border: 1px solid #d9d9d9;
    border-radius: 15px;
    margin: .5rem;

    @media screen 
        and (max-width: 550px) {
        width: 100%;
    }

    @media screen
        and (min-width: 551px)
        and (max-width: 703px) {
        width: 70%;
    }
`

export default Card
