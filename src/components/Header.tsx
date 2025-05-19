import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <>
        <header className="text-white body-font bg-zinc-900">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg> */}
              <span className="ml-3 text-xl">SO</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-300 flex flex-wrap items-center text-base justify-center">
              <Link href="/about" className="mr-5 hover:text-border/80">
                About Us
              </Link>
              <Link href="/blog" className="mr-5 hover:text-border/80">
                Blog
              </Link>
              <Link href="/products" className="mr-5 hover:text-border/80">
                Products
              </Link>
              {/* <a className="mr-5 hover:text-white">Fourth Link</a> */}
            </nav>
            <Link href={"/contact"}>
              <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none bg-black/40 rounded text-base mt-4 md:mt-0">
                Contact us
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </header>
      </>
    </div>
  );
};

export default Header;
