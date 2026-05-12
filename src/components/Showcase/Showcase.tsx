import { useState, useEffect } from 'react';
import './showcase.scss';

const STORAGE_KEY = 'showcase_auth';
const PASSWORD = import.meta.env.PUBLIC_SHOWCASE_PASSWORD as string;

function Showcase() {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setAuthenticated(true);
    }

    return () => {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  if (!authenticated) {
    return (
      <main className="main-page-content showcase-page">
        <div className="showcase-gate">
          <h1 className="showcase-title">Showcase</h1>
          <p>This page is password protected.</p>
          <form
            className="showcase-gate-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (input === PASSWORD) {
                localStorage.setItem(STORAGE_KEY, 'true');
                setAuthenticated(true);
              } else {
                setError(true);
                setInput('');
              }
            }}
          >
            <input
              type="password"
              className="showcase-gate-input"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false); }}
              placeholder="Password"
              autoFocus
            />
            <button className="showcase-gate-btn" type="submit">Enter</button>
          </form>
          {error && <p className="showcase-gate-error">Incorrect password.</p>}
          <div className="showcase-actions">
            <a className="back-link" href="/">Home</a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='main-page-content showcase-page'>
      <h1 className='showcase-title'>Showcase</h1>
      <section className='showcase-section'>
        <p>
          A collection of video walkthroughs from projects I&apos;ve been
          working on.
        </p>
      </section>

      {/* Add video sections below — replace src with your embed URL (YouTube, Loom, Vimeo, etc.) */}
      <section className='showcase-section'>
        <h2 className='showcase-section-title'>
          Varo Bank | Pay Over Time Feature Walkthrough
        </h2>
        <p>Quick walkthrough of the Pay Over Time feature I helped build. I was the lead Engineer on this project, working with technologies such as: React Native (Expo), TypeScript, Jotai, GraphQL, NodeJS, etc.</p>
        <div className='showcase-video-wrapper'>
          <iframe
            src='https://www.loom.com/embed/155faf584a814707a9c4c075af455348'
            title='Varo Bank | Pay Over Time Feature Walkthrough'
            allowFullScreen
            allow='autoplay; fullscreen; picture-in-picture'
          />
        </div>
      </section>
      <section className='showcase-section'>
        <h2 className='showcase-section-title'>
          Varo Bank | My Varo Section Walkthrough
        </h2>
        <p>Quick walkthrough of My Varo Section which I led a small team to build. Technologies used: React Native (Expo), TypeScript, GraphQL, NodeJS, etc.</p>
        <div className='showcase-video-wrapper'>
          <iframe
            src='https://www.loom.com/embed/489fc954c02047cd82b3d7b7fc9eb5f8'
            title='Varo Bank | My Varo Section Walkthrough'
            allowFullScreen
            allow='autoplay; fullscreen; picture-in-picture'
          />
        </div>
      </section>

      <div className='showcase-actions'>
        <a className='back-link' href='/'>
          Home
        </a>
      </div>
    </main>
  );
}

export default Showcase;
