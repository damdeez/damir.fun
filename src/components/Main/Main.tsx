import './main.scss';
import damirJpg from '/damir.jpg';

const Main = () => (
  <div className="main">
    <img className="damir-img" src={damirJpg} alt="Damir" />
    <section className="main-text">
      <h1 className="intro-paragraph">{'>'} Hi, my name is Damir.</h1>
      <h3>I am a Software Engineer focused on building aesthetically pleasing Web products. You can check out my resume <a href="/resume">here</a>. You can also find me on these social mediums: <a href="https://github.com/damdeez">Github</a>, <a href="https://twitter.com/damdeez">Twitter</a>, <a href="https://www.linkedin.com/in/damirharambasic">LinkedIn</a>, or feel free to send me a good ol&apos; <a href="mailto:damir.hara@gmail.com">email</a>. ☕️
      </h3>
    </section>
  </div>
);

export default Main;
