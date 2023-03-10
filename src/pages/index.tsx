import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { faker } from '@faker-js/faker';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import { signIn, signOut, useSession } from 'next-auth/react';

// import { trpc } from '../utils/trpc';
import Words from './../Words';

const Home: NextPage = () => {
	// const hello = trpc.example.hello.useQuery({ text: 'from tRPC' });
	const img: string = faker.image.fashion();

	return (
		<>
			<Head>
				<title>بدو</title>
				<meta name="description" content="عرضه کننده کفش های اورجینال" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="mx-auto min-h-screen max-w-4xl">
				<nav className="flex w-full items-center justify-between pt-6">
					<div>
						<div className="cursor-pointer rounded bg-orange-700 px-3 pt-1 pb-2 font-[300] transition hover:bg-orange-600 active:scale-90">
							{Words.signIn}
						</div>
					</div>
					<div className="flex flex-row-reverse items-center">
						<Link href={'/'} className="cursor-pointer pl-12">
							<div className="animate-hue-animation rounded-full bg-orange-900 px-2 pb-2 pt-1 font-[700]">
								بدو
							</div>
						</Link>
						<div className="flex space-x-6 font-[200]">
							<div className="cursor-pointer opacity-70 transition hover:opacity-100">
								{Words.nav3}
							</div>
							<div className="cursor-pointer opacity-70 transition hover:opacity-100">
								{Words.nav2}
							</div>
							<div className="cursor-pointer opacity-70 transition hover:opacity-100">
								{Words.nav1}
							</div>
						</div>
					</div>
				</nav>
				<div className="mt-8 w-full">
					<Swiper
						pagination={{ clickable: true }}
						slidesPerView={'auto'}
						centeredSlides={true}
						spaceBetween={-100}
						modules={[Pagination, Autoplay, Navigation]}
						loop={true}
						navigation={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false
						}}
					>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16">
								<Link href={'/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16">
								<Link href={'/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16">
								<Link href={'https://www.google.com/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="h-52 w-[838px] pl-16">
								<Link href={'/'}>
									<Image
										src={img}
										alt="random img"
										width={0}
										height={0}
										sizes="100vw"
										priority
										className="h-full w-full rounded"
									/>
								</Link>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</main>
		</>
	);
};

export default Home;

// const AuthShowcase: React.FC = () => {
// 	const { data: sessionData } = useSession();

// 	const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
// 		undefined, // no input
// 		{ enabled: sessionData?.user !== undefined }
// 	);

// 	return (
// 		<div className="flex flex-col items-center justify-center gap-4">
// 			<p className="text-center text-2xl text-white">
// 				{sessionData && <span>Logged in as {sessionData.user?.name}</span>}
// 				{secretMessage && <span> - {secretMessage}</span>}
// 			</p>
// 			<button
// 				className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
// 				onClick={sessionData ? () => signOut() : () => signIn()}
// 			>
// 				{sessionData ? 'Sign out' : 'Sign in'}
// 			</button>
// 		</div>
// 	);
// };
