import React from 'react';
import { useNavigate } from 'react-router-dom';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      
      <div
        className="min-h-screen bg-slate-50 dark:bg-slate-900"
        style={{"fontFamily":"&quot"}}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap"
          rel="stylesheet"
        />
        <aside
          className="fixed left-0 top-0 h-screen bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 z-50 flex flex-col select-none -translate-x-full md:translate-x-0"
          style={{"width":"256px"}}
        >
          <div
            className="p-3 border-b border-slate-100 dark:border-slate-800 flex-shrink-0 overflow-hidden"
          >
            <div className="flex items-center justify-between min-h-[40px]">
              <div className="flex items-center gap-2 overflow-hidden">
                <img
                  alt="XSONE Logo"
                  className="h-8 w-auto brightness-0 dark:brightness-0 dark:invert flex-shrink-0"
                  src="/Logo_XSONE-removebg-300x97.png"
                /><span
                  className="text-slate-300 dark:text-slate-600 font-light text-lg flex-shrink-0"
                  >×</span
                ><img
                  alt="Organization Logo"
                  className="h-8 w-auto max-w-[70px] object-contain brightness-0 dark:brightness-0 dark:invert flex-shrink-0"
                  src="https://apixerpredict.xsone.de/api/auth/organizations/df011705-ddf2-4ee1-a642-7676c7dacf31/logo"
                />
              </div>
              <button
                className="md:hidden p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex-shrink-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x w-4 h-4 text-slate-500 dark:text-slate-400"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          <nav
            className="flex-1 p-2 space-y-0.5 overflow-y-auto overflow-x-hidden scrollbar-thin"
          >
            <div>
              <button
                title="xERPredict" onClick={() => navigate("/dashboard")}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all group relative overflow-hidden text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layout-dashboard w-[18px] h-[18px] flex-shrink-0"
                  aria-hidden="true"
                >
                  <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                  <rect width="7" height="5" x="3" y="16" rx="1"></rect></svg
                ><span
                  className="font-medium text-[13px] flex-1 text-left truncate whitespace-nowrap"
                  >xERPredict</span
                >
              </button>
            </div>
            <div>
              <button
                title="AI Discovery" onClick={() => navigate("/ai-discovery")}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all group relative overflow-hidden text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles w-[18px] h-[18px] flex-shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
                  ></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle></svg
                ><span
                  className="font-medium text-[13px] flex-1 text-left truncate whitespace-nowrap"
                  >AI Discovery</span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-up w-3.5 h-3.5 flex-shrink-0 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </button>
              <div
                className="mt-0.5 ml-4 space-y-0.5 border-l-2 border-slate-200 dark:border-slate-700 pl-3"
              >
                <div>
                  <button
                    className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-all text-[13px] text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-800 dark:hover:text-slate-200"
                  >
                    <span className="flex-1 text-left truncate"
                      >Usecase Discovery Engine</span
                    >
                  </button>
                </div>
                <div>
                  <button
                    className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-all text-[13px] text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-800 dark:hover:text-slate-200"
                  >
                    <span className="flex-1 text-left truncate">Showcases</span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down w-3 h-3 flex-shrink-0 opacity-40"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button
                title="BI Analytics Engine" onClick={() => navigate("/bi-analytics")}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all group relative overflow-hidden text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chart-column w-[18px] h-[18px] flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path></svg
                ><span
                  className="font-medium text-[13px] flex-1 text-left truncate whitespace-nowrap"
                  >BI Analytics Engine</span
                >
              </button>
            </div>
            <div>
              <button
                title="Einstellungen" onClick={() => navigate("/settings")}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all group relative overflow-hidden bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-settings w-[18px] h-[18px] flex-shrink-0"
                  aria-hidden="true"
                >
                  <path
                    d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle></svg
                ><span
                  className="font-medium text-[13px] flex-1 text-left truncate whitespace-nowrap"
                  >Einstellungen</span
                >
              </button>
            </div>
          </nav>
          <div
            className="p-2 border-t border-slate-100 dark:border-slate-800 flex-shrink-0 space-y-0.5"
          >
            <button
              title="Abmelden"
              className="w-full flex items-center gap-2.5 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-all overflow-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-log-out w-[18px] h-[18px] flex-shrink-0"
                aria-hidden="true"
              >
                <path d="m16 17 5-5-5-5"></path>
                <path d="M21 12H9"></path>
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg
              ><span className="font-medium text-[13px] truncate whitespace-nowrap"
                >Abmelden</span
              ></button
            ><button
              title="Sidebar einklappen"
              className="hidden md:flex w-full items-center gap-2.5 px-3 py-2 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg transition-all overflow-hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left w-[18px] h-[18px] flex-shrink-0"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6"></path></svg
              ><span className="font-medium text-[13px] truncate whitespace-nowrap"
                >Einklappen</span
              >
            </button>
          </div>
          <div
            className="hidden md:flex absolute right-0 top-0 bottom-0 w-[5px] cursor-col-resize items-center justify-center group z-[60] hover:bg-blue-500/10 active:bg-blue-500/20 transition-colors"
          >
            <div
              className="w-[3px] h-8 rounded-full bg-slate-300/0 group-hover:bg-blue-500/60 group-active:bg-blue-500 transition-all"
            ></div>
          </div>
        </aside>
        <main
          className="transition-[margin] duration-100 ml-0 md:!ml-[var(--sidebar-w)]"
          style={{ "--sidebar-w": "256px" } as React.CSSProperties}
        >
          <header
            className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu w-5 h-5 text-slate-700 dark:text-slate-200"
                    aria-hidden="true"
                  >
                    <path d="M4 5h16"></path>
                    <path d="M4 12h16"></path>
                    <path d="M4 19h16"></path>
                  </svg>
                </button>
                <div>
                  <h1
                    className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400"
                  >
                    Einstellungen
                  </h1>
                  <p
                    className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1"
                  >
                    API-Konfiguration und System-Einstellungen
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="hidden md:flex items-center gap-3">
                  <span className="text-lg font-bold text-slate-800 dark:text-white"
                    >xERPredict</span
                  ><span
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-lg"
                    >v1.3.1</span
                  >
                </div>
                <button
                  className="group flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all duration-150 cursor-pointer"
                  title="Switch to English"
                >
                  <span
                    className="text-[11px] font-medium text-slate-400 dark:text-slate-500"
                    >Sprache:</span
                  ><span
                    className="overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/10 dark:ring-white/15 group-hover:ring-2 group-hover:ring-blue-400/60 transition-all"
                    ><svg
                      className="w-7 h-5"
                      viewBox="0 0 640 480"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="640" height="160" fill="#000"></rect>
                      <rect y="160" width="640" height="160" fill="#D00"></rect>
                      <rect
                        y="320"
                        width="640"
                        height="160"
                        fill="#FFCE00"
                      ></rect></svg
                  ></span></button
                ><button
                  className="p-1.5 sm:p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
                  title="Zum dunklen Modus wechseln"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-moon w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-100"
                    aria-hidden="true"
                  >
                    <path
                      d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
                    ></path>
                  </svg>
                </button>
                <div
                  className="hidden md:flex items-center gap-3 pl-2 sm:pl-4 border-l border-slate-200 dark:border-slate-700"
                >
                  <div
                    className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-sm text-slate-500 dark:text-slate-400"
                      >Organisation:</span
                    ><span
                      className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                      >Quatelio</span
                    >
                  </div>
                </div>
                <div
                  className="relative flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-slate-200 dark:border-slate-700"
                >
                  <button
                    className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer"
                  >
                    <div className="text-right hidden sm:block">
                      <p
                        className="font-semibold text-sm text-slate-800 dark:text-white"
                      >
                        Quatelio User
                      </p>
                      <span
                        className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                        >Benutzer</span
                      >
                    </div>
                    <div
                      className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md"
                    >
                      Q
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down w-4 h-4 text-slate-400 transition-transform"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <div className="p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <div
                className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-2xl p-8 text-white relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
                ></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-settings w-7 h-7"
                        aria-hidden="true"
                      >
                        <path
                          d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
                        ></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold">Einstellungen</h1>
                      <p className="text-blue-100 text-sm mt-0.5">
                        Dein Profil und Einstellungen
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-shield w-3.5 h-3.5"
                        aria-hidden="true"
                      >
                        <path
                          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        ></path></svg
                      >user
                    </div>
                    <div
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail w-3.5 h-3.5"
                        aria-hidden="true"
                      >
                        <path
                          d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
                        ></path>
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          rx="2"
                        ></rect></svg
                      >quatelio@xerpredict.com
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div
                  className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-6 border-b border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="w-18 h-18 min-w-[4.5rem] min-h-[4.5rem] rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-blue-500/20"
                    >
                      Q
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h2
                          className="text-xl font-bold text-gray-900 dark:text-white truncate"
                        >
                          Quatelio User
                        </h2>
                        <span
                          className="px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                          >user</span
                        >
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        quatelio@xerpredict.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                  >
                    <div
                      className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700/50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mail w-4 h-4 text-blue-500"
                          aria-hidden="true"
                        >
                          <path
                            d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
                          ></path>
                          <rect
                            x="2"
                            y="4"
                            width="20"
                            height="16"
                            rx="2"
                          ></rect></svg
                        ><span
                          className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >E-Mail</span
                        >
                      </div>
                      <p
                        className="text-sm text-gray-900 dark:text-white font-medium truncate"
                      >
                        quatelio@xerpredict.com
                      </p>
                    </div>
                    <div
                      className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700/50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-building2 lucide-building-2 w-4 h-4 text-emerald-500"
                          aria-hidden="true"
                        >
                          <path d="M10 12h4"></path>
                          <path d="M10 8h4"></path>
                          <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                          <path
                            d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"
                          ></path>
                          <path
                            d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"
                          ></path></svg
                        ><span
                          className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >Organisation</span
                        >
                      </div>
                      <p
                        className="text-sm text-gray-900 dark:text-white font-medium"
                      >
                        Quatelio
                      </p>
                    </div>
                    <div
                      className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700/50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-shield w-4 h-4 text-amber-500"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                          ></path></svg
                        ><span
                          className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >Rolle</span
                        >
                      </div>
                      <p
                        className="text-sm text-gray-900 dark:text-white font-medium capitalize"
                      >
                        user
                      </p>
                    </div>
                    <div
                      className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700/50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-shield w-4 h-4 text-purple-500"
                          aria-hidden="true"
                        >
                          <path
                            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                          ></path></svg
                        ><span
                          className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >User Type</span
                        >
                      </div>
                      <p
                        className="text-sm text-gray-900 dark:text-white font-medium capitalize"
                      >
                        user
                      </p>
                    </div>
                    <div
                      className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-100 dark:border-gray-700/50"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-user w-4 h-4 text-gray-400"
                          aria-hidden="true"
                        >
                          <path
                            d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                          ></path>
                          <circle cx="12" cy="7" r="4"></circle></svg
                        ><span
                          className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                          >User ID</span
                        >
                      </div>
                      <p
                        className="text-sm text-gray-900 dark:text-white font-medium font-mono text-xs"
                      >
                        5e33f889-2f3...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div
                  className="px-6 py-4 border-b border-gray-100 dark:border-gray-700"
                >
                  <h2
                    className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-image w-5 h-5 text-blue-500"
                      aria-hidden="true"
                    >
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="3"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path
                        d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
                      ></path></svg
                    >Anzeige
                  </h2>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-sm font-medium text-gray-900 dark:text-white"
                          >Logo anzeigen</span
                        ><span
                          className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                          >Logo sichtbar</span
                        >
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Logo oben links in der Navigation ein- oder ausblenden.
                        Wenn ausgeblendet, wird stattdessen "xERPredict" als
                        Text angezeigt.
                      </p>
                    </div>
                    <button
                      className="relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 bg-blue-600"
                    >
                      <span
                        className="pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out translate-x-5"
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="fixed bottom-6 right-6 z-50">
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div
              className="absolute w-20 h-20 rounded-full border-2 border-blue-500/50 animate-ping"
            ></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-blue-500/30 animate-pulse"
            ></div>
          </div>
          <button className="relative group">
            <div className="relative">
              <div
                className="absolute inset-0 bg-blue-700 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"
              ></div>
              <div
                className="absolute -inset-1 bg-blue-700 rounded-full opacity-75 group-hover:opacity-100 blur animate-spin-slow"
                style={{"animation":"3s linear 0s infinite normal none running spin"}}
              ></div>
              <div
                className="relative w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center shadow-2xl shadow-blue-700/50 group-hover:scale-110 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle w-8 h-8 text-white group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                >
                  <path
                    d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"
                  ></path>
                </svg>
                <div
                  className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center animate-bounce"
                >
                  <span className="text-[10px] font-bold text-white">!</span>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles absolute -top-3 -right-3 w-5 h-5 text-yellow-400 animate-ping"
                  aria-hidden="true"
                >
                  <path
                    d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
                  ></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle></svg
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles absolute -bottom-2 -left-3 w-4 h-4 text-cyan-400 animate-ping"
                  aria-hidden="true"
                  style={{"animationDelay":"0.5s"}}
                >
                  <path
                    d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
                  ></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle></svg
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap absolute -top-1 -left-3 w-4 h-4 text-blue-400 animate-pulse"
                  aria-hidden="true"
                >
                  <path
                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                  ></path>
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    
    </>
  );
};

export default SettingsPage;
