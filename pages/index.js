import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../public/profile.jpg';
import profilePicT from '../public/profiletrans.jpg';

export default function Home() {
	const penis = 'ghey';
	return (
		<>
			<Head>
				<meta charset='UTF-8' />
				<meta name='robots' content='noindex' />
				<meta name='googlebot' content='noindex' />
				<meta name='description' content='Programming and Sales' />
				<meta name='keywords' content='resume,cv,Marko' />
				<meta name='author' content='Riekus Ritskes' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta http-equiv='X-UA-Compatible' content='ie=edge' />
				{/* <!-- <link rel="preload" href="./fonts/FiraGO-Regular.latin.woff2" as="font" crossorigin="anonymous"> --> */}
				<title>Riekus Ritskes - Resume </title>
			</Head>

			<body>
				<main class='font-firago hyphens-manual bg-gray-250 print:bg-white pb-12 print:pb-0 pt-12 print:pt-0 '>
					{/* <!-- Page --> */}
					<div class='max-w-2xl p-6 mx-auto bg-white shadow-xl page  print:max-w-a4 md:max-w-a4 md:h-a4 xsm:p-8 sm:p-9 md:p-16'>
						{/* <!-- Name --> */}
						<header class='flex flex-row items-center mb-8 md:mb-11 '>
							<div
								class='px-3 mr-5 text-logobase font-medium leading-none text-white bg-gray-600  initials-container print:bg-black'
								style={{ paddingBottom: '0.6875rem', paddingTop: '0.6875rem' }}>
								<div
									class='text-center initial'
									style={{ paddingBottom: '0.1875rem' }}>
									R
								</div>
								<div class='text-center initial'>R</div>
							</div>

							<div class=''>
								<h1 class='mb-0 text-2xl font-bold text-gray-750'>
									Riekus Ritskes
								</h1>
								{/* <!--Job Title---------------------------------------------------------------------------------------------------------> */}
								<h2 class='m-0 text-xl font-semibold leading-snug text-gray-700'>
									Business Development
								</h2>
								{/* <!--Location ---------------------------------------------------------------------------------------------------------> */}
								<h3 class='m-0 mt-0 font-semibold leading-snug text-md text-gray-550'>
									Rotterdam, The Netherlands
								</h3>
							</div>

							<div class=' flex flex-1 justify-end items-center'>
								<div class=' mr-20  '>
									<div class='h-24 w-24 shadow-sm rounded-md '>
										<Image
											src={profilePic}
											// layout='fill'
											className=' rounded-md '
											alt='me'
										/>
									</div>
									{/* <div class='border-4 border-gray-150 '>
										<div
											class='bg-cover h-24 w-24  rounded-sm border-4 border-gray-300 '
											style={{
												backgroundImage: `url("/profile.jpg")`,
											}}></div>
									</div> */}
								</div>
							</div>
						</header>
						{/* <!-- end Name --> */}

						{/* <!-- Column --> */}
						<div class=' md:col-count-2 print:col-count-2 col-gap-md md:h-a4-col print:h-a4-col col-fill-auto'>
							{/* <!-- Contact Information -------------------------------------------------------------------------------------> */}
							<section class='pb-4 mt-4 first:mt-0'>
								{/* <!-- To keep in the same column --------------------------------------------------------------------------> */}
								<div class='break-inside-avoid'>
									<section class='pb-2  border-b-2 break-inside-avoid'>
										<ul class='list-inside pr-7'>
											<li class=' leading-normal text-gray-800 transition duration-100 ease-in  text-md hover:text-gray-700 print:'>
												<a href='https://riekus.io' class='group'>
													<span class='mr-2 text-lg font-semibold text-gray-700  leading-snugish'>
														Website:
													</span>
													riekus.io
													<span class='inline-block font-normal text-gray-700transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700 print:'>
														↗
													</span>
												</a>
											</li>

											<li class=' leading-normal transition duration-100 ease-in  text-gray-550 text-md hover:text-gray-700'>
												<a href='mailto:riekus@pm.me' class='group'>
													<span class='mr-8 text-lg font-semibold text-gray-700  leading-snugish'>
														Email:
													</span>
													riekus@pm.me
													<span class='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
														↗
													</span>
												</a>
											</li>
											<li class=' leading-normal transition duration-100 ease-in  text-gray-550 text-md hover:text-gray-700'>
												<a href='tel:+31645260830'>
													<span class='mr-5 text-lg font-semibold text-gray-700  leading-snugish'>
														Phone:
													</span>
													+31 6 4526 0830
												</a>
											</li>
											<li class=' leading-normal transition duration-100 ease-in  text-gray-550 text-md hover:text-gray-700'>
												<a href='https://github.com/RiekusR' class='group'>
													<span class='mr-5 text-lg font-semibold text-gray-700  leading-snugish'>
														Github:
													</span>
													RiekusR
													<span class='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
														↗
													</span>
												</a>
												<li class=' leading-normal transition duration-100 ease-in  text-gray-550 text-md hover:text-gray-700'>
													<span class='mr-9 text-lg font-semibold text-gray-700  leading-snugish'>
														DOB:
													</span>
													17-03-1988
												</li>
												<li class=' leading-normal transition duration-100 ease-in  text-gray-550 text-md hover:text-gray-700'>
													<span class='mr-6 text-lg font-semibold text-gray-700  leading-snugish'>
														Origin:
													</span>
													Dutch
												</li>
											</li>
										</ul>
									</section>
								</div>
							</section>
							{/* <!--Summary ----------------------> */}
							<section class=' p2-4 mt-1 border-b-2 first:mt-0'>
								{/* <!-- To keep in the same column --> */}
								<div class='break-inside-avoid'>
									<h2 class='mb-2 text-lg font-bold tracking-widest text-gray-700  print:font-normal'>
										SUMMARY
									</h2>

									<section class='mb-2 break-inside-avoid'>
										<p class='mt-2 leading-normal text-gray-700 text-md'>
											Full stack autodiadact with demonstrable capacity to
											assess and manage complex business needs and surmount
											obstacles in the way thereof thus producing refined and
											accessible work products.
										</p>
									</section>
								</div>
							</section>

							{/* <!-- EXPERIENCE--> */}

							<section class='mt-8 first:mt-0 border-b-2'>
								{/* <!-- To keep in the same column --> */}
								<div class='break-inside-avoid'>
									<h2 class='mb-4 font-bold tracking-widest  text-sm2 text-gray-550 print:font-normal'>
										EXPERIENCE
									</h2>

									<section class='mb-4.5 break-inside-avoid'>
										<header>
											<h3 class='text-lg font-semibold leading-snug text-gray-700'>
												ARB 4x4 Accessoiries - Sydney AU
											</h3>
											<p class='leading-normal text-md text-gray-650'>
												Feb 2018 – Sep 2020 | Sales & Support
											</p>
										</header>
										<p class='mt-2.1 text-md text-gray-700 leading-normal'>
											{/* Built doner pork chop &bull; Served salmon, cream soft
											cheese, and brisket &bull; Acted 55% pork chop &bull;
											Filled burgdoggen & frankfurter strip steak with 90%
											burger patties and broth */}
											Responsible for sales and customer experience at this
											leading Australian 4x4 brand. Duties consisted of finding
											new business, upselling existing customers, managing
											processes and product advising.
										</p>
									</section>
								</div>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											E.J. Rooy Automotive - Krimpen NL
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											Feb 2008– Apr 2017 | Sales Manager
										</p>
									</header>
									<p class='mt-2.1 text-md text-gray-700 leading-normal'>
										B2B Sales manager responsible for sales targets and 2 sales
										associates in the wholesale automotive industry.
									</p>
									<p class='mt-2.1 text-md text-gray-700 leading-normal'>
										Duties consisted of exploring new business, managing
										existing key clients and streamlining sales, marketing and
										communication processes.
									</p>
								</section>

								<section class='mb-2 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											van Oord - Dubai UA
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											Feb 2007– Dec 2007 | Technical Apprentice
										</p>
									</header>
									<p class='mt-2.1 text-md text-gray-700 leading-normal'>
										van Oord is the industry leader in dredging and martime
										ingenuity. Hired straight out of school for my
										apprenticeship. Worked on a cutter suction dredger creating
										the islands of the prestige project 'the world' in Dubai.
									</p>
								</section>
							</section>

							<section class='mt-8 first:mt-0'>
								{/* <!-- To keep in the same column --> */}
								<div class='break-inside-avoid'>
									<h2 class='mb-4 font-bold tracking-widest  text-sm2 text-gray-550 print:font-normal'>
										EDUCATION
									</h2>

									<section class='mb-4.5 break-inside-avoid'>
										<header>
											<h3 class='text-lg font-semibold leading-snug text-gray-700'>
												Zadkine
											</h3>
											<p class='leading-normal text-md text-gray-650'>
												2008 – 2010 | Automotive Electronics Specialist
											</p>
										</header>
									</section>
								</div>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											Scheepvaart en Transport College
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											2005 – 2008 | Maritime Technical Specialist
										</p>
									</header>
								</section>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											Krimpenerwaard College
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											2000 – 2005 | VMBO-T
										</p>
									</header>
								</section>
							</section>

							<section class='mt-8 first:mt-0'>
								{/* <!-- To keep in the same column --> */}
								<div class='break-inside-avoid'>
									<h2 class='mb-4 font-bold tracking-widest  text-sm2 text-gray-550 print:font-normal'>
										PROJECTS
									</h2>

									<section class='mb-4.5 break-inside-avoid'>
										<header>
											<h3 class='text-lg font-semibold leading-snug text-gray-700'>
												<a
													href='https://github.com/WebPraktikos/universal-resume'
													class='group'>
													Spur.to
													<span class='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
														↗
													</span>
												</a>
											</h3>
											<p class='leading-normal text-md text-gray-650'>
												Since 2020 | NextJS Dart
											</p>
										</header>
										<p class='mt-1 text-md text-gray-700 leading-normal'>
											A love child of GoFundMe.com and Zapier.com. A platform to
											raise funds when an actual measurable goal (through vendor
											API's) is achieved. ** Cancelled **
										</p>
									</section>
								</div>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											<a
												href='https://github.com/WebPraktikos/tailwindcss-rich-docs'
												class='group'>
												FiberStand.com
												<span class='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
													↗
												</span>
											</a>
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											Since 2018 | NextJS CAD
										</p>
									</header>
									<p class='mt-1 text-md text-gray-700 leading-normal'>
										Hardware product. <br />
										Ergonomic carbon fiber laptopstand for travelers.
									</p>
								</section>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											<a
												href='https://github.com/WebPraktikos/tailwindcss-rich-docs'
												class='group'>
												AustralianPrivacy.org
												<span class='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
													↗
												</span>
											</a>
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											Since 2018 | JS PSQL
										</p>
									</header>
									<p class='mt-1 text-md text-gray-700 leading-normal'>
										Notifying Australian Citizens of password & data leaks.
									</p>
								</section>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											<a
												href='https://github.com/WebPraktikos/tailwindcss-rich-docs'
												class='group'>
												AutoSucces.nl
												<span class='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
													↗
												</span>
											</a>
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											2017 - 2018 | Python MYSQL JS
										</p>
									</header>
									<p class='mt-1 text-md text-gray-700 leading-normal'>
										Automotive Analytics SaaS. Software that scrapes, indexes
										and processes listing pages of automtoive resellers.
										<br /> This data was to be sold to car dealers to help
										identify trends, opportunities and track competitors.
									</p>
								</section>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											PartOffer.com
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											2013 – 2014 | Python MYSQL JS
										</p>
									</header>
									<p class='mt-1 text-md text-gray-700 leading-normal'>
										Automotive parts aggregator website. Supplying the Dutch
										automotive parts ecosystem with used parts from suppliers
										based in Germany, Poland and Czech. Automated scraping from
										ebay and relisting on 'marktplaats.nl'.
									</p>
								</section>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											Fiximo.com | A manual for everything
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											2011 - 2012 | PHP MYSQL JS
										</p>
									</header>
									<p class='mt-1 text-md text-gray-700 leading-normal'>
										Aspired to be the biggest provider of online DIY repair
										manuals. Similair to what ifixit.com has become. Moved on
										due to team inbalances.
									</p>
								</section>
							</section>

							<section class='mt-8 first:mt-0'>
								{/* <!-- To keep in the same column --> */}
								<div class='break-inside-avoid'>
									<h2 class='mb-4 font-bold tracking-widest  text-sm2 text-gray-550 print:font-normal'>
										SKILLS
									</h2>

									<section class='mb-4.5 break-inside-avoid'>
										<header>
											<h3 class='text-lg font-semibold leading-snug text-gray-700'>
												Programming
											</h3>
										</header>
										<div class='my-3.2 last:pb-1.5'>
											<ul class='flex flex-wrap text-md leading-relaxed  -mr-1.6 -mb-1.6'>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Javascript
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													NextJS
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													React
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Node
												</li>

												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													MYSQL
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Postgres
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Firebase
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Python
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Django
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Flask
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Dart
												</li>

												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Flutter
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Git
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Docker
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Linux
												</li>
											</ul>
										</div>
									</section>
								</div>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											Other
										</h3>
									</header>
									<div class='my-3.2 last:pb-1.5'>
										<ul class='flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6'>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												SalesForce
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Marketing
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Sales
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Psychology
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Adobe Suite
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												CAD
											</li>
										</ul>
									</div>
								</section>
							</section>

							{/* <section class='mt-8 first:mt-0'> */}
							{/* <!-- To keep in the same column --> */}
							{/* <div class='break-inside-avoid'>
									<h2 class='mb-4 font-bold tracking-widest  text-sm2 text-gray-550 print:font-normal'>
										CONTACT
									</h2>

									<section class='mb-4.5 break-inside-avoid'>
										<ul class='list-inside pr-7'>
											<li class='mt-1.5 leading-normal text-gray-700 text-md'>
												<a href='//webpraktikos.com' class='group'>
													webpraktikos.com
													<span class='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
														↗
													</span>
												</a>
											</li>
											<li class='mt-1.5 leading-normal text-gray-700 text-md'>
												<a href='//twitter.com/webpraktikos' class='group'>
													twitter.com/webpraktikos
													<span class='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
														↗
													</span>
												</a>
											</li>
											<li class='mt-1.5 leading-normal text-gray-700 text-md'>
												1020 Wien, Austria
											</li>
											<li class='mt-1.5 leading-normal text-gray-700 text-md'>
												hi@webpraktikos.com
											</li>
										</ul>
									</section>
								</div>
							</section> */}
						</div>
						{/* <!-- end Column --> */}
					</div>
					{/* <!-- end Page --> */}
				</main>
			</body>
		</>
	);
}
