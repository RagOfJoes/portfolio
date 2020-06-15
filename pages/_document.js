import React from 'react';
import theme from 'lib/theme';
import { ServerStyleSheets } from '@material-ui/core/styles';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* PWA primary color */}
					<meta name="theme-color" content={theme.palette.primary.main} />
					<meta
						name="keywords"
						content="RagOfJoes, Victor Ragojos, Victor, Ragojos, software engineer, react, javascript"
					/>
					<meta name="description" content="A boring person that likes to code interesting things." />

					<meta property="og:type" content="website" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:image" content="/images/ogImage.png" />
					<meta property="og:url" content="https://ragofjoes.dev" />
					<meta property="og:title" content="Victor Ragojos | Portfolio" />
					<meta property="og:site_name" content="Victor Ragojos | Portfolio" />
					<meta name="og:description" content="A boring person that likes to code interesting things." />

					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
					<meta name="description" content="A boring person that likes to code interesting things." />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

					<link rel="shortcut icon" href="/images/favicon.ico" />

					<link rel="apple-touch-icon" sizes="72x72" href="/images/icon-72.png" />
					<link rel="apple-touch-icon" sizes="144x144" href="/images/icon-144.png" />
					<link rel="apple-touch-icon" sizes="192x192" href="/images/icon-192.png" />
					<link rel="apple-touch-icon" sizes="256x256" href="/images/icon-256.png" />
					<link rel="apple-touch-icon" sizes="384x384" href="/images/icon-384.png" />
					<link rel="apple-touch-icon" sizes="512x512" href="/images/icon-512.png" />

					<link rel="icon" type="image/png" sizes="16x16" href="/images/icon-16.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/images/icon-32.png" />
					<link rel="icon" type="image/png" sizes="48x48" href="/images/icon-48.png" />
					<link rel="icon" type="image/png" sizes="64x64" href="/images/icon-64.png" />
					<link rel="icon" type="image/png" sizes="96x96" href="/images/icon-96.png" />
					<link rel="icon" type="image/png" sizes="192x192" href="/images/icon-192.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	// Resolution order
	//
	// On the server:
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. document.getInitialProps
	// 4. app.render
	// 5. page.render
	// 6. document.render
	//
	// On the server with error:
	// 1. document.getInitialProps
	// 2. app.render
	// 3. page.render
	// 4. document.render
	//
	// On the client
	// 1. app.getInitialProps
	// 2. page.getInitialProps
	// 3. app.render
	// 4. page.render

	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});

	const initialProps = await Document.getInitialProps(ctx);

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	};
};
