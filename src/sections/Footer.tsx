"use client";
import { socialImgs } from '../constants';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Copyright Notice */}
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} | PK's Portfolio. All rights reserved.</p>
        </div>

        {/* Column 2: Empty Spacer for desktop layout */}
        <div className="hidden md:block"></div>

        {/* Column 3: Social Media Icons */}
        <div className="socials">
          {socialImgs.map((img) => (
            <a 
              className="icon flex-center" 
              target="_blank" 
              rel="noopener noreferrer"
              href={img.url} 
              key={img.url}
            >
              {/* IMPORTANT: Add the alt text for accessibility */}
              <img src={img.imgPath} alt={img.alt} />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};