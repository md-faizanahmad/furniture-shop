"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Chrome } from "lucide-react";

export default function AccountPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <main className="min-h-screen bg-[#F8F7F4] flex items-center justify-center p-6 pt-32">
      <div className="w-full max-w-md bg-white rounded-[3rem] p-10 md:p-12 shadow-2xl shadow-stone-200/50 border border-stone-100">
        {/* Toggle Headers */}
        <div className="flex justify-center gap-8 mb-12">
          {["login", "signup"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m as any)}
              className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-all relative pb-2 ${
                mode === m
                  ? "text-stone-900"
                  : "text-stone-300 hover:text-stone-500"
              }`}
            >
              {m === "login" ? "Sign In" : "Create Account"}
              {mode === m && (
                <motion.div
                  layoutId="authBar"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {mode === "signup" && (
                <AuthInput icon={User} type="text" placeholder="Full Name" />
              )}
              <AuthInput icon={Mail} type="email" placeholder="Email Address" />
              <AuthInput icon={Lock} type="password" placeholder="Password" />
            </div>

            <button className="w-full bg-stone-900 text-white py-5 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors">
              {mode === "login" ? "Continue" : "Register"}
            </button>

            <div className="relative py-4 flex items-center">
              <div className="grow border-t border-stone-100"></div>
              <span className="shrink mx-4 text-[10px] font-bold text-stone-300 uppercase">
                Or
              </span>
              <div className="grow border-t border-stone-100"></div>
            </div>

            <button className="w-full bg-white border border-stone-200 text-stone-600 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-stone-50 transition-colors flex items-center justify-center gap-3">
              <Chrome className="h-4 w-4" /> Sign in with Google
            </button>
          </motion.div>
        </AnimatePresence>

        <p className="mt-8 text-center text-[10px] text-stone-400 leading-relaxed uppercase tracking-widest">
          By continuing, you agree to our <br />
          <span className="text-stone-900 underline cursor-pointer">
            Terms of Service
          </span>
        </p>
      </div>
    </main>
  );
}

interface AuthInputProps {
  icon: React.ComponentType<{ className?: string }>;
  [key: string]: any;
}

function AuthInput({ icon: Icon, ...props }: AuthInputProps) {
  return (
    <div className="relative group">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-300 group-focus-within:text-stone-900 transition-colors" />
      <input
        {...props}
        className="w-full bg-stone-50 border-none rounded-2xl py-5 pl-12 pr-4 text-sm focus:ring-1 focus:ring-stone-200 transition-all placeholder:text-stone-300"
      />
    </div>
  );
}
