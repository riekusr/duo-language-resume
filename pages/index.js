import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../public/profile.jpg';
import profilePicT from '../public/profiletrans.jpg';

export default function Home({ lang = 'en' }) {
	console.log(lang);
	const langs = 'ghey';
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

			<main className='font-firago hyphens-manual bg-gray-250 print:bg-white pb-12 print:pb-0 '>
				{/* <!-- Language and Print Buttons --> */}
				<section className='flex flex-row justify-center pb-8 print:pb-0 print:hidden'>
					<div className='flex flex-row justify-between items-center bg-white text-lg text-gray-550 shadow-xl'>
						<Link href='/en'>
							<div className=' px-3 py-1 font-medium cursor-pointer'> en </div>
						</Link>
						<svg
							onClick={(e) => window.print()}
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5 cursor-pointer'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
							/>
						</svg>
						<Link href='/nl'>
							<div className='px-3 py-1 cursor-pointer'> nl </div>
						</Link>
					</div>
				</section>
				{/* <!-- Page --> */}
				<div className='max-w-2xl p-6 mx-auto bg-white shadow-xl page  print:max-w-a4 md:max-w-a4 md:h-a4 xsm:p-8 sm:p-9 md:p-16'>
					{/* <!-- Name --> */}
					<header className='flex flex-row items-center mb-8 md:mb-11 '>
						<div
							className='px-3 mr-5 text-logobase font-medium leading-none text-white bg-gray-600  initials-container print:bg-black'
							style={{ paddingBottom: '0.6875rem', paddingTop: '0.6875rem' }}>
							<div
								className='text-center initial'
								style={{ paddingBottom: '0.1875rem' }}>
								R
							</div>
							<div className='text-center initial'>R</div>
						</div>

						<div className=''>
							<h1 className='mb-0 text-2xl font-bold text-gray-750'>
								Riekus Ritskes
							</h1>
							{/* <!--Job Title--> */}
							<h2 className='m-0 text-xl font-semibold leading-snug text-gray-700'>
								Business Development
							</h2>
							{/* <!--Location --> */}
							<h3 className='m-0 mt-0 font-semibold leading-snug text-md text-gray-550'>
								Rotterdam, The Netherlands
							</h3>
						</div>

						{/* <!--Profile Picture --> */}
						<div className=' flex flex-1 justify-end items-center '>
							<div className=' mr-1 md:mr-16'>
								<div className='h-20 w-20 md:h-24 md:w-24 shadow-sm rounded-md '>
									<Image src={profilePic} className=' rounded-md ' alt='me' />
								</div>
							</div>
						</div>
					</header>
					{/* <!-- end Name --> */}

					{/* <!-- Column --> */}
					<div className=' md:col-count-2 print:col-count-2 col-gap-md md:h-a4-col print:h-a4-col col-fill-auto'>
						{/* <!-- Contact Information -------------------------------------------------------------------------------------> */}
						<section className='pb-4 mt-4 first:mt-0'>
							{/* <!-- To keep in the same column --------------------------------------------------------------------------> */}
							<div className='break-inside-avoid'>
								<section className='pb-2  border-b-2 break-inside-avoid'>
									<ul className='list-inside pr-7'>
										<li className=' leading-normal text-gray-800 transition duration-100 ease-in  text-md hover:text-gray-700 print:'>
											<a href='https://riekus.io' className='group'>
												<span className='mr-2 text-lg font-semibold text-gray-700  leading-snugish'>
													Website:
												</span>
												riekus.io
												<span className='inline-block font-normal text-gray-700transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700 print:'>
													↗
												</span>
											</a>
										</li>

										<li className=' leading-normal transition duration-100 ease-in  text-gray-550 text-md hover:text-gray-700'>
											<a href='mailto:me@riekus.io' className='group'>
												<span className='mr-8 text-lg font-semibold text-gray-700  leading-snugish'>
													Email:
												</span>
												me@riekus.io
												<span className='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
													↗
												</span>
											</a>
										</li>
										<li className=' leading-normal transition duration-100 ease-in  text-gray-550 text-md hover:text-gray-700'>
											<a href='tel:+31645260830'>
												<span className='mr-5 text-lg font-semibold text-gray-700  leading-snugish'>
													Phone:
												</span>
												+31 6 4526 0830
											</a>
										</li>
										<li className=' leading-normal transition duration-100 ease-in  text-gray-550 text-md hover:text-gray-700'>
											<a
												href='https://github.com/RiekusR'
												className='group'
												target='_blank'>
												<span className='mr-5 text-lg font-semibold text-gray-700  leading-snugish'>
													Github:
												</span>
												RiekusR
												<span className='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
													↗
												</span>
											</a>
										</li>
										<li className=' leading-normal transition duration-100 ease-in  text-gray-550 text-md hover:text-gray-700'>
											<span className='mr-9 text-lg font-semibold text-gray-700  leading-snugish'>
												DOB:
											</span>
											17-03-1988
										</li>
										<li className=' leading-normal transition duration-100 ease-in  text-gray-550 text-md hover:text-gray-700'>
											<span className='mr-6 text-lg font-semibold text-gray-700  leading-snugish'>
												Origin:
											</span>
											Dutch
										</li>
									</ul>
								</section>
							</div>
						</section>
						{/* <!--Summary ----------------------> */}
						<section className=' p2-4 mt-1 border-b-2 first:mt-0'>
							{/* <!-- To keep in the same column --> */}
							<div className='break-inside-avoid'>
								<h2 className='mb-2 text-lg font-bold tracking-widest text-gray-700  print:font-normal'>
									SUMMARY
								</h2>

								<section className='mb-2 break-inside-avoid'>
									<p className='mt-2 leading-normal text-gray-700 text-md'>
										{/* Full stack autodiadact with demonstrable capacity to
											assess and manage complex business needs and surmount
											obstacles in the way thereof thus producing refined and
											accessible work products. */}
										Self starter with a knack for sales and a skillset in
										programming and IT. Always learning and progressing with an
										agile mindset. Looking to break into the Salesforce
										ecosystem for new challenges.
									</p>
								</section>
							</div>
						</section>

						{/* <!-- EXPERIENCE--> */}

						<section className='mt-8 first:mt-0 border-b-2'>
							{/* <!-- To keep in the same column --> */}
							<div className='break-inside-avoid'>
								<h2 className='mb-4 font-bold tracking-widest  text-sm2 text-gray-550 print:font-normal'>
									EXPERIENCE
								</h2>

								<section className='mb-4.5 break-inside-avoid'>
									<header>
										<h3 className='text-lg font-semibold leading-snug text-gray-700'>
											ARB 4x4 Accessoiries - Sydney AU
										</h3>
										<p className='leading-normal text-md text-gray-650'>
											Feb 2018 – Sep 2020 | Sales & Support
										</p>
									</header>
									<p className='mt-2.1 text-md text-gray-700 leading-normal'>
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

							<section className='mb-4.5 break-inside-avoid'>
								<header>
									<h3 className='text-lg font-semibold leading-snug text-gray-700'>
										E.J. Rooy Automotive - Krimpen NL
									</h3>
									<p className='leading-normal text-md text-gray-650'>
										Feb 2008– Apr 2017 | Sales Manager
									</p>
								</header>
								<p className='mt-2.1 text-md text-gray-700 leading-normal'>
									B2B Sales manager responsible for sales targets and 2 sales
									associates in the wholesale automotive industry.
								</p>
								<p className='mt-2.1 text-md text-gray-700 leading-normal'>
									Duties consisted of exploring new business, managing existing
									key clients and streamlining sales, marketing and
									communication processes.
								</p>
							</section>

							<section className='mb-2 break-inside-avoid'>
								<header>
									<h3 className='text-lg font-semibold leading-snug text-gray-700'>
										van Oord - Dubai UA
									</h3>
									<p className='leading-normal text-md text-gray-650'>
										Feb 2007– Dec 2007 | Technical Apprentice
									</p>
								</header>
								<p className='mt-2.1 text-md text-gray-700 leading-normal'>
									van Oord is the industry leader in dredging and martime
									ingenuity. Hired straight out of school for my apprenticeship.
									Worked on a cutter suction dredger creating the islands of the
									prestige project 'the world' in Dubai.
								</p>
							</section>
						</section>

						<section className='mt-8 first:mt-0'>
							{/* <!-- To keep in the same column --> */}
							<div className='border-b-2 md:border-none print:border-none break-inside-avoid'>
								<h2 className='mb-4 font-bold tracking-widest  text-sm2 text-gray-550 print:font-normal'>
									EDUCATION
								</h2>

								<section className='mb-4.5 break-inside-avoid'>
									<header>
										<h3 className='text-lg font-semibold leading-snug text-gray-700'>
											Zadkine
										</h3>
										<p className='leading-normal text-md text-gray-650'>
											2008 – 2010 | Automotive Electronics Specialist
										</p>
									</header>
								</section>

								<section className='mb-4.5 break-inside-avoid'>
									<header>
										<h3 className='text-lg font-semibold leading-snug text-gray-700'>
											Scheepvaart en Transport College
										</h3>
										<p className='leading-normal text-md text-gray-650'>
											2005 – 2008 | Maritime Technical Specialist
										</p>
									</header>
								</section>

								<section className='mb-2 break-inside-avoid'>
									<header>
										<h3 className='text-lg font-semibold leading-snug text-gray-700'>
											Krimpenerwaard College
										</h3>
										<p className='leading-normal text-md text-gray-650'>
											2000 – 2005 | VMBO-T
										</p>
									</header>
								</section>
							</div>
						</section>

						<section className='mt-8 first:mt-0'>
							{/* <!-- To keep in the same column --> */}
							<div className='border-b-2 break-inside-avoid'>
								<h2 className='mb-4 font-bold tracking-widest  text-sm2 text-gray-550 print:font-normal'>
									PROJECTS
								</h2>

								<section className='mb-4.5 break-inside-avoid'>
									<header>
										<h3 className='text-lg font-semibold leading-snug text-gray-700'>
											<a
												href='https://spur.to'
												className='group'
												target='_blank'>
												Spur.to
												<span className='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
													↗
												</span>
											</a>
										</h3>
										<p className='leading-normal text-md text-gray-650'>
											Since 2020 | NextJS Dart
										</p>
									</header>
									<p className='mt-1 text-md text-gray-700 leading-normal'>
										A love child of GoFundMe.com and Zapier.com. A platform to
										raise funds when an actual measurable goal (through vendor
										API's) is achieved. ** Cancelled **
									</p>
								</section>
								{/* </div> */}

								<section className='mb-4.5 break-inside-avoid'>
									<header>
										<h3 className='text-lg font-semibold leading-snug text-gray-700'>
											<a
												href='https://fiberstand.com'
												className='group'
												target='_blank'>
												FiberStand.com
												<span className='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
													↗
												</span>
											</a>
										</h3>
										<p className='leading-normal text-md text-gray-650'>
											Since 2018 | NextJS CAD Blender ThreeJS
										</p>
									</header>
									<p className='mt-1 text-md text-gray-700 leading-normal'>
										Hardware product. <br />
										Ergonomic carbon fiber laptopstand for travelers.
									</p>
								</section>

								<section className='mb-4.5 break-inside-avoid'>
									<header>
										<h3 className='text-lg font-semibold leading-snug text-gray-700'>
											<a
												href='https://australianprivacy.org'
												className='group'
												target='_blank'>
												AustralianPrivacy.org
												<span className='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
													↗
												</span>
											</a>
										</h3>
										<p className='leading-normal text-md text-gray-650'>
											Since 2018 | JS PSQL
										</p>
									</header>
									<p className='mt-1 text-md text-gray-700 leading-normal'>
										Notifying Australian Citizens of password & data leaks.
									</p>
								</section>

								<section className='mb-4.5 break-inside-avoid'>
									<header>
										<h3 className='text-lg font-semibold leading-snug text-gray-700'>
											<a
												href='https://autosucces.nl'
												className='group'
												target='_blank'>
												AutoSucces.nl
												<span className='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
													↗
												</span>
											</a>
										</h3>
										<p className='leading-normal text-md text-gray-650'>
											2017 - 2018 | Python MYSQL JS
										</p>
									</header>
									<p className='mt-1 text-md text-gray-700 leading-normal'>
										Automotive Analytics SaaS. Software that scrapes, indexes
										and processes listing pages of automtoive resellers.
										<br /> This data was to be sold to car dealers to help
										identify trends, opportunities and track competitors.
									</p>
								</section>

								<section className='mb-4.5 break-inside-avoid'>
									<header>
										<h3 className='text-lg font-semibold leading-snug text-gray-700'>
											<a
												href='https://partoffer.com'
												className='group'
												target='_blank'>
												PartOffer.com
												<span className='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
													↗
												</span>
											</a>
										</h3>
										<p className='leading-normal text-md text-gray-650'>
											2013 – 2014 | Python MYSQL JS
										</p>
									</header>
									<p className='mt-1 text-md text-gray-700 leading-normal'>
										Automotive parts aggregator website. Supplying the Dutch
										automotive parts ecosystem with used parts from suppliers
										based in Germany, Poland and Czech. Automated scraping from
										ebay and relisting on 'marktplaats.nl'.
									</p>
								</section>

								<section className='mb-2 break-inside-avoid'>
									<header>
										<h3 className='text-lg font-semibold leading-snug text-gray-700'>
											Fiximo.com | A manual for everything
										</h3>
										<p className='leading-normal text-md text-gray-650'>
											2011 - 2012 | PHP MYSQL JS
										</p>
									</header>
									<p className='mt-1 text-md text-gray-700 leading-normal'>
										Aspired to be the biggest provider of online DIY repair
										manuals. Similair to what ifixit.com has become. Moved on
										due to team inbalances.
									</p>
								</section>
							</div>
						</section>

						<section className='mt-8 first:mt-0'>
							{/* <!-- To keep in the same column --> */}
							<div className='break-inside-avoid'>
								<h2 className='mb-4 font-bold tracking-widest  text-sm2 text-gray-550 print:font-normal'>
									SKILLS
								</h2>

								<section className='mb-4.5 break-inside-avoid'>
									<header>
										<h3 className='text-lg font-semibold leading-snug text-gray-700'>
											Programming
										</h3>
									</header>
									<div className='my-3.2 last:pb-1.5'>
										<ul className='flex flex-wrap text-md leading-relaxed  -mr-1.6 -mb-1.6'>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Javascript
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												NextJS
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												React
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Node
											</li>

											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												MYSQL
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Postgres
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Firebase
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Python
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Django
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Flask
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Dart
											</li>

											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Flutter
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Git
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Docker
											</li>
											<li className='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
												Linux
											</li>
										</ul>
									</div>
								</section>
							</div>

							<section className='mb-4.5 break-inside-avoid'>
								<header>
									<h3 className='text-lg font-semibold leading-snug text-gray-700'>
										Other
									</h3>
								</header>
								<div className='my-3.2 last:pb-1.5'>
									<ul className='flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6'>
										<li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
											SalesForce
										</li>
										<li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
											Marketing
										</li>
										<li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
											Sales
										</li>
										<li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
											Psychology
										</li>
										<li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
											Adobe Suite
										</li>
										<li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
											CAD
										</li>
										<li className='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
											IELTS 8.0
										</li>
									</ul>
								</div>
							</section>
						</section>
					</div>
					{/* <!-- end Column --> */}
				</div>
				{/* <!-- end Page --> */}
			</main>
		</>
	);
}
