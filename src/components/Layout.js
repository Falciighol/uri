import React from 'react';

import Head from 'next/head';
import { HiServer } from "react-icons/hi";
import styled, { createGlobalStyle } from 'styled-components';
import { ConfigProvider } from 'antd';
import esES from 'antd/lib/locale-provider/es_ES';

const Layout = ({
    children,
    showFooter,
    title,
}) => {
    const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
    return (
        <div>
            <GlobalStyle />
            <Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
            <Navbar>
				<div className="logo">
					<HiServer style={{
						color: "#8A0CFF",
						fontSize: "2.5rem"
					}}/>
				</div>
				<div className="userIcon"></div>
			</Navbar>

			<Main>
                <ConfigProvider locale={esES}>
				    {children}
                </ConfigProvider>
			</Main>

			{
                showFooter && (<Footer>
                        Copyright &copy; URi {currentYear}
                    </Footer>)
            }
        </div>
    )
}

Layout.defaultProps = {
    showFooter: true,
}

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

const Navbar = styled.header`
	width: 100%;
	height: 60px;
	padding: 0 10rem;
	display: flex;
	background-color: #fafafa;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	transition: padding 1s ease;

    .logo {
        display: flex;
        flex-direction: column;
        justify-content: left;
        text-align: left;
        align-items: center;
    }

    .userIcon {
        display: flex;
        flex-direction: column;
        justify-content: right;
        text-align: right;
        align-items: center;
    }

    @media screen
        and (max-width: 600px) {
        padding: 0 1.5rem;
    }

    @media screen
        and (min-width: 601px)
        and (max-width: 720px) {
        padding: 0 3rem;
    }

    @media screen
        and (min-width: 721px)
        and (max-width: 1280px) {
        padding: 0 4rem;
    }
`;

const Main = styled.main`
    padding: 0 11rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: padding 1s ease;

    @media screen
        and (max-width: 600px) {
        padding: 0 1.5rem;
    }

    @media screen
        and (min-width: 601px)
        and (max-width: 720px) {
        padding: 0 2.5rem;
    }

    @media screen
        and (min-width: 721px)
        and (max-width: 900px) {
        padding: 0 3rem;
    }

    @media screen
        and (min-width: 901px)
        and (max-width: 1280px) {
        padding: 0 8rem;
    }
`;

const Footer = styled.footer`
    width: 100%;
	height: 75px;
	border-top: 1px solid #f8f8f8;
	color: rgb(172, 172, 172);
	font-size: small;
	display: flex;
	justify-content: center;
	align-items: center;
    font-family: Nunito;
`;

export default Layout;
