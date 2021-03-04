import Head from 'next/head';
import InputWithButton from '../src/components/InputWithButton'

export default function Home() {
	return (
		<>
			<Head>
				<title>URi</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<header className="header">
				<div className="logo"></div>
				<div className="userIcon"></div>
			</header>

			<div className="container">
				<main className="main">
					<h1 className="title">
						Welcome to&nbsp;<text>URi!</text>
					</h1>
					<p className="description">
						A Bitly client, the place where you do more, and say less.
					</p>
					<InputWithButton placeholder="Paste url"/>
				</main>
			</div>

			<footer className="footer">
			Copyright &copy; URi 2021
			</footer>
		</>
	)
}
