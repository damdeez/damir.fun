import "./intro.scss";

const Intro = () => (
  <div className="main">
    <img className="damir-img" src="/images/damir.jpg" alt="Picture of Damir" />
    <section className="main-text">
      <h1 className="intro-paragraph">{">"} Hi, my name is Damir.</h1>
      <p className="main-paragraph">
        I am a Software Engineer focused on building aesthetically pleasing
        products. You can check out my <a href="/resume">resume</a> 👈 here. You
        can also find me on these social mediums:{" "}
        <a href="https://github.com/damdeez">Github</a>,{" "}
        <a href="https://www.linkedin.com/in/damirharambasic">LinkedIn</a>, or
        feel free to send me a good ol&apos;{" "}
        <a href="mailto:damir.hara@gmail.com">email</a>. ☕️
      </p>
    </section>
  </div>
);

export default Intro;
