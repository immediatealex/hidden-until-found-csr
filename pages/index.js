import Head from 'next/head';
import React from 'react';

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef(null);


  React.useEffect(() => {
    const ref = wrapperRef.current
    ref.setAttribute('hidden', 'until-found');
    ref.style.setProperty('display', 'block', 'important');
    const handleBeforeMatch = () => setOpen((prev) => !prev);
    ref.addEventListener('beforematch', handleBeforeMatch);
    return () => {
      ref.removeEventListener('beforematch', handleBeforeMatch);
    };
  }, []);

  React.useEffect(() => {
    if (open) {
      wrapperRef.current.removeAttribute('hidden');
    } else {
      wrapperRef.current.setAttribute('hidden', 'until-found');
    }
  }, [open]);

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="cVcVriDNfRrJhY1nfjVKyHgM4mqD3x6J2BDSZz9r3dk"
        />
      </Head>
      <div className={`section ${open ? '' : 'collapsed'}`}>
        <h2 className="title" onClick={() => setOpen(!open)}>
          Introduction
        </h2>

        <div
          className='details'
          ref={wrapperRef}
        >
          <div>
            Green tea ginger lemongrass agave green tea guacamole summer fruit salad fruit smash
            pumpkin orange zesty tofu pad thai roasted butternut squash blueberry chia seed jam
            green papaya salad.
          </div>
        </div>
      </div>
    </>
  );
}
