import React, { useRef, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const titleRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      leftRef.current,
      { x: -80, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 75%',
          end: 'center 60%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { x: 80, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 75%',
          end: 'center 60%',
          scrub: 1,
        },
      }
    );
  }, []);

  const ContactForm = () => {
    const [state, handleSubmit] = useForm('mdkggegr');

    if (state.succeeded) {
      return (
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(34,211,238,0.1), rgba(34,211,238,0.05))',
            border: '1px solid rgba(34,211,238,0.3)',
            borderRadius: '16px',
            padding: '3rem',
            textAlign: 'center',
          }}
        >
          <div style={{
            width: 60, height: 60, borderRadius: '50%',
            background: 'rgba(34,211,238,0.1)',
            border: '1px solid rgba(34,211,238,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem',
            fontSize: '1.5rem',
          }}>
            ✓
          </div>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', color: '#22d3ee', letterSpacing: '0.05em' }}>
            MESSAGE SENT
          </h3>
          <p style={{ fontFamily: "'Syne', sans-serif", color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem' }}>
            Thanks for reaching out — I'll get back to you soon.
          </p>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="field-group">
          <label htmlFor="email" className="field-label">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="field-input"
            placeholder="your@email.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="field-error" />
        </div>

        <div className="field-group">
          <label htmlFor="name" className="field-label">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="field-input"
            placeholder="Bhuvanesh..."
          />
        </div>

        <div className="field-group">
          <label htmlFor="message" className="field-label">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            className="field-input"
            placeholder="Hello, I'd like to talk about..."
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="field-error" />
        </div>

        <button type="submit" disabled={state.submitting} className="submit-btn">
          <span>{state.submitting ? 'Sending...' : 'Send Message'}</span>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>
    );
  };

  return (
    <section
      id="contact"
      className="relative bg-[#050810] text-white py-28 px-6 md:px-16 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono&family=Syne:wght@400;700;800&display=swap');

        .contact-grid-bg {
          background-image:
            linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .contact-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(4rem, 12vw, 10rem);
          line-height: 1;
          letter-spacing: 0.05em;
          background: linear-gradient(135deg, #fff 40%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-dot {
          width: 6px; height: 6px;
          background: #22d3ee;
          border-radius: 50%;
          box-shadow: 0 0 10px #22d3ee, 0 0 20px #22d3ee;
          animation: pulse-dot 2s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.5); }
        }

        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(34,211,238,0.1);
          border-radius: 12px;
          transition: border-color 0.3s, background 0.3s;
        }

        .info-card:hover {
          border-color: rgba(34,211,238,0.35);
          background: rgba(34,211,238,0.04);
        }

        .info-icon {
          width: 40px; height: 40px;
          border-radius: 8px;
          background: rgba(34,211,238,0.08);
          border: 1px solid rgba(34,211,238,0.2);
          display: flex; align-items: center; justify-content: center;
          color: #22d3ee;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .social-pill {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(34,211,238,0.2);
          border-radius: 999px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: all 0.3s;
        }

        .social-pill:hover {
          border-color: #22d3ee;
          color: #22d3ee;
          background: rgba(34,211,238,0.07);
          box-shadow: 0 0 16px rgba(34,211,238,0.15);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(34,211,238,0.1);
          border-radius: 16px;
          padding: 2rem;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .field-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(34,211,238,0.6);
        }

        .field-input {
          width: 100%;
          padding: 0.85rem 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(34,211,238,0.15);
          border-radius: 8px;
          color: white;
          font-family: 'Syne', sans-serif;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
          resize: none;
        }

        .field-input::placeholder {
          color: rgba(255,255,255,0.2);
        }

        .field-input:focus {
          border-color: rgba(34,211,238,0.5);
          box-shadow: 0 0 20px rgba(34,211,238,0.08);
        }

        .field-error {
          color: #f87171;
          font-size: 0.75rem;
          font-family: 'Space Mono', monospace;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.9rem 2rem;
          background: transparent;
          border: 1px solid rgba(34,211,238,0.4);
          border-radius: 8px;
          color: #22d3ee;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(34,211,238,0.07);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .submit-btn:hover::before { transform: scaleX(1); }
        .submit-btn:hover {
          border-color: #22d3ee;
          box-shadow: 0 0 30px rgba(34,211,238,0.2);
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .accent-line {
          width: 40px; height: 2px;
          background: linear-gradient(90deg, #22d3ee, transparent);
          margin-bottom: 1.5rem;
        }
      `}</style>

      {/* Background */}
      <div className="contact-grid-bg absolute inset-0 pointer-events-none" />
      <div className="absolute pointer-events-none" style={{
        width: 500, height: 500, borderRadius: '50%',
        background: 'rgba(34,211,238,0.04)',
        filter: 'blur(120px)', bottom: '-10%', right: '-5%',
      }} />
      <div className="absolute pointer-events-none" style={{
        width: 300, height: 300, borderRadius: '50%',
        background: 'rgba(99,102,241,0.05)',
        filter: 'blur(100px)', top: '10%', left: '0%',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="glow-dot" />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.65rem',
            color: 'rgba(34,211,238,0.5)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>
            05 — Contact
          </span>
        </div>

        {/* Title */}
        <h1 ref={titleRef} className="contact-title mb-16">
          GET IN TOUCH
        </h1>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Info */}
          <div ref={leftRef} className="space-y-8">
            <div>
              <div className="accent-line" />
              <p style={{
                fontFamily: "'Syne', sans-serif",
                color: 'rgba(255,255,255,0.45)',
                fontSize: '1rem',
                lineHeight: '1.8',
              }}>
                I'm always open to new opportunities, creative collabs, or just a good conversation about tech and design.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-3">
              <div className="info-card">
                <div className="info-icon">✉</div>
                <div>
                  <p
  style={{
    fontFamily: "'Space Mono', monospace",
    fontSize: '0.6rem',
    letterSpacing: '0.15em',
    color: 'rgba(34,211,238,0.5)',
    textTransform: 'uppercase',
    marginBottom: '0.25rem'
  }}
>
  Email
</p>

<a
  href="mailto:bhuvanesh.s121@gmail.com"
  style={{
    fontFamily: "'Syne', sans-serif",
    color: 'rgba(255,255,255,0.8)',
    fontSize: '0.9rem',
    textDecoration: 'none'
  }}
  onMouseEnter={(e) => (e.target.style.color = '#22d3ee')}
  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.8)')}
>
  bhuvanesh.s121@gmail.com
</a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">◎</div>
                <div>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(34,211,238,0.5)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Location
                  </p>
                  <p style={{ fontFamily: "'Syne', sans-serif", color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                    Chennai, India
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">◈</div>
                <div>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(34,211,238,0.5)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Status
                  </p>
                  <p style={{ fontFamily: "'Syne', sans-serif", color: '#22d3ee', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22d3ee', display: 'inline-block', boxShadow: '0 0 8px #22d3ee' }} />
                    Open to Work
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(34,211,238,0.4)', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Find me on
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://github.com/bhuvaneshwaran-S157" target="_blank" rel="noopener noreferrer" className="social-pill">GitHub</a>
                <a href="#" className="social-pill">LinkedIn</a>
                <a href="#" className="social-pill">Twitter</a>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div ref={formRef}>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;