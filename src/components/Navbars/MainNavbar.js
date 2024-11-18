"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import "./styles.css";
import { Anton } from "next/font/google";

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { VscChromeClose } from "react-icons/vsc";
import { SiDiscord, SiOpensea, SiX } from "react-icons/si";

import { usePathname } from "next/navigation";

const fontAnton = Anton({ subsets: ["latin"], weight: "400" });

const MainNavbar = () => {
  const path = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarClass = navbarOpen ? "open" : "closed";

  const toggleNavbar = (state) => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    setNavbarOpen(false);
  }, [path]);

  return (
    <>
      <header className="fixed top-0 z-50 w-screen bg-[var(--eggshell)]">
        <nav className="w-full md:absolute bg-[var(--eggshell)] border-b md:border-none px-2 md:px-16">
          <div className="container m-auto">
            <div className="flex flex-row flex-wrap items-center justify-between md:justify-evenly py-1 gap-6 md:py-4 md:gap-0 relative">
              <div className="md:flex-1">
                <Link href="/">
                  <h1
                    className={`${fontAnton.className} max-w-[550px] text-3xl`}
                  >
                    AYAMIVERSE
                  </h1>
                </Link>
              </div>

              <div className={`navbar-block md:flex-[3] ${navbarClass}`}>
                <div className="w-full md:w-auto md:pr-4 md:pt-0">
                  <ul className="tracking-wide text-xl md:text-sm flex-col flex md:flex-row gap-6 md:gap-5 *:border-b *:md:border-none">
                    <li className="">
                      <Link
                        href="/whitepaper"
                        className="block hover:bg-secondary-100 text-center py-2 md:px-4 transition-all duration-500 text-link"
                      >
                        <span>Whitepaper</span>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        target="_blank"
                        href="https://opensea.io"
                        className="block hover:bg-secondary-100 text-center py-2 md:px-4 transition-all duration-500 text-link"
                      >
                        <span>Collection</span>
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        href="/mint"
                        className="block hover:bg-secondary-100 text-center py-2 md:px-4 transition-all duration-500 text-link"
                      >
                        <span>Mint</span>
                      </Link>
                    </li>
                    <li className="w-full flex *:flex-1 border-none">
                      <Link
                        href="https://discord.com/app"
                        className="block hover:bg-secondary-100 text-center py-2 md:px-4 transition-all duration-500 text-link"
                      >
                        <span className="block pt-1">
                          <SiDiscord size={20} className="mx-auto md:hidden" />
                          <SiDiscord size={16} className="mx-auto hidden md:block" />
                        </span>
                      </Link>
                      <Link
                        href="https://x.com"
                        className="block hover:bg-secondary-100 text-center py-2 md:px-4 transition-all duration-500 text-link"
                      >
                        <span className="block pt-1">
                          <SiX size={20} className="mx-auto md:hidden" />
                          <SiX size={16} className="mx-auto hidden md:block" />
                        </span>
                      </Link>
                      <Link
                        href="https://opensea.io"
                        className="block hover:bg-secondary-100 text-center py-2 md:px-4 transition-all duration-500 text-link"
                      >
                        <span className="block pt-1">
                          <SiOpensea size={20} className="mx-auto md:hidden" />
                          <SiOpensea size={16} className="mx-auto hidden md:block" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:hidden px-3">
                <button
                  className="p-3 hover:bg-accent-50"
                  type="button"
                  onClick={toggleNavbar}
                >
                  {navbarOpen ? (
                    <VscChromeClose size={30} />
                  ) : (
                    <HiMiniBars3BottomRight size={30} />
                  )}
                </button>
              </div>

              <div className="hidden md:flex md:flex-1 items-center justify-end">
                <button>Connect Wallet</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default MainNavbar;
