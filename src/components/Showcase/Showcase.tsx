import { useState, useEffect } from 'react';
import './showcase.scss';

const STORAGE_KEY = 'showcase_auth';

async function sha256(value: string) {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(value),
  );
  return Array.from(new Uint8Array(digest), (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('');
}

interface ShowcaseProps {
  passHash: string;
}

function Showcase({ passHash }: ShowcaseProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const passphrase = params.get('passphrase');

        if (passHash && passphrase && (await sha256(passphrase)) === passHash) {
          localStorage.setItem(STORAGE_KEY, 'true');
          setAuthenticated(true);

          params.delete('passphrase');
          const query = params.toString();
          window.history.replaceState(
            null,
            '',
            window.location.pathname +
              (query ? `?${query}` : '') +
              window.location.hash,
          );
        } else if (localStorage.getItem(STORAGE_KEY) === 'true') {
          setAuthenticated(true);
        }
      } finally {
        setMounted(true);
      }
    };

    checkAccess();

    return () => {
      localStorage.removeItem(STORAGE_KEY);
    };
  }, [passHash]);

  if (!mounted) {
    return null;
  }

  if (!authenticated) {
    return (
      <main className='main-page-content showcase-page showcase-page-gate'>
        <div className='showcase-gate'>
          <h1 className='showcase-title'>Showcase 🪩</h1>
          <p>
            This page is password protected.{' '}
            <a className='marker marker-orange' href='mailto:damir.hara@gmail.com'>
              Contact me
            </a>{' '}
            for access.
          </p>
          <form
            className='showcase-gate-form'
            onSubmit={async (e) => {
              e.preventDefault();
              if (passHash && (await sha256(input)) === passHash) {
                localStorage.setItem(STORAGE_KEY, 'true');
                setAuthenticated(true);
              } else {
                setError(true);
                setInput('');
              }
            }}
          >
            <input
              type='password'
              className='showcase-gate-input'
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError(false);
              }}
              placeholder='Password'
              autoFocus
            />
            <button className='showcase-gate-btn' type='submit'>
              Enter
            </button>
          </form>
          {error && <p className='showcase-gate-error'>Incorrect password.</p>}
          <div className='showcase-actions'>
            <a className='back-link' href='/'>
              Home
            </a>
            <a className='back-link' href='/resume'>
              Resume
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='main-page-content showcase-page'>
      <h1 className='showcase-title'>Showcase 🪩</h1>
      <section className='showcase-section'>
        <p>
          A collection of clips and video walkthroughs from projects I&apos;ve
          been working on.
        </p>
      </section>

      <section className='showcase-section'>
        <h2 className='showcase-section-title'>
          Varo Bank | <span>Pay Later</span>
        </h2>
        <p>
          The &quot;How Pay Later works&quot; carousel. My focus was bringing
          the design vision to life: animating the images and the page
          progression pills underneath the content. Built with React Native
          (Expo) and TypeScript.
        </p>
        <picture className='showcase-clip'>
          <source
            media='(prefers-reduced-motion: reduce)'
            srcSet='/images/varo-pay-later-still.png'
          />
          <img
            src='/images/varo-pay-later.gif'
            alt='Varo Pay Later carousel animating through its steps, starting with Plan your purchase'
            width={295}
            height={640}
            loading='lazy'
          />
        </picture>
      </section>

      {/* Add video sections below — replace src with your embed URL (YouTube, Loom, Vimeo, etc.) */}
      <section className='showcase-section'>
        <h2 className='showcase-section-title'>
          Varo Bank | <span>Pay Over Time</span>
        </h2>
        <p>
          Quick walkthrough of the Pay Over Time feature I helped build. I was
          the lead Engineer on this project, working with technologies such as:
          React Native (Expo), TypeScript, Jotai, GraphQL, NodeJS, etc.
        </p>
        <div className='showcase-video-wrapper'>
          <iframe
            src='https://www.loom.com/embed/155faf584a814707a9c4c075af455348?hideEmbedTopBar=true'
            title='Varo Bank | Pay Over Time Feature Walkthrough'
            allowFullScreen
            allow='autoplay; fullscreen; picture-in-picture'
          />
        </div>
      </section>
      <section className='showcase-section'>
        <h2 className='showcase-section-title'>
          Varo Bank | <span>My Varo</span>
        </h2>
        <p>
          Quick walkthrough of My Varo Section which I led a small team to
          build. Technologies used: React Native (Expo), TypeScript, GraphQL,
          NodeJS, etc.
        </p>
        <div className='showcase-video-wrapper'>
          <iframe
            src='https://www.loom.com/embed/489fc954c02047cd82b3d7b7fc9eb5f8?hideEmbedTopBar=true'
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
        <a className='back-link' href='/resume'>
          Resume
        </a>
      </div>
    </main>
  );
}

export default Showcase;
