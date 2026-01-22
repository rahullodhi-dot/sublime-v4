import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../assets/images/Logo1.png';
import FacebookIcon from '../assets/images/facebook.png';
import InstaIcon from '../assets/images/insta.png';
import EmailIcon from '../assets/images/mail2.png';
import PhoneIcon from '../assets/images/phone2.png';
import LocationIcon from '../assets/images/lc2.png';
import DarkLogo from '../assets/images/newWhiteLogo.png';
import tokri from "../assets/images/tokri.png"
import Tealeaf from "../assets/images/TealLeaf.png"

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B524D] text-gray-900  overflow-hidden">
      <div className="mx-auto relative max-w-[1600px] px-4 py-10 sm:px-6 sm:py-12 lg:px-12 lg:py-10 xl:px-10">
        {/* <div className='absolute left-0 opacity-10'>
          <img src={tokri} alt="" />
        </div>
         <div className='absolute right-0 -top-20 opacity-20'>
          <img src={Tealeaf} alt="" />
        </div> */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info - Left Column */}
          <div className="space-y-4 lg:col-span-1">
            {/* Logo */}
            <Link
              to="/"
              className="inline-block transition-opacity hover:opacity-80"
              aria-label="Sublime House Tea - Home"
            >
              <img
                src={DarkLogo}
                alt="Sublime House Tea Logo"
                className="h-32 w-auto sm:h-24 object-contain"
              />
            </Link>

            {/* Company Description */}
            <p style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,

              fontSize: '15px',
              lineHeight: '130%',
              letterSpacing: '0%',
            }} className="text-karla font-light  leading-[30px] text-[#F6F1E8] mt-3 sm:mt-4">
              Sublime House of Tea is more than just a cup of tea, a jar of honey, or a spice. Founded in 2013, Sublime is an attempt to bring freshness, superior quality, and authenticity to our daily lives.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 sm:mt-6">
              <Link
                to="/contact"
                className="flex items-center  rounded py-3 px-4 bg-[#F6F1E8]  text-[#9A7522] justify-center gap-2 font-karla font-light text-[18px] leading-[30px] text-[#1A302A] capitalize  hover:border-[#316763] transition-all active:scale-95"
                style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                <svg className="h-4 w-4" fill="none" stroke="#9A7522" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Locate Us
              </Link>
              <Link
                to="/products?category=gifting"
                className="flex items-center py-3 px-4 border bg-[#F6F1E8] rounded justify-center gap-2 font-karla font-light text-[18px] leading-[30px] text-[#9A7522] capitalize   hover:border-[#316763] transition-all active:scale-95"
                style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '15px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                Gifting
              </Link>
            </div>

            {/* Horizontal Line */}
            <div className="">
              {/* Social Media Icons */}
              <div className="flex items-center gap-3 sm:gap-3">
                <a
                  href="https://www.facebook.com/sublimehouse"
                  aria-label="Facebook"
                  className="transition-opacity hover:opacity-70 "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_563_1537)">
                      <mask id="mask0_563_1537" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <path d="M0 0H24V24H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_563_1537)">
                        <path d="M12 0C5.373 0 0 5.373 0 12C0 18.016 4.432 22.984 10.207 23.852V15.18H7.237V12.025H10.207V9.927C10.207 6.452 11.9 4.927 14.787 4.927C16.171 4.927 16.902 5.029 17.249 5.076V7.829H15.279C14.053 7.829 13.624 8.992 13.624 10.302V12.026H17.218L16.73 15.181H13.624V23.877C19.481 23.083 24 18.075 24 12C24 5.373 18.627 0 12 0Z" fill="#FFF2E0" />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_563_1537">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/sublimehouse"
                  aria-label="Instagram"
                  className="transition-opacity  text-[#f6f1e8]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M15.1987 2.3335C16.5112 2.337 17.1774 2.344 17.7525 2.36033L17.9789 2.3685C18.2402 2.37783 18.498 2.3895 18.8095 2.4035C20.0509 2.46183 20.8979 2.65783 21.641 2.946C22.411 3.24233 23.0597 3.64366 23.7084 4.29116C24.3018 4.87418 24.7609 5.57971 25.0535 6.3585C25.3417 7.10166 25.5377 7.94866 25.596 9.19116C25.61 9.5015 25.6217 9.75933 25.631 10.0218L25.638 10.2482C25.6555 10.8222 25.6625 11.4883 25.6649 12.8008L25.666 13.6712V15.1995C25.6689 16.0505 25.6599 16.9014 25.6392 17.7522L25.6322 17.9785C25.6229 18.241 25.6112 18.4988 25.5972 18.8092C25.5389 20.0517 25.3405 20.8975 25.0535 21.6418C24.7609 22.4206 24.3018 23.1261 23.7084 23.7092C23.1253 24.3026 22.4198 24.7617 21.641 25.0543C20.8979 25.3425 20.0509 25.5385 18.8095 25.5968L17.9789 25.6318L17.7525 25.6388C17.1774 25.6552 16.5112 25.6633 15.1987 25.6657L14.3284 25.6668H12.8012C11.9498 25.6698 11.0985 25.6609 10.2474 25.64L10.021 25.633C9.74407 25.6225 9.46718 25.6105 9.19036 25.5968C7.94903 25.5385 7.10203 25.3425 6.35769 25.0543C5.57933 24.7616 4.87421 24.3025 4.29153 23.7092C3.69763 23.1263 3.23816 22.4207 2.94519 21.6418C2.65703 20.8987 2.46103 20.0517 2.40269 18.8092L2.36769 17.9785L2.36186 17.7522C2.34036 16.9014 2.33063 16.0505 2.33269 15.1995V12.8008C2.32947 11.9499 2.33802 11.0989 2.35836 10.2482L2.36653 10.0218C2.37586 9.75933 2.38753 9.5015 2.40153 9.19116C2.45986 7.94866 2.65586 7.10283 2.94403 6.3585C3.23767 5.57939 3.69796 4.87384 4.29269 4.29116C4.87504 3.69797 5.57975 3.23892 6.35769 2.946C7.10203 2.65783 7.94786 2.46183 9.19036 2.4035C9.50069 2.3895 9.7597 2.37783 10.021 2.3685L10.2474 2.3615C11.0981 2.34077 11.9491 2.33182 12.8 2.33466L15.1987 2.3335ZM13.9994 8.16683C12.4523 8.16683 10.9685 8.78141 9.87457 9.87537C8.78061 10.9693 8.16603 12.4531 8.16603 14.0002C8.16603 15.5473 8.78061 17.031 9.87457 18.125C10.9685 19.2189 12.4523 19.8335 13.9994 19.8335C15.5465 19.8335 17.0302 19.2189 18.1242 18.125C19.2181 17.031 19.8327 15.5473 19.8327 14.0002C19.8327 12.4531 19.2181 10.9693 18.1242 9.87537C17.0302 8.78141 15.5465 8.16683 13.9994 8.16683ZM13.9994 10.5002C14.459 10.5001 14.9141 10.5905 15.3388 10.7664C15.7635 10.9422 16.1493 11.1999 16.4744 11.5249C16.7995 11.8498 17.0573 12.2356 17.2333 12.6602C17.4093 13.0848 17.4999 13.54 17.4999 13.9996C17.5 14.4592 17.4096 14.9143 17.2337 15.339C17.0579 15.7637 16.8002 16.1496 16.4752 16.4746C16.1503 16.7997 15.7645 17.0576 15.3399 17.2335C14.9153 17.4095 14.4602 17.5001 14.0005 17.5002C13.0723 17.5002 12.182 17.1314 11.5257 16.475C10.8693 15.8187 10.5005 14.9284 10.5005 14.0002C10.5005 13.0719 10.8693 12.1817 11.5257 11.5253C12.182 10.8689 13.0723 10.5002 14.0005 10.5002M20.1255 6.41683C19.7388 6.41683 19.3678 6.57047 19.0943 6.84397C18.8208 7.11746 18.6672 7.48839 18.6672 7.87516C18.6672 8.26194 18.8208 8.63287 19.0943 8.90636C19.3678 9.17985 19.7388 9.3335 20.1255 9.3335C20.5123 9.3335 20.8832 9.17985 21.1567 8.90636C21.4302 8.63287 21.5839 8.26194 21.5839 7.87516C21.5839 7.48839 21.4302 7.11746 21.1567 6.84397C20.8832 6.57047 20.5123 6.41683 20.1255 6.41683Z" fill="#FFF2E0" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Discover Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,

              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="text-lora font-semibold text-base leading-[30px] text-[#F6F1E8] uppercase tracking-wide">DISCOVER</h4>
            <ul className="space-y-2 sm:space-y-6">
              <li style={{
                fontFamily: "'gotham2', sans-serif",
                fontWeight: 100,

                fontSize: '18px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}>
                <Link style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/faq" className="  text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
                  FAQ
                </Link>
              </li>
              <li style={{
                fontFamily: "'gotham2', sans-serif",
                fontWeight: 100,

                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}>
                <Link style={{
                  fontFamily: "'gotham', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/about" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
                  About US
                </Link>
              </li>
              <li style={{
                fontFamily: "'gotham2', sans-serif",
                fontWeight: 100,

                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}>
                <Link style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/legal/disclaimer" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li style={{
                fontFamily: "'gotham2', sans-serif",
                fontWeight: 100,

                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}>
                <Link style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/blogs" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
                  Blog
                </Link>
              </li>
              <li style={{
                fontFamily: "'gotham2', sans-serif",
                fontWeight: 100,

                fontSize: '12px',
                lineHeight: '100%',
                letterSpacing: '0%',
              }}>
                <Link style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/contact" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Center Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 style={{
              fontFamily: "'gotham', sans-serif",
              fontWeight: 100,

              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="text-lora font-semibold text-base leading-[30px] text-[#f6f1e8] uppercase tracking-wide">HELP CENTER</h4>
            <ul className="space-y-2 sm:space-y-1">
              <li>
                <Link style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/returns" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
                  Return &amp; Refund
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/privacy-policy" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
                  Privacy &amp; Policy
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/terms-of-service" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/brochure" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
                  Brochure
                </Link>
              </li>
              <li>
                <Link style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} to="/tracking" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div className="space-y-3 sm:space-y-4">
            <h4 style={{
              fontFamily: "'gotham', sans-serif",
              fontWeight: 100,

              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="text-lora font-semibold text-base leading-[30px] text-[#f6f1e8] uppercase tracking-wide">ADDRESS</h4>
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M11.5 7C12.163 7 12.7989 7.26339 13.2678 7.73223C13.7366 8.20107 14 8.83696 14 9.5C14 9.8283 13.9353 10.1534 13.8097 10.4567C13.6841 10.76 13.4999 11.0356 13.2678 11.2678C13.0356 11.4999 12.76 11.6841 12.4567 11.8097C12.1534 11.9353 11.8283 12 11.5 12C10.837 12 10.2011 11.7366 9.73223 11.2678C9.26339 10.7989 9 10.163 9 9.5C9 8.83696 9.26339 8.20107 9.73223 7.73223C10.2011 7.26339 10.837 7 11.5 7ZM11.5 8C11.1022 8 10.7206 8.15804 10.4393 8.43934C10.158 8.72064 10 9.10218 10 9.5C10 9.89782 10.158 10.2794 10.4393 10.5607C10.7206 10.842 11.1022 11 11.5 11C11.8978 11 12.2794 10.842 12.5607 10.5607C12.842 10.2794 13 9.89782 13 9.5C13 9.10218 12.842 8.72064 12.5607 8.43934C12.2794 8.15804 11.8978 8 11.5 8ZM6.8 12.36L11.5 20.09L16.2 12.36C16.71 11.5 17 10.55 17 9.5C17 8.04131 16.4205 6.64236 15.3891 5.61091C14.3576 4.57946 12.9587 4 11.5 4C10.0413 4 8.64236 4.57946 7.61091 5.61091C6.57946 6.64236 6 8.04131 6 9.5C6 10.55 6.29 11.5 6.8 12.36ZM17.05 12.88L11.5 22L5.95 12.88C5.35 11.89 5 10.74 5 9.5C5 7.77609 5.68482 6.12279 6.90381 4.90381C8.12279 3.68482 9.77609 3 11.5 3C13.2239 3 14.8772 3.68482 16.0962 4.90381C17.3152 6.12279 18 7.77609 18 9.5C18 10.74 17.65 11.89 17.05 12.88Z" fill="#F6F1E8" />
                </svg>
                <p style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,
                  fontSize: '12px',
                  lineHeight: '130%',
                  letterSpacing: '0%',
                }} className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8]">Prestige Falcon Towers, 19, Brunton Road, Bengaluru 560025</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M16.04 19.506C13.2575 18.7925 10.7179 17.3445 8.68671 15.3133C6.65555 13.2821 5.20749 10.7425 4.494 7.96C3.949 5.819 5.79 4 8 4L9 4C9.552 4 9.995 4.449 10.05 4.998C10.1405 5.9084 10.3555 6.80207 10.689 7.654L9.169 9.174C10.3554 11.6489 12.3511 13.6446 14.826 14.831L16.346 13.311C17.1979 13.6448 18.0916 13.8602 19.002 13.951C19.552 14.005 20 14.448 20 15L20 16C20 18.21 18.181 20.051 16.04 19.506Z" stroke="#F6F1E8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <a style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} href="tel:08069496126" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors">
                  +91 9035827204
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4.616 19C4.15533 19 3.771 18.846 3.463 18.538C3.155 18.23 3.00067 17.8453 3 17.384V6.616C3 6.15533 3.15433 5.771 3.463 5.463C3.77167 5.155 4.15567 5.00067 4.615 5H19.385C19.845 5 20.229 5.15433 20.537 5.463C20.845 5.77167 20.9993 6.156 21 6.616V17.385C21 17.845 20.8457 18.2293 20.537 18.538C20.2283 18.8467 19.8443 19.0007 19.385 19H4.616ZM12 12.116L4 6.885V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.436 18 4.616 18H19.385C19.5643 18 19.7117 17.9423 19.827 17.827C19.9423 17.7117 20 17.564 20 17.384V6.884L12 12.116ZM12 11L19.692 6H4.308L12 11ZM4 6.885V6V17.385C4 17.5643 4.05767 17.7117 4.173 17.827C4.28833 17.9423 4.436 18 4.616 18H4V6.885Z" fill="#F6F1E8" />
                </svg>
                <a style={{
                  fontFamily: "'gotham2', sans-serif",
                  fontWeight: 100,

                  fontSize: '12px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }} href="mailto:mohammed.maqsood@sublime.in" className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] hover:text-[#316763] transition-colors break-all">
                  mohammed.maqsood@sublime.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* #FFFEF1 */}
        {/* Bottom Copyright Bar */}
        <div className="mt-8 sm:mt-10 lg:mt-3 border-t border-[#316763] pt-4 sm:pt-6">
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <p style={{
              fontFamily: "'gotham2', sans-serif",
              fontWeight: 100,

              fontSize: '12px',
              lineHeight: '100%',
              letterSpacing: '0%',
            }} className="text-karla font-light text-[17px] leading-[30px] text-[#F6F1E8] text-center">© {currentYear} Sublime House of Tea | All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Red Circular */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-10 w-10 sm:h-12 sm:w-12 bg-[#9a7522] text-white rounded-full shadow-lg hover:bg-[#b83d3d] transition-all hover:scale-110 active:scale-95 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
