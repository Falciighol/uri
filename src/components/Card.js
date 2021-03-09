import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Card = () => {
	return (
		<CardContent 
			animate={{
				scale: 1,
			}}
			whileHover={{
				scale: 1.02,
			}}
			whileTap={{
				scale: 1.05,
			}}
			transition={{
				duration: .2,
			}}
		>
			
		</CardContent>
	)
}

const CardContent = styled(motion.div)`
	width: 18rem;
	height: 6rem;
	display: flex;
	flex-direction: row;
	background-color: var(--bg);
	border: 1px solid var(--border);
	border-radius: 15px;
	margin: .5rem;

	transition: box-shadow, border .2s ease-in-out;

	:hover {
		-webkit-box-shadow: 13px 13px 14px -17px var(--primary-shadow);
		-moz-box-shadow: 13px 13px 14px -17px var(--primary-shadow);
		box-shadow: 13px 13px 14px -17px var(--primary-shadow);
		border: 1px solid var(--primary-shadow);
	}

	:active {
		-webkit-box-shadow: 13px 13px 14px -17px var(--primary-shadow);
		-moz-box-shadow: 13px 13px 14px -17px var(--primary-shadow);
		box-shadow: 13px 13px 14px -17px var(--primary-shadow);
	}

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
