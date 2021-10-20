import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../public/profile.jpg';

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
									{/* <Image
										src={profilePic}
										// layout='fill'
										className=' '
										alt='me'
									/> */}

									<div
										class='bg-cover h-24 w-24 rounded-full border-2 border-gray-750 shadow-sm'
										style={{
											backgroundImage: `url("/profile.jpg")`,
										}}></div>
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
											<li class=' leading-normal text-gray-800 transition duration-100 ease-in  text-gray-550 text-md hover:text-gray-700 print:'>
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
													<span class='mr-10 text-lg font-semibold text-gray-700  leading-snugish'>
														DOB:
													</span>
													17-03-1988
													<span class='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
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
											</li>
										</ul>
									</section>
								</div>
							</section>
							{/* <!--Summary ----------------------> */}
							<section class='pb-2 pb-4 mt-1 border-b-4 first:mt-0'>
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
							{/* 
          <!-- <section class="mt-8 first:mt-0"> -->
          <!-- To keep in the same column -->
          <!-- <div class="break-inside-avoid">
              <h2
                class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal"
              >
                ABOUT ME
              </h2>

              <section class="mb-4.5 break-inside-avoid">
                <header>
                  <h3 class="text-lg font-semibold leading-snug text-gray-700">
                    User Interface Designer
                  </h3>
                  <p class="leading-normal text-md text-gray-650">Since 2010</p>
                </header>
                <p class="mt-2.1 text-md text-gray-700 leading-normal">
                  Minimal and formal résumé website template for print,
                  mo&shy;bile, and desktop. The proportions are the same on the
                  screen and paper. Built with amazing
                  <a
                    class="transition duration-100 ease-in rounded-lg hover:bg-gray-150"
                    href="https://tailwindcss.com/"
                    >Tailwind CSS&nbsp;°</a
                  >.
                </p>
              </section>
            </div> --> */}
							{/* 
          <section class="mb-4.5 break-inside-avoid">
              <header>
                <h3 class="text-lg font-semibold leading-snug text-gray-700">
                  Front-End Developer
                </h3>
                <p class="leading-normal text-md text-gray-650">Since 2013</p>
              </header>
              <p class="mt-2.1 text-md text-gray-700 leading-normal">
                “docs/index.html” is the main content file. By copying HTML: add
                pages, sec&shy;tions, subsection, and other parts.
              </p>
              <p class="mt-2.1 text-md text-gray-700 leading-normal">
                <span class="font-medium text-gray-600 print:text-black"
                  >Important:</span
                >
                Too much content on one page will break the page in the form of
                additional columns. Too much content on one page will break the page in the form of
                additional columns. Too much content on one page will break the page in the form of
                additional columns. Too much content on one page will break the page in the form of
                additional columns. Too much content on one page will break the page in the form of
                additional columns. Too much content on one page will break the page in the form of
                additional columns. Too much content on one page will break the page in the form of
                additional columns. Too much content on one page will break the page in the form of
                additional columns. Too much content on one page will break the page in the form of
                additional columns. Too much content on one page will break the page in the form of
                additional columns. Too much content on one page will break the page in the form of
                additional columns.
              </p>
            </section> */}
							{/* </section> --> */}

							<section class='mt-8 first:mt-0'>
								{/* <!-- To keep in the same column --> */}
								<div class='break-inside-avoid'>
									<h2 class='mb-4 font-bold tracking-widest  text-sm2 text-gray-550 print:font-normal'>
										EXPERIENCE
									</h2>

									<section class='mb-4.5 break-inside-avoid'>
										<header>
											<h3 class='text-lg font-semibold leading-snug text-gray-700'>
												WebPraktikos Inc.
											</h3>
											<p class='leading-normal text-md text-gray-650'>
												Jun 2018 – Present | Web Developer
											</p>
										</header>
										<p class='mt-2.1 text-md text-gray-700 leading-normal'>
											Built doner pork chop &bull; Served salmon, cream soft
											cheese, and brisket &bull; Acted 55% pork chop &bull;
											Filled burgdoggen & frankfurter strip steak with 90%
											burger patties and broth
										</p>
									</section>
								</div>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											Mammoth GmbH
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											Feb 2017 – Apr 2018 | Android Developer
										</p>
									</header>
									<ul class=''>
										<li class='mt-2.1 text-md text-gray-700 leading-normal'>
											<span class='absolute   -ml-3    sm:-ml-3.2  select-none     transform       -translate-y-px'>
												›
											</span>
											Cooked shrimps for 2 to 3 minutes per side, or until
											opaque; then, transfered to a serving dish with limon
										</li>
										<li class='mt-2.1 text-md text-gray-700 leading-normal'>
											<span class='absolute   -ml-3    sm:-ml-3.2  select-none     transform       -translate-y-px'>
												›
											</span>
											Roasted a pig, turning frequently, until meat reached
											160°F in the thickest part of the shoulder or thigh
										</li>
									</ul>
								</section>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											Exquisite Systems d.o.o.
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											May 2015 – Dec 2016 | Software QA Specialist
										</p>
									</header>
									<ul class=''>
										<li class='mt-2.1 text-md text-gray-700 leading-normal'>
											<span class='absolute   -ml-3    sm:-ml-3.2  select-none     transform       -translate-y-px'>
												›
											</span>
											Made stockfish, which is unsalted fish, usully cod, dried
											by cold air and wind on wooden racks on the foreshore
										</li>
										<li class='mt-2.1 text-md text-gray-700 leading-normal'>
											<span class='absolute   -ml-3    sm:-ml-3.2  select-none     transform       -translate-y-px'>
												›
											</span>
											Preserved meat without salt by removing fat, cutting it
											into very thin strips and drying it in the sun or by a
											fire.
										</li>
									</ul>
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
												Graz University of Technology
											</h3>
											<p class='leading-normal text-md text-gray-650'>
												2014 – 2015 | Master's Degree in Chemistry
											</p>
										</header>
									</section>
								</div>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											Vienna University of Technology
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											2010 – 2013 | Bachelor’s Degree in Biology
										</p>
									</header>
								</section>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											Vienna University of Technology
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											2010 – 2013| Bachelor’s Degree in Chemistry
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
													Universal Resume
													<span class='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
														↗
													</span>
												</a>
											</h3>
											<p class='leading-normal text-md text-gray-650'>
												Since 2019 | HTML CSS
											</p>
										</header>
										<p class='mt-2.1 text-md text-gray-700 leading-normal'>
											Good design is as little design as possible. Less, but
											better — because it concentrates on the essential aspects,
											and the pro&shy;ducts are not burdened with
											non-essentials.
										</p>
									</section>
								</div>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											<a
												href='https://github.com/WebPraktikos/tailwindcss-rich-docs'
												class='group'>
												tailwindcss-rich-docs
												<span class='inline-block font-normal transition duration-100 ease-in  text-gray-550 print:text-black group-hover:text-gray-700'>
													↗
												</span>
											</a>
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											2017 | JavaScript
										</p>
									</header>
									<p class='mt-2.1 text-md text-gray-700 leading-normal'>
										Good design is long-lasting. It avoids being fashionable and
										therefore never appears antiquated.
										<br />
										Good design is honest. It does not make a product more
										innovative, powerful or valuable than it really is.
									</p>
								</section>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											Third One
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											2013 – 2014 | Vue
										</p>
									</header>
									<p class='mt-2.1 text-md text-gray-700 leading-normal'>
										Good design is innovative. Technological development is
										always offering new opportunities for innovative design.
									</p>
								</section>

								<section class='mb-4.5 break-inside-avoid'>
									<header>
										<h3 class='text-lg font-semibold leading-snug text-gray-700'>
											Fantastic Project
										</h3>
										<p class='leading-normal text-md text-gray-650'>
											2012 | JavaScript
										</p>
									</header>
									<p class='mt-2.1 text-md text-gray-700 leading-normal'>
										Strip steak tail capicola alcatra ground round tenderloin
										ar. Venison tri-tip porchetta, brisket tenderloin pig beef.
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
												JavaScript
											</h3>
											<p class='leading-normal text-md text-gray-650'>
												Middle Level
											</p>
										</header>
										<p class='mt-2.1 text-md text-gray-700 leading-normal'>
											Good parts: pure function, higher-order functions, factory
											functions, composition. Bad parts: inheritance, this, new.
										</p>
										<div class='my-3.2 last:pb-1.5'>
											<ul class='flex flex-wrap text-md leading-relaxed  -mr-1.6 -mb-1.6'>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													ES6
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Vue
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Functional Programming
												</li>
												<li class='px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200'>
													Node
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
												CSS
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Rust
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Git
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Go
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Linux Server
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												UI Design
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Photoshop
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Illustrator
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Figma
											</li>
											<li class='px-2.5 mr-1.6 mb-1.6 text-base text-gray-750  print:bg-white print:border-inset   bg-gray-200'>
												Typography
											</li>
										</ul>
									</div>
								</section>
							</section>

							<section class='mt-8 first:mt-0'>
								{/* <!-- To keep in the same column --> */}
								<div class='break-inside-avoid'>
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
							</section>
						</div>
						{/* <!-- end Column --> */}
					</div>
					{/* <!-- end Page --> */}
				</main>
			</body>
		</>
	);
}
