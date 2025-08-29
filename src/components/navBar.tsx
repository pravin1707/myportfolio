import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import { navLinks } from "../constants/index";

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  // const [scrolled, setScrolled] = useState(false);    // track if the user has scrolled down the page

  const logoRef = useRef<HTMLAnchorElement>(null);   // ref for the logo element
  const navRef = useRef<HTMLElement>(null);   // ref for the main navbar header

  // useEffect: GSAP logo rotation
  useEffect(() => {
    const logoElement = logoRef.current;
    if (logoElement) {
      const handleMouseEnter = () => {
        gsap.to(logoElement, { rotation: 360, scale: 1.05, duration: 1, ease: "power2.out" });
      };
      const handleMouseLeave = () => {
        gsap.to(logoElement, { rotation: 0, scale: 1, duration: 1, ease: "back.out(1)" });
      };
      logoElement.addEventListener('mouseenter', handleMouseEnter);
      logoElement.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        logoElement.removeEventListener('mouseenter', handleMouseEnter);
        logoElement.removeEventListener('mouseleave', handleMouseLeave);
        gsap.killTweensOf(logoElement);
      };
    }
  }, []);

  // useEffect: GSAP navbar animation
  useEffect(() => {
    const navElement = navRef.current;

    gsap.to(navElement, {
      // These are the properties we are animating TO
      top: "100px",                           // Move to the top
      // width: "100%",                        // Expand to 100% width
      backgroundColor: "rgba(0, 0, 0, 0.5)", // More opaque black
      backdropFilter: "blur(5px)",         // A stronger blur
      border: "2px solid rgba(255, 255, 255, 0.5)", // Ensure border remains consistent
      borderRadius: "24px",
      
      // ScrollTrigger configuration
      scrollTrigger: {
        trigger: "body",      // The trigger is the body itself
        start: "top top",     // Start animating when the top of the body hits the top of the viewport
        end: "+=150",         // Finish the animation 150px after the start point
        scrub: 1,             // Smoothly links the animation to the scrollbar (1-second catch-up)
        // markers: true,     // Uncomment this for debugging, remove for production
      }
    });
  }, []);

  // handle scroll restoration
  useEffect(() => {
    // Check if the history object exists
    if (window.history.scrollRestoration) {
    window.history.scrollRestoration = 'manual';
    }

    // Optional: Also scroll to top on initial mount, just in case
    window.scrollTo(0, 0);
  }, []);

  return (
    <header className="navbar" ref={navRef}>
      <div className="inner">
        {/* Logo */}
        <a href="#hero" className="logo" ref={logoRef}>
          PK
        </a>

        {/* --- Desktop Navigation --- */}
        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                {/* UPDATED: Changed class to 'nav-link-draw' to match the CSS */}
                <a href={link} className="nav-link-draw">
                  {name}
                  {/* ADDED: The four <span> elements required for the drawing animation */}
                  <span className="border-bottom"></span>
                  <span className="border-right"></span>
                  <span className="border-top"></span>
                  <span className="border-left"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* --- Contact Me Button --- */}
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar