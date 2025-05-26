/** @format */

"use client";

import React from "react";
import logo from "@/utils/images/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-10 bg-transparent">
      <div className="flex justify-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={228} height={48} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
