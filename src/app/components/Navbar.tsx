"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
const Navbar = () => {
  return (
    <nav className="h-24 flex items-center justify-between">
      {/* Left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600">
          BK SOCIAL
        </Link>
      </div>
      {/* Center */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* Links  */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="Home page"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>HomePage</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt="Friends page"
              width={16}
              height={16}
              className="w-4 h-4 "
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt="Stories page"
              width={16}
              height={16}
              className="w-4 h-4 "
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
          <Image
            src="/search.png"
            alt="search icon"
            width={14}
            height={14}
            className="w-4 h-4"
          />
        </div>
      </div>
      {/* Right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image
                src="/people.png"
                alt="people icon"
                width={24}
                height={24}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/messages.png"
                alt="messages icon"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notifications.png"
                alt="notification icon"
                width={20}
                height={20}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/login.png" alt="login icon" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
