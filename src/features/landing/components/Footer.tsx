import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { navLinks } from '../../../data/navigationData';
import { t } from 'i18next';

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        {navLinks.map((link) => {
          return (
            <a key={link.href} href={link.href} className="link link-hover">
              {t(link.text)}
            </a>
          );
        })}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-6">
          <div className="flex gap-2 items-center text-base">
            <span className="">
              <FaPhoneAlt />
            </span>
            <span className="">+1234567890</span>
          </div>
          <div className="flex gap-2 items-center text-base">
            <span className="">
              <MdEmail />
            </span>
            <span className="">hospital@ 81.com</span>
          </div>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
}

export default Footer
