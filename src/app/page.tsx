// pages/index.js
"use client";
import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import logo from "@/app/images/logo.svg";
import Mainpage from "./components/main";
import styles from "@/app/components/css/styles.module.css";

const IndexPage = () => {
  const [showMainPage, setShowMainPage] = useState(false);
  const [typewriterLoaded, setTypewriterLoaded] = useState(false);

  useEffect(() => {
    import("typewriter-effect")
      .then(() => {
        setTypewriterLoaded(true);
      })
      .catch((error) => {
        console.error("Error importing Typewriter:", error);
      });

    setTimeout(() => {
      setShowMainPage(true);
    }, 8000); // 8000 milliseconds delay for demonstration
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-8">
        {!showMainPage && (
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={50}
            className="logo-animation"
          />
        )}
      </header>

      {!showMainPage && (
        <div className="text-3xl text-gray-800 font-bold">
          {typewriterLoaded && typeof window !== "undefined" && (
            <Typewriter
              options={{
                strings: ["HELLO WORLD WELCOME TO MY PORTFOLIO"],
                autoStart: true,
                loop: false,
                delay: 100,
              }}
            />
          )}
        </div>
      )}

      {showMainPage && (
        <div className="animate-fade-in">
          <Mainpage />
        </div>
      )}
    </div>
  );
};

export default IndexPage;
