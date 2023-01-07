import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import localFont from '@next/font/local';

import { trpc } from '../utils/trpc';

import '../styles/globals.css';

// const myFont = localFont({ src: './fonts/IRANYekan/iranyekan-bold.ttf' });

const myFont = localFont({
	src: [
		{
			path: './fonts/IRANYekan/iranyekan-thin.ttf',
			weight: '100'
		},
		{
			path: './fonts/IRANYekan/iranyekan-light.ttf',
			weight: '200'
		},
		{
			path: './fonts/IRANYekan/iranyekan.ttf',
			weight: '300'
		},
		{
			path: './fonts/IRANYekan/iranyekan-medium.ttf',
			weight: '400'
		},
		{
			path: './fonts/IRANYekan/iranyekan-bold.ttf',
			weight: '500'
		},
		{
			path: './fonts/IRANYekan/iranyekan-black.ttf',
			weight: '600'
		},
		{
			path: './fonts/IRANYekan/iranyekan-extrabold.ttf',
			weight: '700'
		},
		{
			path: './fonts/IRANYekan/iranyekan-extrablack.ttf',
			weight: '800'
		}
	],
	variable: '--my-font'
});

const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps }
}) => {
	return (
		<SessionProvider session={session}>
			<main className={`${myFont.variable} font-sans`}>
				<Component {...pageProps} />
			</main>
		</SessionProvider>
	);
};

export default trpc.withTRPC(MyApp);
