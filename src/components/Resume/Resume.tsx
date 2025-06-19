/* eslint-disable max-len */
import "./resume.scss";
import resumePdf from "/DamirResume2025.pdf";

// const LinkSvg = () => (
//   <svg
//     className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root"
//     focusable="false"
//     aria-hidden="true"
//     viewBox="0 0 24 24"
//     height="18"
//     width="18"
//   >
//     <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
//   </svg>
// );

const Resume = () => {
  return (
    <main className="resume">
      <section className="resume-container">
        <header className="header">
          <a href="/hireme" className="coffee">
            <img src="/images/damir.jpg" className="resume-img" alt="Damir" />
          </a>
          <h1 className="headline">
            Damir Harambasic{" "}
            <span className="hidden-text">
              Resume | Product Software Engineer
            </span>
            <span className="links">
              <a href="mailto:damir.hara@gmail.com">damir.hara@gmail.com</a>|
              <a className="phone-link" href="tel:18018654342">
                +1(801) 865-4342
              </a>
              |
              <a href="https://www.linkedin.com/in/damirharambasic">
                linkedin.com/in/damir
              </a>
              |<a href="https://www.damir.fun">www.damir.fun</a>
            </span>
            <span className="resume-summary">
              <h3 className="sub-headline">SUMMARY</h3>
              <p className="summary-paragraph">
                Product Software Engineer with a 10+ years of expertise in
                creating high-quality, high-performance web and native products.
                Passionate about blending technical know-how with intuitive
                design to create a great UX. Skilled in modern technologies like
                React, React Native, TypeScript, Node.js and GraphQL, with a
                strong track record in leading projects and mentoring teams.
              </p>
            </span>
          </h1>
        </header>
        <main className="main-section">
          <section className="experience-container">
            <h3 className="sub-headline">EXPERIENCE</h3>
            <ul className="job-wrapper">
              <h4>
                Staff Software Engineer <span className="span-light">@</span>{" "}
                Varo Bank
              </h4>
              <h5>January 2020 - Present</h5>
              <li>
                - Currently working on our Lending products, focusing on new
                features and improvements.
              </li>
              <li>
                - Helped with a complete rewrite of the Varo Bank app using
                React Native with Expo and TypeScript.
              </li>
              <li>
                - Led a small team of 3-4 engineers working on rewriting
                features, bug squashing and making sure our code is well tested.
              </li>
              <li>
                - Previously worked across multiple projects and
                cross-functional teams, often at once.
              </li>
              <li>
                - Led the effort in building and advocating for our new Design
                System and promoted server-driven UI architectural pattern.
              </li>
              <li>
                - Integrated with 3rd party services such as Statsig as our
                feature and experiment platform and Column Tax for tax prep.
              </li>
              <li>
                - Played a pivotal role in hiring, mentoring and onboarding new
                engineers.
              </li>
              <li>
                - Initially joined as a Senior Frontend Engineer and promoted to
                Staff Engineer in March 2024.
              </li>
              <li>
                - <strong>Some technologies I am working with</strong>:
                TypeScript, React, React Native, GraphQL, Express, PostgreSQL,
                Node.js, Storybook, Figma and React Testing Library.
              </li>
            </ul>

            <ul className="job-wrapper">
              <h4>
                Sr. Frontend Developer <span className="span-light">@</span>{" "}
                Overstock.com
              </h4>
              <h5>October 2019 - December 2019</h5>
              <li>- This was my brief second stint at Overstock.</li>
              <li>
                - Fixed bugs and built features on the product details page.
              </li>
              <li>
                - <strong>Some technologies I worked with</strong>: Node.js,
                Express, Webpack, Redux and React.
              </li>
            </ul>

            <ul className="job-wrapper">
              <h4>
                Sr. Full-Stack Developer <span className="span-light">@</span>{" "}
                tZERO
              </h4>
              <h5>September 2018 - October 2019</h5>
              <li>
                - Built a securities trading platform greenfield project on the
                blockchain.
              </li>
              <li>
                - Focused on Onboarding and KYC portion of the Web application,
                worked across the stack, from UI to database.
              </li>
              <li>- Filled in for multiple temporary Dev Lead stints.</li>
              <li>
                - <strong>Some technologies I worked with</strong>: React,
                Redux, Node.js, Express, PostgreSQL, Jest and Webpack.
              </li>
            </ul>

            <ul className="job-wrapper">
              <h4>
                Frontend Developer <span className="span-light">@</span>{" "}
                Overstock.com
              </h4>
              <h5>October 2014 - September 2018</h5>
              <li>
                - Handled new feature implementation, A/B Tests, and bug
                squishing on product pages.
              </li>
              <li>
                - Worked on a full-stack mobile web app as well as various
                client-side apps.
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
                - Created reusable React components and NPM modules that were
                used by teams across Overstock.com.
              </li>
              <li>
                - During this time I was promoted to Senior Frontend Developer.
                Some previous teams I worked with: Marketing and Production web
                team.
              </li>
              <li>
                - <strong>Some technologies I worked with</strong>: jQuery,
                Node.js, Express, Webpack, Redux and React.
              </li>
            </ul>

            <ul className="job-wrapper">
              <h4>
                Freelance Developer and Designer{" "}
                <span className="span-light">@</span> Damir Hara Design
              </h4>
              <h5>March 2013 - &infin;</h5>
              <li></li>
              <li>
                - Helped companies/clients build websites and web apps from
                scratch or by jumping in the middle of the project. I&apos;ve
                worked on everything from simple one-page static websites to
                production React apps served to millions of customers.
              </li>
              <li>
                <strong>Clients worked with:</strong> tZERO, Infowrap.com,
                Cottonwood Electric, TheChapelMotorcycleShop.com.
              </li>
            </ul>
          </section>
          <section className="skills-pill-container">
            <div className="skills-title">
              <h3 className="sub-headline">SKILLS</h3>
            </div>
            <ul>
              <li className="main-skill">JavaScript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>TypeScript</li>
              <li>GraphQL (Apollo)</li>
              <li>REST APIs</li>
              <li>React Testing Library</li>
              <li>Webpack</li>
              <li className="cool-fact-container">
                Astro <span className="cool-fact">Used on this site! 🚀</span>
              </li>
              <li>Expo</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li className="main-skill">CSS</li>
              <li>Styled Components</li>
              <li>PostCSS</li>
              <li>SASS</li>
              <li>CSS Modules</li>
              <li>Responsive Web Design</li>
              <li>Storybook</li>
              <li className="main-skill">Semantic HTML</li>
              <li>Git &amp; CLI chops</li>
              <li>Troubleshooting</li>
              <li>Wireframing &amp; Prototyping</li>
              <li>Cross-platform compatibility</li>
              <li>Communication &amp; Liaison</li>
              <li>Web Accessibility</li>
              <li>Mentoring &amp; Advising</li>
              <li>Leadership</li>
            </ul>
          </section>
          <section className="education-container">
            <h3 className="sub-headline">EDUCATION</h3>
            <ul className="job-wrapper">
              <h4>University of Utah</h4>
              <h5>Class of 2014</h5>
              <li>BS, Strategic Communication</li>
            </ul>
          </section>
        </main>
        <footer className="footer">
          <a className="footer-button" href="mailto:damir.hara@gmail.com">
            📧 Get In Touch
          </a>
          <a className="footer-button" href={resumePdf}>
            💾 Download PDF
          </a>
        </footer>
      </section>
    </main>
  );
};

export default Resume;
