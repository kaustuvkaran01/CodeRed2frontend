import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Link to="/login">
        <p className="text-2xl">Login</p>
      </Link>
      <Link to="/register">
        <p className="text-2xl">Register</p>
      </Link>
    </div>
  );
}
