import React from 'react';
import { useNavigate } from 'react-router-dom';

const AiDiscoveryPage: React.FC = () => {
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
                    xERPredict
                  </h1>
                  <p
                    className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1"
                  >
                    Übersicht und Statistiken
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
              <div className="relative group">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"
                ></div>
                <div
                  className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6 hover:border-blue-400/50 transition-all"
                >
                  <div
                    className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div
                          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg flex items-center justify-center text-white text-2xl font-bold"
                        >
                          Q
                        </div>
                        <div
                          className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"
                        ></div>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Guten Tag, willkommen zurück!
                        </p>
                        <h2
                          className="text-2xl font-bold text-slate-800 dark:text-white"
                        >
                          Quatelio User
                        </h2>
                        <div className="flex items-center gap-3 mt-2 flex-wrap">
                          <div className="flex items-center gap-1.5">
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
                              className="lucide lucide-building2 lucide-building-2 w-3.5 h-3.5 text-blue-500"
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
                              className="text-sm font-medium text-blue-600 dark:text-blue-400"
                              >Quatelio</span
                            >
                          </div>
                          <span
                            className="text-xs font-semibold px-2.5 py-0.5 rounded-full border bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                            >Benutzer</span
                          >
                        </div>
                        <div className="flex items-center gap-1.5 mt-1.5">
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
                            className="lucide lucide-mail w-3.5 h-3.5 text-slate-400"
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
                          ><span className="text-xs text-slate-400"
                            >quatelio@xerpredict.com</span
                          >
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 lg:items-end">
                      <div
                        className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800"
                      >
                        <div
                          className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                        ></div>
                        <span
                          className="text-sm font-medium text-green-700 dark:text-green-400"
                          >System Online</span
                        >
                      </div>
                      <div
                        className="flex items-center gap-4 text-xs text-slate-400"
                      >
                        <div className="flex items-center gap-1.5">
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
                            className="lucide lucide-server w-3.5 h-3.5"
                            aria-hidden="true"
                          >
                            <rect
                              width="20"
                              height="8"
                              x="2"
                              y="2"
                              rx="2"
                              ry="2"
                            ></rect>
                            <rect
                              width="20"
                              height="8"
                              x="2"
                              y="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="6" x2="6.01" y1="6" y2="6"></line>
                            <line x1="6" x2="6.01" y1="18" y2="18"></line></svg
                          ><span>API verbunden</span
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
                            className="lucide lucide-circle-check w-3 h-3 text-green-500"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <div className="flex items-center gap-1.5">
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
                            className="lucide lucide-database w-3.5 h-3.5"
                            aria-hidden="true"
                          >
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                            <path d="M3 12A9 3 0 0 0 21 12"></path></svg
                          ><span>SAP-Verbindung</span
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
                            className="lucide lucide-circle-x w-3 h-3 text-slate-300 dark:text-slate-600"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m15 9-6 6"></path>
                            <path d="m9 9 6 6"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                    <div
                      className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                      <div
                        className="p-2.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg"
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
                          className="lucide lucide-file-spreadsheet w-5 h-5 text-blue-600 dark:text-blue-400"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
                          ></path>
                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                          <path d="M8 13h2"></path>
                          <path d="M14 13h2"></path>
                          <path d="M8 17h2"></path>
                          <path d="M14 17h2"></path>
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-2xl font-bold text-slate-800 dark:text-white"
                        >
                          50+
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Use Cases
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                      <div
                        className="p-2.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg"
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
                          className="lucide lucide-database w-5 h-5 text-blue-600 dark:text-blue-400"
                          aria-hidden="true"
                        >
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                          <path d="M3 12A9 3 0 0 0 21 12"></path>
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-2xl font-bold text-slate-800 dark:text-white"
                        >
                          50+
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          SAP-Tabellen
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                      <div
                        className="p-2.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg"
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
                          className="lucide lucide-chart-column w-5 h-5 text-blue-600 dark:text-blue-400"
                          aria-hidden="true"
                        >
                          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path>
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-2xl font-bold text-slate-800 dark:text-white"
                        >
                          10k+
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Analysen
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                      <div
                        className="p-2.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg"
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
                          className="lucide lucide-users w-5 h-5 text-blue-600 dark:text-blue-400"
                          aria-hidden="true"
                        >
                          <path
                            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                          ></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                      </div>
                      <div>
                        <p
                          className="text-2xl font-bold text-slate-800 dark:text-white"
                        >
                          5
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Bereiche
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-violet-500/5 to-emerald-500/5 rounded-2xl blur-xl"
                ></div>
                <div
                  className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-3 bg-gradient-to-br from-amber-500 to-rose-600 rounded-xl shadow-lg"
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
                          className="lucide lucide-workflow w-6 h-6 text-white"
                          aria-hidden="true"
                        >
                          <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                          <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                          <rect
                            width="8"
                            height="8"
                            x="13"
                            y="13"
                            rx="2"
                          ></rect>
                        </svg>
                      </div>
                      <div>
                        <h3
                          className="text-lg font-bold text-slate-800 dark:text-white"
                        >
                          xerpredict Engine Pipeline
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Der End-to-End Prozess von der Idee zur
                          Handlungsempfehlung
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                  >
                    <div className="relative">
                      <div
                        className="w-full text-left p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 shadow-sm"
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
                              className="lucide lucide-lightbulb w-4.5 h-4.5 text-white"
                              aria-hidden="true"
                            >
                              <path
                                d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
                              ></path>
                              <path d="M9 18h6"></path>
                              <path d="M10 22h4"></path>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-[10px] font-bold uppercase tracking-wider text-slate-400"
                            >
                              Schritt 1
                            </p>
                            <p
                              className="text-sm font-bold text-amber-600 dark:text-amber-400 truncate"
                            >
                              Use-Case Discovery
                            </p>
                          </div>
                        </div>
                        <p
                          className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                        >
                          KI-gestützt passende Use Cases finden und Machbarkeit
                          prüfen
                        </p>
                      </div>
                      <div
                        className="hidden lg:flex absolute top-1/2 -right-2 z-10 -translate-y-1/2"
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
                          className="lucide lucide-arrow-right w-4 h-4 text-slate-300 dark:text-slate-600"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        className="w-full text-left p-4 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-600 shadow-sm"
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
                              className="lucide lucide-shield-check w-4.5 h-4.5 text-white"
                              aria-hidden="true"
                            >
                              <path
                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                              ></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-[10px] font-bold uppercase tracking-wider text-slate-400"
                            >
                              Schritt 2
                            </p>
                            <p
                              className="text-sm font-bold text-cyan-600 dark:text-cyan-400 truncate"
                            >
                              System Readiness
                            </p>
                          </div>
                        </div>
                        <p
                          className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                        >
                          SAP-Verbindung, Datenqualität und
                          Feature-Verfügbarkeit prüfen
                        </p>
                      </div>
                      <div
                        className="hidden lg:flex absolute top-1/2 -right-2 z-10 -translate-y-1/2"
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
                          className="lucide lucide-arrow-right w-4 h-4 text-slate-300 dark:text-slate-600"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        className="w-full text-left p-4 rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-600 shadow-sm"
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
                              className="lucide lucide-play w-4.5 h-4.5 text-white"
                              aria-hidden="true"
                            >
                              <path
                                d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"
                              ></path>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-[10px] font-bold uppercase tracking-wider text-slate-400"
                            >
                              Schritt 3
                            </p>
                            <p
                              className="text-sm font-bold text-violet-600 dark:text-violet-400 truncate"
                            >
                              Use-Case Run
                            </p>
                          </div>
                        </div>
                        <p
                          className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                        >
                          Training, Prediction, Driver-Analyse und What-If
                          Szenarien
                        </p>
                      </div>
                      <div
                        className="hidden lg:flex absolute top-1/2 -right-2 z-10 -translate-y-1/2"
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
                          className="lucide lucide-arrow-right w-4 h-4 text-slate-300 dark:text-slate-600"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        className="w-full text-left p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-600 shadow-sm"
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
                              className="lucide lucide-download w-4.5 h-4.5 text-white"
                              aria-hidden="true"
                            >
                              <path d="M12 15V3"></path>
                              <path
                                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                              ></path>
                              <path d="m7 10 5 5 5-5"></path>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-[10px] font-bold uppercase tracking-wider text-slate-400"
                            >
                              Schritt 4
                            </p>
                            <p
                              className="text-sm font-bold text-emerald-600 dark:text-emerald-400 truncate"
                            >
                              Export &amp; Ergebnis
                            </p>
                          </div>
                        </div>
                        <p
                          className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed"
                        >
                          CSV, PDF-Reports, REST-API und SAP-Rückschreibung
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="mt-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                  >
                    <p
                      className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2"
                    >
                      Engine Layer – Intelligenz auf der Pipeline
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 border-rose-200 dark:border-rose-700 transition-all"
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
                          className="lucide lucide-zap w-3.5 h-3.5"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                          ></path></svg
                        >Decision Engine
                      </div>
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 border-sky-200 dark:border-sky-700 transition-all"
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
                          className="lucide lucide-chart-column w-3.5 h-3.5"
                          aria-hidden="true"
                        >
                          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path></svg
                        >BI Analytics
                      </div>
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300 border-fuchsia-200 dark:border-fuchsia-700 transition-all"
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
                          className="lucide lucide-bot w-3.5 h-3.5"
                          aria-hidden="true"
                        >
                          <path d="M12 8V4H8"></path>
                          <rect
                            width="16"
                            height="12"
                            x="4"
                            y="8"
                            rx="2"
                          ></rect>
                          <path d="M2 14h2"></path>
                          <path d="M20 14h2"></path>
                          <path d="M15 13v2"></path>
                          <path d="M9 13v2"></path></svg
                        >Agent Processing
                      </div>
                    </div>
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

export default AiDiscoveryPage;
