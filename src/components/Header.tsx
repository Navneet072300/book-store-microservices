"use client";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  const router = useRouter();

  const handleLogout = () => {};
  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="bg-black rounded-full flex items-center justify-between hover:opacity-75 transition"
          >
            <RxCaretLeft size={35} className="text-white" />
          </button>
          <button
            onClick={() => router.forward()}
            className="bg-black rounded-full flex items-center justify-between hover:opacity-75 transition"
          >
            <RxCaretRight size={35} className="text-white" />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 transition">
            <HiHome size={25} className="text-black " />
          </button>
          <button className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 transition">
            <BiSearch size={25} className="text-black " />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button onClick={() => {}} variant={"ghost"}>
                Sign up
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {}}
                className=" bg-white px-6 py-2 font-bold rounded-full disabled:cursor-not-allowed disabled:opacity-50 text-black hover:opacity-75 transition"
              >
                Log in
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
