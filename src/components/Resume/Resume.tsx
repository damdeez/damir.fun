/* eslint-disable max-len */
import './resume.scss';
import resumePdf from '/DamirResume2023.5.pdf';

const Resume = () => {
  const jsSkillsSectionOpen = true;
  const cssSkillsSectionOpen = true;

  const LinkSVG = () => (
    <svg
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="OpenInNewIcon"
      height="20"
      width="20"
    >
      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  );

  return (
    <main className="resume">
      <section className="resume-container">
        <header className="header">
          {/* <a href="/" className="back-home">👈 go back</a> */}
          <a href="/hireme" className="coffee">
            <img src="/images/damir.jpg" className="resume-img" alt="Damir" />
          </a>
          <h1 className="headline">
            Damir Harambasic{' '}
            <span className="hidden-text">
              Resume | Senior Frontend Engineer
            </span>
            <span className="email-link">
              <a href="mailto:damir.hara@gmail.com">damir.hara@gmail.com</a>
            </span>
            <span className="link">
              <a href="https://www.linkedin.com/in/damirharambasic">
                linkedin.com/in/damir
                <LinkSVG />
              </a>
            </span>
          </h1>
          <div className="resume-summary">
            <h3 className="sub-headline">SUMMARY</h3>
            <p className="summary-paragraph">
              Passionate and experienced Web Software Engineer who values clear communication, great design and creating pixel-perfect, high-performance web interactions.
            </p>
          </div>
        </header>
        <main className="main-section">
          <section className="experience-container">
            <h3 className="sub-headline">EXPERIENCE</h3>
            <ul className={"job-wrapper"}>
              <h4>
                Sr. Frontend Engineer{' '}
                <span className="span-light">@</span> Varo Bank
              </h4>
              <h5>January 2020 - Present</h5>
              <li>
                - Currently leading the Web Engineering effort on our new Design System and helping with migration.
              </li>
              <li>- Helped develop and launch the new bank.varomoney.com.</li>
              <li>
                - Part of a hiring committee and helped mentor new Engineers.
              </li>
              <li>
                - Worked across multiple projects and teams including: client banking, growth, engagement, internal tools and design systems.
              </li>
              <li>
                - Some Technologies I am working with: TypeScript, React, GraphQL/Apollo, Storybook, and React Testing Library.
              </li>
            </ul>

            <ul className={"job-wrapper"}>
              <h4>
                Sr. Frontend Developer{' '}
                <span className="span-light">@</span> Overstock.com
              </h4>
              <h5>October 2019 - December 2019</h5>
              <li>
                - Built the Product Page in Node.js, Express, Webpack, Redux, and React.
              </li>
              <li>
                - Rebuilt the Webpack Server-side Rendering portion of our NodeJS powered app.
              </li>
              <li>
                - This was my brief second stint at Overstock.
              </li>
            </ul>

            <ul className={"job-wrapper"}>
              <h4>
                Sr. Frontend/Full-Stack Developer{' '}
                <span className="span-light">@</span> tZERO
              </h4>
              <h5>September 2018 - October 2019</h5>
              <li>
                - Built the next generation Blockchain-based UI using React,
                Redux, Webpack, Express, and Node.js.
              </li>
              <li>- Filled in for multiple temporary Dev Lead stints.</li>
            </ul>

            <ul className={"job-wrapper"}>
              <h4>
                Frontend Developer <span className="span-light">@</span>{' '}
                Overstock.com
              </h4>
              <h5>October 2014 - September 2018</h5>
              <li>Product Page Dev Team:</li>
              <li>
                - Handled new feature implementation, A/B Tests, and bug
                squishing on product pages.
              </li>
              <li>
                - Worked on a full-stack Node.js, Express, React, Redux mobile
                web app as well as various client-side repo&apos;s.
              </li>
              <li>
                - Was involved in the design process of product with UX and
                Product teammates.
              </li>
              <li>
                - Built tools for our front-end workflow, such as implementing
                ES6 support and ReactJS into our repo.
              </li>
              <li>
                - Created reusable React components and NPM modules that are
                used by teams across Overstock.com.
              </li>
              <li>
                - During this time I was promoted to Senior Frontend Developer.
              </li>
              <li>Production Web Team:</li>
              <li>
                - Worked directly with Marketing, Product, and Back-end teams on
                various projects concerning the homepage of Overstock.com.
              </li>
              <li>
                - Handle initial front-end development, support and maintenance
                for Overstock.com micro-sites, homepage content, and promotional
                email/content/pages. Take part in QA and on-call when needed.
              </li>
            </ul>

            <ul className="job-wrapper">
              <h4>
                Freelance Developer and Designer{' '}
                <span className="span-light">@</span> Damir Hara Design
              </h4>
              <h5>March 2013 - &infin;</h5>
              <li>
              </li>
              <li>
                - Helped companies/clients build websites and web apps from
                scratch or by jumping in the middle of the project. I&apos;ve
                worked on everything from simple one-page static websites to
                production React apps served to millions of people.
              </li>
              <li>
                <strong>Clients worked with:</strong> Infowrap.com, Cottonwood
                Electric, TheChapelMotorcycleShop.com.
              </li>
            </ul>
          </section>
          <section className="skills-education-wrapper">
            <section className="skills-container">
              <div className="skills-title">
                <h3 className="sub-headline">SKILLS</h3>
              </div>
              <ul className="skills-wrapper">
                <li>
                  <button
                    type="button"
                    className="tooltip-target-javascript"
                  >
                    <span className="title">
                      {jsSkillsSectionOpen ? '- JavaScript' : '+ JavaScript *'}
                    </span>
                    <div
                      className={`tooltip ${
                        jsSkillsSectionOpen ? 'open' : 'closed'
                      }`}
                    >
                      <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>TypeScript</li>
                        <li>GraphQL (Apollo)</li>
                        <li>RESTful API&apos;s</li>
                        <li>React Testing Library</li>
                        <li>Webpack</li>
                        <li>Astro <span className="cool-fact">Used on this site! 🚀</span></li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                      </ul>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="tooltip-target-css"
                  >
                    <span className="title">
                      {cssSkillsSectionOpen ? '- CSS' : '+ CSS *'}
                    </span>
                    <div
                      className={`tooltip ${
                        cssSkillsSectionOpen ? 'open' : 'closed'
                      }`}
                    >
                      <ul>
                        <li>Styled Components</li>
                        <li>PostCSS</li>
                        <li>LESS</li>
                        <li>SASS</li>
                        <li>CSS Modules</li>
                      </ul>
                    </div>
                  </button>
                </li>
              </ul>
              <ul className="skills-wrapper">
                <li>- Semantic HTML</li>
                <li>- Git &amp; CLI chops</li>
                <li>- Troubleshooting </li>
                <li>- Responsive Web Design</li>
                <li>- Wireframing &amp; Prototyping</li>
                <li>- Cross-browser compatibility</li>
                <li>- Communication &amp; Liaison</li>
                <li>- Web Accessibility</li>
                <li>- Mentoring</li>
              </ul>
            </section>
            <section className="education-container">
              <h3 className="sub-headline">EDUCATION</h3>
              <ul className="job-wrapper">
                <h4>University of Utah</h4>
                <h5>Class of 2014</h5>
                <li>BS, Mass Communication</li>
              </ul>
              <ul className="job-wrapper">
                <h4>Salt Lake Community College</h4>
                <h5>Class of 2012</h5>
                <li>BS, General Studies</li>
              </ul>
            </section>
          </section>
        </main>
        <footer className="footer">
          <div className="footer-button">
            <a href="mailto:damir.hara@gmail.com">Get In Touch</a>
          </div>
          <div className="footer-button">
            <a href={resumePdf}>Download PDF</a>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default Resume;
