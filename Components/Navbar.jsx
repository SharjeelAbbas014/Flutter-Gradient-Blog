import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div id="navbar">
      <Link href="/">
        <a>Flutter Gradient</a>
      </Link>
      <Link href="/posts">
        <a>Blog</a>
      </Link>
    </div>
  );
}
