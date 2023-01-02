import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import localFont from '@next/font/local';

import { trpc } from '../utils/trpc';

import '../styles/globals.css';

const myFont = localFont({ src: './b-compset.ttf' });

const MyApp: AppType<{ session: Session | null }> = ({
	Component,
	pageProps: { session, ...pageProps }
}) => {
	return (
		<SessionProvider session={session}>
			<main className={myFont.className}>
			<Component {...pageProps} />
			</main>
		</SessionProvider>
	);
};

export default trpc.withTRPC(MyApp);
