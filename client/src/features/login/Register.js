import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-red-300 text-coolGray-700">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-coolGray-700">
            Register to access your account
          </p>
        </div>
        <form
          novalidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label for="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 bg-red-300 text-coolGray-700"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  Password
                </label>
                <a
                  href="www.google.com"
                  className="text-xs hover:underline text-coolGray-700"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 bg-red-300 text-coolGray-700"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label for="password" className="text-sm">
                  OTP
                </label>
                <a
                  href="www.google.com"
                  className="text-xs hover:underline text-coolGray-700"
                >
                  Resend OTP
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-coolGray-700 bg-red-300 text-coolGray-700"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 rounded-md dark:bg-yellow-400 dark:text-coolGray-900"
                onClick={() => console.log("OTP Sent")}
              >
                Send OTP
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 rounded-md dark:bg-yellow-400 dark:text-coolGray-900"
                onClick={() => toast("OTP Verified")}
              >
                Verify OTP
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 rounded-md dark:bg-yellow-400 dark:text-coolGray-900"
              >
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-coolGray-400">
              Already have an account
              <Link
                to="/login"
                className="hover:underline dark:text-violet-400"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
