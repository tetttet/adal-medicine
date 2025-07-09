"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef, useState, useCallback } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import DonationFormContext from "@/context/donationContext";
import { Donation } from "@/components/Home/Hero/Donation";
import { X } from "lucide-react";

const Header: React.FC = () => {
  const pathUrl = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  }, [navbarOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, handleClickOutside]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navbarOpen]);

  const info = useContext(DonationFormContext);

  useEffect(() => {}, []);

  const donationInfo = useContext(DonationFormContext);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        sticky
          ? "shadow-lg bg-white"
          : "shadow-none"
      }`}
    >
      <div className="sm:bg-linear-to-r bg-linear-to-l md:from-primary md:to-secondary lg:py-0 py-2 bg-white">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex items-center justify-between px-4">
          <div className="lg:hidden block">
            <Logo />
          </div>
          <nav className="hidden lg:flex grow items-center justify-start">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center space-x-4 relative top-[1px]">
            <button
              aria-label="Toggle theme"
              className="flex h-8 w-8 items-center justify-center text-body-color duration-300"
            >
              <svg
                viewBox="0 0 16 16"
                className={`hidden h-6 w-6 ${
                  !sticky && pathUrl === "/" && "text-white"
                }`}
              >
                <path
                  d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z"
                  fill="#FFFFFF"
                />
              </svg>
              <svg
                viewBox="0 0 23 23"
                className={`h-8 w-8 text-dark ${
                  !sticky && pathUrl === "/" && "text-white"
                }`}
              >
                <path d="M16.6111 15.855C17.591 15.1394 18.3151 14.1979 18.7723 13.1623C16.4824 13.4065 14.1342 12.4631 12.6795 10.4711C11.2248 8.47905 11.0409 5.95516 11.9705 3.84818C10.8449 3.9685 9.72768 4.37162 8.74781 5.08719C5.7759 7.25747 5.12529 11.4308 7.29558 14.4028C9.46586 17.3747 13.6392 18.0253 16.6111 15.855Z" />
              </svg>
            </button>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-midnight_text">
              Menu
            </h2>
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label="Close mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className=""
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
      <div className="">
        <div className="px-4 container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) sm:flex lg:justify-between justify-center py-5 hidden">
          <div className="lg:block hidden">
            <Logo />
          </div>
          <div className="flex items-center">
            <div className="flex gap-3 py-2 pr-6 border-r">
              <Image
                src="/images/icons/icon-mail.svg"
                alt="icon"
                width={32}
                height={32}
              />
              <div className="">
                <p className="text-sm font-normal text-muted mb-0">
                  Email us at
                </p>
                <Link
                  href="#"
                  className="text-base font-semibold mb-0 hover:text-primary"
                >
                  info@endeavor.com
                </Link>
              </div>
            </div>
            <div className="flex gap-3 py-2 pl-6">
              <Image
                src="/images/icons/icon-phone.svg"
                alt="icon"
                width={32}
                height={32}
              />
              <div className="">
                <p className="text-sm font-normal text-muted mb-0">
                  Call us now
                </p>
                <Link
                  href="#"
                  className="text-base font-semibold mb-0 hover:text-primary"
                >
                  703 (123) 4567
                </Link>
              </div>
            </div>
            <button
              onClick={() => info?.setIsDonationOpen(true)}
              className="text-error text-sm font-semibold border border-error py-4 px-7 rounded-md ml-8 hover:bg-error hover:text-white"
            >
              Donate now
            </button>
          </div>
        </div>
      </div>
      {/* Donation Popup */}
      {donationInfo?.isDonationOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50 m-0!">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg bg-white px-8 py-14 text-center">
            <button
              onClick={() => donationInfo?.setIsDonationOpen(false)}
              className=" hover:bg-gray-200 p-1 rounded-full absolute -top-5 -right-3 mr-8 mt-8"
              aria-label="Close Sign In Modal"
            >
              <X className="text-2xl" />
            </button>
            <Donation />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
