import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../public/profile.jpg';
import profilePicT from '../public/profiletrans.jpg';

export default function Home({ lang = 'en' }) {
  console.log(lang);
  const enlang = lang == 'en';
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="robots" content="noindex" />
        <meta name="googlebot" content="noindex" />
        <meta name="description" content="Programming and Sales" />
        <meta name="keywords" content="resume,cv,Riekus" />
        <meta name="author" content="Riekus Ritskes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* <!-- <link rel="preload" href="./fonts/FiraGO-Regular.latin.woff2" as="font" crossorigin="anonymous"> --> */}
        <title>Riekus Ritskes - {enlang ? 'Resume' : 'CV'} </title>
      </Head>

      <main className="pb-12 font-firago hyphens-manual bg-gray-250 print:bg-white print:pb-0 ">
        {/* <!-- Language and Print Buttons --> */}
        <section className="flex flex-row justify-center pb-8 print:pb-0 print:hidden">
          <div className="flex flex-row items-center justify-between text-lg bg-white shadow-xl text-gray-550">
            <Link href="/en">
              <div
                className={`
									px-3 py-1 cursor-pointer ${enlang ? 'font-medium' : ''}	`}
              >
                en
              </div>
            </Link>
            <svg
              onClick={(e) => window.print()}
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>

            <Link href="/nl">
              <div
                className={`px-3 py-1 cursor-pointer ${
                  !enlang ? 'font-medium' : ''
                }`}
              >
                nl
              </div>
            </Link>
          </div>
        </section>
        {/* <!-- Page --> */}
        <div className="max-w-2xl p-6 mx-auto bg-white shadow-xl print:shadow-none page print:max-w-a4 md:max-w-a4 md:h-a4 xsm:p-8 sm:p-9 md:p-16">
          {/* <!-- Name --> */}
          <header className="flex flex-row items-center mb-8 md:mb-11 ">
            <div
              className="px-3 mr-5 font-medium leading-none text-white bg-gray-600 text-logobase initials-container "
              style={{ paddingBottom: '0.6875rem', paddingTop: '0.6875rem' }}
            >
              <div
                className="text-center initial"
                style={{ paddingBottom: '0.1875rem' }}
              >
                R
              </div>
              <div className="text-center initial">R</div>
            </div>

            <div className="">
              <h1 className="mb-0 text-2xl font-bold text-gray-750">
                Riekus Ritskes
              </h1>
              {/* <!--Job Title--> */}
              <h2 className="m-0 text-xl font-semibold leading-snug text-gray-700">
                Salesforce Consultant & Developer 
              </h2>
              {/* <!--Location --> */}
              <h3 className="m-0 mt-0 font-semibold leading-snug text-md text-gray-550">
                Rotterdam, {enlang ? 'The Netherlands' : 'Nederland'}
              </h3>
            </div>

            {/* <!--Profile Picture --> */}
            <div className="flex items-center justify-end flex-1 ">
              <div className="mr-1  md:mr-16">
                <div className="w-20 h-20 rounded-md shadow-sm md:h-24 md:w-24 ">
                  <Image src={profilePic} className="rounded-md " alt="me" />
                </div>
              </div>
            </div>
          </header>
          {/* <!-- end Name --> */}

          {/* <!-- Column --> */}
          <div className=" md:col-count-2 print:col-count-2 col-gap-md md:h-a4-col print:h-a4-col col-fill-auto">
            {/* <!-- Contact Information -------------------------------------------------------------------------------------> */}
            <section className="pb-4 mt-4 first:mt-0">
              {/* <!-- To keep in the same column --------------------------------------------------------------------------> */}
              <div className="break-inside-avoid">
                <section className="pb-2  border-b-2 print:border-b-[2px] break-inside-avoid">
                  <table className="leading-normal transition duration-100 ease-in text-md text-gray-550 ">
                    <tr
                      className="text-gray-700 cursor-pointer hover:text-gray-700 group"
                      onClick={() => window.open('https://riekus.io')}
                    >
                      <td className="pr-2 text-lg font-semibold text-gray-800 leading-snugish">
                        Website:
                      </td>
                      <td>
                        riekus.io
                        <span className="inline-block font-normal duration-100 ease-in text-gray-700transition text-gray-550 group-hover:text-gray-700 ">
                          ↗
                        </span>
                      </td>
                    </tr>
                    <tr
                      className="cursor-pointer hover:text-gray-700 group"
                      onClick={() => window.open('mailto:me@riekus.io')}
                    >
                      <td className="pr-2 text-lg font-semibold text-gray-800 leading-snugish">
                        Email:
                      </td>
                      <td>
                        me@riekus.io
                        <span className="inline-block font-normal duration-100 ease-in text-gray-700transition text-gray-550 group-hover:text-gray-700 ">
                          ↗
                        </span>
                      </td>
                    </tr>
                    <tr
                      className="cursor-pointer hover:text-gray-700 group"
                      onClick={() => window.open('tel:+31645260830')}
                    >
                      <td className="pr-2 text-lg font-semibold text-gray-800 leading-snugish">
                        Phone:
                      </td>
                      <td>
                        +31 6 4526 0830
                        <span className="inline-block font-normal duration-100 ease-in text-gray-700transition text-gray-550 group-hover:text-gray-700 ">
                          ↗
                        </span>
                      </td>
                    </tr>
                    <tr
                      className="cursor-pointer hover:text-gray-700 group"
                      onClick={() =>
                        window.open('https://github.com/riekusr', '_blank')
                      }
                    >
                      <td className="pr-2 text-lg font-semibold text-gray-800 leading-snugish">
                        Github:
                      </td>
                      <td>
                        {' '}
                        RiekusR
                        <span className="inline-block font-normal duration-100 ease-in text-gray-700transition text-gray-550 group-hover:text-gray-700 ">
                          ↗
                        </span>
                      </td>
                    </tr>
                    <tr
                      className="hover:text-gray-700"
                      onClick={() =>
                        window.open('https://github.com/riekusr', '_blank')
                      }
                    >
                      <td className="pr-2 text-lg font-semibold text-gray-800 leading-snugish">
                        DOB:
                      </td>
                      <td> 17-03-1988</td>
                    </tr>
                    <tr
                      className="hover:text-gray-700 "
                      onClick={() =>
                        window.open('https://github.com/riekusr', '_blank')
                      }
                    >
                      <td className="pr-2 text-lg font-semibold text-gray-800 leading-snugish">
                        Origin:
                      </td>
                      <td> Dutch</td>
                    </tr>
                  </table>
                </section>
              </div>
            </section>
            {/* <!--Summary ----------------------> */}
            <section className=" p2-4 mt-1 border-b-2 print:border-b-[2px] first:mt-0">
              {/* <!-- To keep in the same column --> */}
              <div className="break-inside-avoid">
                <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-700 ">
                  {enlang ? 'SUMMARY' : 'SAMENVATTING'}
                </h2>

                <section className="mb-2 break-inside-avoid">
                  <p className="mt-2 leading-normal text-gray-700 text-md">
                    {enlang
                      ? `Self starter with a knack for sales and a skill set in 
										programming and IT. Always learning and progressing with an
										agile mindset. Currently focused on Salesforce intergrations.`
                      : `Zelf starter met een passie voor sales en programmeer/IT vaardigheden.
                      Altijd aan het leren en groeien met een Agile mentaliteit. Momenteel een focus op Salesforce intergraties. 
                      `}
                  </p>
                </section>
              </div>
            </section>

            {/* <!-- EXPERIENCE--> */}

            <section className="mt-8 first:mt-0 border-b-2 print:border-b-[2px]">
              {/* <!-- To keep in the same column --> */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 ">
                  {enlang ? 'EXPERIENCE' : 'ERVARINGEN'}
                </h2>
                    </div>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      Welisa Salesforce Consultancy - Barneveld NL
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Dec 2021 – Present | Consultant & Developer
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    {enlang
                      ? `
										Working as functional Consultant and LWC / Apex developer.`
                      : `
                      Werkzaam als functioneel Consultant en LWC / Apex developer. 
                      `}
                  </p>
                </section>
                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      ARB 4x4 Accessories - Sydney AU
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Feb 2018 – Sep 2020 | Sales & Support
                    </p>
                  </header>
                  <p className="mt-2.1 text-md text-gray-700 leading-normal">
                    {enlang
                      ? `
										Responsible for sales and customer experience at this
										leading Australian 4x4 brand. Duties consisted of finding
										new business, up-selling existing customers, managing
										processes and product advising.`
                      : `
                      Verantwoordelijk voor de verkoop en klant ervaring bij deze Australische
                      4x4 marktleider. Taken bestaan uit het werven van klanten, upsell bestaande klanten
                      en het beheren van (verkoop) systemen. 
                      `}
                  </p>
                </section>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold leading-snug text-gray-700">
                    E.J. Rooy Automotive - Krimpen NL
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Feb 2008 – Jan 2018 | Sales Manager
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  {enlang
                    ? `
									B2B Sales manager responsible for sales targets and 2 sales
									associates in the wholesale automotive industry.`
                    : `B2B Sales manager verantwoordelijk voor de targets van 2 
                    medewerkers in de auto groothandel industrie.`}
                </p>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  {enlang
                    ? `
									Duties consisted of exploring new business, managing existing
									key clients and streamlining sales, marketing and
									communication processes.`
                    : `
                    Taken bestonden uit het vinden van nieuwe klanten, 
                    beheren van bestaande accounts, het verbeteren van verkoop,
                    marketing en communicatie processen. 
                    `}
                </p>
              </section>

              <section className="mb-2 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold leading-snug text-gray-700">
                    van Oord - Dubai UA
                  </h3>
                  <p className="leading-normal text-md text-gray-650">
                    Feb 2007– Dec 2007 | Technical Apprentice
                  </p>
                </header>
                <p className="mt-2.1 text-md text-gray-700 leading-normal">
                  {enlang
                    ? `
									van Oord is the industry leader in dredging and maritime
									ingenuity. Hired straight out of school for my apprenticeship.
									Worked on a cutter suction dredger creating the islands of the
									prestige project 'the world' in Dubai.`
                    : `
                  Van oord is de industrie leider in bagger en maritieme projecten. Aangenomen 
                  voor een jaar betaalde stage in Dubai waar we werkten aan het
                   eilanden project 'De Wereld' met een cutter suction dredger. 
                  `}
                </p>
              </section>
            </section>

            <section className="mt-8 first:mt-0">
              {/* <!-- To keep in the same column --> */}
              <div className="border-b-2 print:border-b-[2px] md:border-none print:border-none break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 ">
                  {enlang ? 'EDUCATION' : 'OPLEIDINGEN'}
                </h2>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      Zadkine
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      2008 – 2010 | Automotive Electronics Specialist
                    </p>
                  </header>
                </section>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      Scheepvaart en Transport College
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      2005 – 2008 | Maritime Technical Specialist
                    </p>
                  </header>
                </section>

                <section className="mb-2 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      Krimpenerwaard College
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      2000 – 2005 | VMBO-T
                    </p>
                  </header>
                </section>
              </div>
            </section>

            <section className="mt-8 first:mt-0">
              {/* <!-- To keep in the same column --> */}
              <div className="border-b-2 print:border-b-[2px] break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 ">
                  {enlang ? 'PROJECTS' : 'PROJECTEN'}
                </h2>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      <a
                        href="https://spur.to"
                        className="group"
                        target="_blank"
                      >
                        Spur.to
                        <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 group-hover:text-gray-700">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Since 2020 | NextJS Dart
                    </p>
                  </header>
                  <p className="mt-1 leading-normal text-gray-700 text-md">
                    {enlang
                      ? `
										A love child of GoFundMe.com and Zapier.com. A platform to
										raise funds that get released when an actual measurable goal (through 3th party
										API's) is achieved. **Canceled**`
                      : `
                    De liefdes baby van GoFundMe.com and Zapier.com. Een platform waar je 
                    conditioneel geld kunt inzamelen dmv API kpopelingen. 
                    `}
                  </p>
                </section>
                {/* </div> */}

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      <a
                        href="https://fiberstand.com"
                        className="group"
                        target="_blank"
                      >
                        FiberStand.com
                        <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 group-hover:text-gray-700">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      Since 2020 | NextJS CAD Blender ThreeJS
                    </p>
                  </header>
                  <p className="mt-1 leading-normal text-gray-700 text-md">
                    Hardware product. <br />
                    {enlang
                      ? `
						
										Ergonomic carbon fiber laptop stand for travelers.`
                      : `
                    
                    Ergonomische laptop standaard voor reizigers. 
                    `}
                  </p>
                </section>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      <a
                        href="https://australianprivacy.org"
                        className="group"
                        target="_blank"
                      >
                        AustralianPrivacy.org
                        <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 group-hover:text-gray-700">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      2018 - 2020 | JS PSQL
                    </p>
                  </header>
                  <p className="mt-1 leading-normal text-gray-700 text-md">
                    {enlang
                      ? `
										Notifying Australian Citizens of password & data leaks.`
                      : `
                    Brengt Australiërs op de hoogte van data lekken. 
                    `}
                  </p>
                </section>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      <a
                        href="https://autosucces.nl"
                        className="group"
                        target="_blank"
                      >
                        AutoSucces.nl
                        <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 group-hover:text-gray-700">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      2016 - 2018 | Python MYSQL JS
                    </p>
                  </header>
                  <p className="mt-1 leading-normal text-gray-700 text-md">
                    {enlang
                      ? `Automotive Analytic SaaS. Software that scrapes, indexes
										and processes listing pages of automotive resellers.
										this data was to be sold to car dealers to help
										identify trends, opportunities and track competitors.`
                      : `Automotive Analytic Saas. Software dat voorraad pagina's van autobedrijven
                    schraapt, indexeert en analyseert. Helpt klanten bij het vinden van trends en het prestaties
                    van concurrenten`}
                  </p>
                </section>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      <a
                        href="https://partoffer.com"
                        className="group"
                        target="_blank"
                      >
                        PartOffer.com
                        <span className="inline-block font-normal transition duration-100 ease-in text-gray-550 group-hover:text-gray-700">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      2015 – 2017 | Python MYSQL JS
                    </p>
                  </header>
                  <p className="mt-1 leading-normal text-gray-700 text-md">
                    {enlang
                      ? `
										Automotive parts aggregator website. Supplying the Dutch
										automotive parts ecosystem with used parts from suppliers
										based in Germany, Poland and Czech. Automated scraping from
										Ebay and relisting on 'Marktplaats.nl'.`
                      : `
                    Aggregeren van auto onderdelen van buitenlandse aanbieders in Duitsland,
                    Polen en Tsjechië voor aanbod op o.a. Marktplaats.nl. Geautomatiseerd schrapen 
                    van Ebay producten. 
                    `}
                  </p>
                </section>

                <section className="mb-2 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      Fiximo.com | A manual for everything
                    </h3>
                    <p className="leading-normal text-md text-gray-650">
                      2011 - 2012 | PHP MYSQL JS
                    </p>
                  </header>
                  <p className="mt-1 leading-normal text-gray-700 text-md">
                    {enlang
                      ? `
										Platform where DIYers write manuals for repairs, affiliate commission on tools
                    and parts are shared with the content creators`
                      : `
                    Platform waar DIY-ers handleidingen kunnen plaatsen voor
                    reparaties en waar commissies op affiliatie producten worden gedeeld
                    met de content creators. 
                    `}
                  </p>
                </section>
              </div>
            </section>

            <section className="mt-8 first:mt-0">
              {/* <!-- To keep in the same column --> */}
              <div className="break-inside-avoid">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-gray-550 ">
                  {enlang ? 'SKILLS' : 'VAARDIGHEDEN'}
                </h2>

                <section className="mb-4.5 break-inside-avoid">
                  <header>
                    <h3 className="text-lg font-semibold leading-snug text-gray-700">
                      {enlang ? 'Programming' : 'Programeren'}
                    </h3>
                  </header>
                  <div className="my-3.2 last:pb-1.5">
                    <ul className="flex flex-wrap text-md leading-relaxed  -mr-1.6 -mb-1.6">
                      {[
                        'Javascript',
                        'NextJS',
                        'React',
                        'Node',
                        'MYSQL',
                        'Postgres',
                        'Python',
                        'Django',
                        'Flask',
                        'Dart',
                        'Flutter',
                        'Git',
                        'Docker',
                        'Linux',
                        'LWC',
                        'Apex',
                      ].map((i) => (
                        <li
                          key={i}
                          className="px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200"
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>

              <section className="mb-4.5 break-inside-avoid">
                <header>
                  <h3 className="text-lg font-semibold leading-snug text-gray-700">
                    {enlang ? 'Other' : 'Anders'}
                  </h3>
                </header>
                <div className="my-3.2 last:pb-1.5">
                  <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
                    {[
                      'SalesForce',
                      'Marketing',
                      'Sales',
                      'Psychology',
                      'Adobe Suite',
                      'CAD',
                      'IELTS - 8.0',
                      'Agile scrum ',
                    ].map((i) => (
                      <li
                        key={i}
                        className="px-2.5  mr-1.6 mb-1.6 text-base text-gray-750    print:bg-white print:border-inset   bg-gray-200"
                      >
                        {i}
                      </li>
                    ))}
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
