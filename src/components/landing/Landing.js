import React from 'react'
import InputWithButton from './InputWithButton'
import Layout from '../Layout'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Card from '../Card'

const container = {
	hidden: { opacity: 1, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2
		}
	}
};
  
const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1
	}
};

const uris = [
    {
        "url": "http://"
    },
    {
        "url": "http://"
    },
    {
        "url": "http://"
    },
    {
        "url": "http://"
    },
    {
        "url": "http://"
    },
]

const Landing = () => {

    const Cards = () => {
        let cards = [];
        uris.map((el) => {
            cards.push(<Card />);
        })
        return cards;
    }

    return (
        <Layout showFooter={true} title="URi">
            <Container
                initial={{
                    opacity: 0.5
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 1.5
                }}
            >
                <motion.div
                    variants={container}
					initial='hidden'
					animate='visible'
                >
                    <motion.h1
                        variants={item}
                        className="title"
                    >
                        Welcome to <text>URi!</text>
                    </motion.h1>
                    <motion.p
                        variants={item}
                        className="description"
                    >
                        A Bitly client, the place where you do more, and say less.
                    </motion.p>
                    <InputWithButton
                        variants={item}
                        placeholder="Paste url"
                    />
                </motion.div>
                <CardsContainer>
                    <Cards />
                </CardsContainer>
            </Container>
        </Layout>
    )
}

const Container = styled(motion.div)`
    width: 100%;
	background-color: rgb(255, 255, 255);
	padding: 5rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;

	transition: padding 1s ease;

    .title {
        margin: 0;
        text-align: left;
        line-height: 1.15;
        font-size: 4rem;
        font-weight: bold;
        font-family: Nunito;
    }

    .title text { 
        color: #8A0CFF;
        font-weight: bolder;
        text-decoration: none;
    }

    .title text:hover,
    .title text:focus,
    .title text:active {
        text-decoration: none;
    }

    .title,
    .description {
        text-align: left;
    }

    .description {
        margin: 0 0 2rem;
        line-height: 1.5;
        font-size: 1.5rem;
        font-family: Nunito;
    }

    @media screen
        and (max-width: 600px) {
        padding: 2rem 0;

        .title {
            font-size: 3.5rem;
            margin: 0 0 1rem;
            text-align: center;
        }

        .description {
            margin: 0 0 1.5rem;
            font-size: 1.3rem;
            text-align: center;
        }
    }

    @media screen
        and (min-width: 721px)
        and (max-width: 1280px) {
        padding: 4rem 0;
    }
`;

const CardsContainer = styled.div`
    position: relative;
    overflow: auto;
    max-height: 25rem;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    /* border: 1px solid #e8e8e8; */
    border-radius: 15px;
    width: 100%;
    height: 500px;
    margin: 2rem 0;
    padding: .5rem;

    @media screen
        and (max-width: 703px) {
        justify-content: center;
    }
`

export default Landing;