"use client";

import type React from "react";
import { useState } from "react";
import { useUser, type User } from "@/components/user-context";
import BGV from "@/assets/bgv.png"; // Assuming BGV is the orange/blue logo
import Image from "next/image";
// Importing the specific, recognizable social icons
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa"; 

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [isSignUp, setIsSignUp] = useState(false); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [rememberMe, setRememberMe] = useState(false); 
  const { setUser } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulated login/signup
    setTimeout(() => {
      const newUser: User = {
        id: `user_${Date.now()}`,
        name: isSignUp ? name : "Evan Yates",
        email: email,
        role: isAdmin ? "admin" : "user", 
      };
      setUser(newUser);
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  // SOCIAL BUTTONS COMPONENT with stylized icons
  const SocialButtons = () => (
    <div className="flex justify-center space-x-3">
      {/* Google Button - Using multiple colored text shadows (simulated) 
          or just a distinct border/color to mimic the multicolor logo */}
      <button
        type="button"
        // Use a slight shadow and primary colors for the icon itself
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Sign in with Google"
      >
        {/* We can't use real multi-color icons, so we use the standard icon 
            and apply the blue color, which is a key Google brand color. */}
        <FaGoogle className="w-5 h-5 text-blue-500" /> 
        {/* To simulate the colorful look, you could use a complex, non-Tailwind
            styling solution, but for Tailwind simplicity, we focus on the blue.
            If you want a truly multi-color 'G', you must use a custom SVG/Image component, 
            which is outside the scope of simple Tailwind class styling. */}
      </button>

      {/* LinkedIn Button - Blue background to resemble the brand color field */}
      <button
        type="button"
        className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-blue-700 shadow-md hover:bg-blue-800 transition-colors"
        aria-label="Sign in with LinkedIn"
      >
        <FaLinkedinIn className="w-5 h-5" />
      </button>
    </div>
  );

  return (
    // Minimized vertical padding and fixed height for smaller footprint
    <div className="flex justify-center items-center p-4 bg-gray-50 h-screen overflow-hidden">
      <div className="w-full max-w-sm md:max-w-md">

        {/* MAIN SIGN IN CARD - Reduced internal space */}
        <div className="bg-white rounded-3xl shadow-2xl p-5 border border-gray-100">

          {/* LOGO & TITLE SECTION */}
          <div className="text-center mb-4">
            <div className="w-10 h-10 mx-auto mb-1">
              <Image
                src={BGV}
                alt="BlueGrid Ventures Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-base font-semibold text-[#006A7C]">
              BlueGrid Ventures
            </h1>
            <h2 className="text-2xl font-bold text-gray-800">
              Sign In
            </h2>
          </div>

          {/* SOCIAL LOGIN BUTTONS (Now with more visually distinct icons) */}
          <SocialButtons />

          {/* OR SEPARATOR */}
          <div className="text-center text-xs text-gray-500 my-3">
            or use your email for registration:
          </div>

          {/* Reduced spacing between form elements */}
          <form onSubmit={handleSubmit} className="space-y-3"> 
            {/* Conditional Name Input for Signup */}
            {isSignUp && (
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 text-gray-700 text-sm"
                  required={isSignUp}
                />
              </div>
            )}

            {/* Email Input */}
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 text-gray-700 text-sm"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-gray-500 text-gray-700 text-sm"
                required
              />
            </div>

            {/* Admin Checkbox */}
            <div className="flex items-center p-2.5 bg-blue-50 rounded-xl border border-blue-200">
              <input
                type="checkbox"
                id="admin-toggle"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500"
              />
              <label htmlFor="admin-toggle" className="ml-2 text-sm text-gray-700 font-medium cursor-pointer">
                Login as Admin
              </label>
            </div>

            {/* "Remember me" and "Forgot password" links */}
            {!isSignUp && (
                <div className="flex items-center justify-between pt-1">
                    <label className="flex items-center gap-1">
                        <input 
                            type="checkbox" 
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 text-teal-600 bg-gray-100 rounded border-gray-300 focus:ring-teal-500" 
                        />
                        <span className="text-xs text-slate-600">Remember me</span>
                    </label>
                    <a href="#" className="text-xs text-teal-600 hover:text-teal-700 font-medium">
                        Forgot password?
                    </a>
                </div>
            )}

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2.5 rounded-xl transition-all disabled:opacity-70 mt-4 shadow-lg shadow-teal-200"
            >
              {isLoading ? "Processing..." : isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

        </div> 
        {/* End of main card */}

        {/* SWITCH SIGN IN / SIGN UP */}
        <p className="text-center text-slate-600 text-xs mt-3">
          {isSignUp ? (
            <>
              Already have an account? 
              <button
                onClick={() => setIsSignUp(false)}
                className="text-teal-600 hover:text-teal-700 font-semibold ml-1"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              Don't have an account? 
              <button
                onClick={() => setIsSignUp(true)}
                className="text-teal-600 hover:text-teal-700 font-semibold ml-1"
              >
                Sign Up
              </button>
            </>
          )}
        </p>

      </div>
    </div>
  );
}