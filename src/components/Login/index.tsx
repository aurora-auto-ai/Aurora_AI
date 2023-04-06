"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
export default function Login() {
  return (
    <div className="bg-[#11A37f] h-screen flex flex-col items-center justify-center">
      <Image
        src={"https://links.papareact.com/2i6"}
        height={500}
        width={500}
        alt="logo"
      />
      <button
        className="animate-pulse text-white font-bold md:text-3xl text-4xl"
        onClick={() => signIn("google")}
      >
        Sign In to use the Chat
      </button>
    </div>
  );
}
