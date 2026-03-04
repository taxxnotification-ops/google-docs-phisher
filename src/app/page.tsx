"use client";

import { useState } from "react";

type Page = "doc" | "accounts" | "password";

function GoogleLogo() {
  return (
    <svg width="75" height="25" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#EA4335"
      />
      <path
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#FBBC05"
      />
      <path
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
        fill="#4285F4"
      />
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
      <path
        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
        fill="#EA4335"
      />
      <path
        d="M35.29 41.41V32H67c.32 1.64.49 3.58.49 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.03 9.66C16.32 69.35.36 53.89.36 35.17.36 16.44 16.32 1 35.1 1c10.42 0 17.83 4.08 23.41 9.41l-6.57 6.57c-4-3.78-9.41-6.72-16.84-6.72-13.77 0-24.52 11.09-24.52 24.86s10.75 24.86 24.52 24.86c8.92 0 14.02-3.61 17.3-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.41-.03z"
        fill="#4285F4"
      />
    </svg>
  );
}

function MiniBrowserWrapper({
  children,
  onBack,
}: {
  children: React.ReactNode;
  onBack: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-[420px] max-w-[95vw] overflow-hidden border border-gray-300">
        {/* Browser top bar */}
        <div className="bg-[#f1f3f4] border-b border-gray-300">
          <div className="flex items-center px-3 py-2 gap-2">
            {/* macOS-style traffic lights */}
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            </div>
            {/* Address bar */}
            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white border border-gray-300 rounded-full px-3 py-1 text-xs text-gray-600 flex items-center gap-1.5 min-w-[220px] justify-center shadow-sm">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5f6368"
                  strokeWidth="2.5"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <a
                  href="https://support.google.com/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                  style={{ textDecoration: "none" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  accounts.google.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white">{children}</div>

        {/* Browser bottom bar - back button only */}
        <div className="bg-[#f1f3f4] border-t border-gray-300 px-3 py-2 flex items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
            title="Go back"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            <span className="text-xs font-medium">Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [page, setPage] = useState<Page>("doc");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleNextPassword = () => {
    if (!password.trim()) {
      setPasswordError(true);
      return;
    }
    window.location.href = "https://support.google.com/?hl=en";
  };

  return (
    <main className="min-h-screen bg-white relative">
      {/* ===== PAGE 1: Google Docs Document ===== */}
      <div className="min-h-screen flex flex-col">
        {/* Google Docs top bar */}
        <div className="flex items-center px-4 py-2 border-b border-gray-200 bg-white gap-3 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            {/* Google Docs icon */}
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
              <path
                d="M30 4H10C7.8 4 6 5.8 6 8v32c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V18L30 4z"
                fill="#4285F4"
              />
              <path d="M30 4v14h14L30 4z" fill="#A8C7FA" />
              <rect x="14" y="24" width="20" height="2" rx="1" fill="white" />
              <rect x="14" y="29" width="20" height="2" rx="1" fill="white" />
              <rect x="14" y="34" width="14" height="2" rx="1" fill="white" />
            </svg>
            <div>
              <div className="text-sm font-medium text-gray-800 leading-tight">
                Allied Wells - Q4 Financial Report 2024
              </div>
              <div className="flex gap-3 text-xs text-gray-500 mt-0.5">
                <span className="hover:text-gray-700 cursor-pointer">File</span>
                <span className="hover:text-gray-700 cursor-pointer">Edit</span>
                <span className="hover:text-gray-700 cursor-pointer">View</span>
                <span className="hover:text-gray-700 cursor-pointer">Insert</span>
                <span className="hover:text-gray-700 cursor-pointer">Format</span>
                <span className="hover:text-gray-700 cursor-pointer">Tools</span>
              </div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full font-medium opacity-50 cursor-not-allowed">
              Share
            </button>
          </div>
        </div>

        {/* Document area */}
        <div className="flex-1 bg-[#f0f4f9] flex flex-col items-center py-8 relative">
          {/* Document page */}
          <div
            className="w-[816px] max-w-[calc(100vw-32px)] bg-white shadow-md relative"
            style={{ minHeight: "1056px" }}
          >
            {/* Blurred document content */}
            <div className="p-16 pt-20 select-none" style={{ filter: "blur(4px)" }}>
              <div className="text-2xl font-bold text-gray-800 mb-6">
                Allied Wells — Q4 Financial Report 2024
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Confidential — For Internal Use Only
              </div>
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="h-3 bg-gray-200 rounded mb-3"
                  style={{ width: `${70 + Math.sin(i * 1.3) * 25}%` }}
                />
              ))}
              <div className="mt-8 mb-4 text-lg font-semibold text-gray-700">
                Executive Summary
              </div>
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="h-3 bg-gray-200 rounded mb-3"
                  style={{ width: `${65 + Math.cos(i * 1.7) * 30}%` }}
                />
              ))}
            </div>

            {/* Lock overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70">
              <div className="flex flex-col items-center gap-3 p-8 text-center">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5f6368"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <p className="text-gray-800 text-xl font-medium">You need access</p>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                  Sign in with your Allied Wells account to view this document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sign in button - centered at bottom */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={() => setPage("accounts")}
          className="bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium px-10 py-3.5 rounded-md text-base shadow-lg transition-colors"
        >
          Sign in to view document
        </button>
      </div>

      {/* ===== POPUP: ACCOUNTS (Image 2) ===== */}
      {page === "accounts" && (
        <MiniBrowserWrapper onBack={() => setPage("doc")}>
          <div className="px-8 py-6 flex flex-col items-center">
            <GoogleLogo />

            <h2 className="text-2xl font-normal text-gray-800 mt-4 mb-1">Choose an account</h2>
            <p className="text-sm text-gray-600 mb-6">to continue to Google Docs</p>

            {/* Adams Santry account */}
            <div
              className="w-full border border-gray-300 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setPage("password")}
            >
              {/* Avatar: C with green background */}
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                A
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium text-gray-800">Adams Santry</span>
                <span className="text-xs text-gray-500 truncate">adamsantry@alliedwells.com</span>
              </div>
              <svg
                className="ml-auto flex-shrink-0 text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>

            <div className="w-full border-t border-gray-200 mt-6 pt-4">
              <p className="text-xs text-gray-500 text-center leading-relaxed">
                To continue, Google will share your name, email address, language preference, and
                profile picture with Google Docs.{" "}
                <a
                  href="https://support.google.com/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Learn more
                </a>
              </p>
            </div>

            <div className="flex gap-4 mt-4 text-xs text-blue-600">
              <a
                href="https://support.google.com/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Privacy Policy
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="https://support.google.com/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </MiniBrowserWrapper>
      )}

      {/* ===== POPUP: PASSWORD (Image 3) ===== */}
      {page === "password" && (
        <MiniBrowserWrapper onBack={() => setPage("accounts")}>
          <div className="px-8 py-6 flex flex-col items-center">
            <GoogleLogo />

            <h2 className="text-2xl font-normal text-gray-800 mt-4 mb-4">Welcome</h2>

            {/* Account chip */}
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 mb-6 cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-semibold">
                A
              </div>
              <span className="text-sm text-gray-700">adamsantry@alliedwells.com</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-500"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>

            {/* Password field */}
            <div className="w-full mb-1">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleNextPassword();
                }}
                className={`w-full border ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } rounded px-3 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500`}
              />
              {passwordError && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  Enter a password
                </p>
              )}
            </div>

            {/* Next button row */}
            <div className="w-full flex justify-end mt-6">
              <button
                onClick={handleNextPassword}
                className="bg-[#1a73e8] hover:bg-[#1557b0] text-white font-medium px-6 py-2 rounded text-sm transition-colors"
              >
                Next
              </button>
            </div>

            <div className="w-full border-t border-gray-200 mt-4 pt-4">
              <p className="text-xs text-gray-500 text-center">
                Not your computer? Use a Private Window to sign in.{" "}
                <a
                  href="https://support.google.com/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </MiniBrowserWrapper>
      )}
    </main>
  );
}
