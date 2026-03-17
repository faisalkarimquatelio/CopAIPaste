import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X,
  LayoutDashboard,
  Sparkles,
  ChevronDown,
  ChartColumn,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
  Moon,
  Building2,
  Mail,
  Server,
  CircleCheck,
  Database,
  CircleX,
  FileSpreadsheet,
  Users,
  Workflow,
  Lightbulb,
  ArrowRight,
  ShieldCheck,
  Play,
  Download,
  Zap,
  Bot,
  MessageCircle,
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-white dark:bg-slate-900 border-r border-slate-200/80 dark:border-slate-800 z-50 flex flex-col select-none transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        style={{ width: '256px' }}
      >
        <div className="p-3 border-b border-slate-100 dark:border-slate-800 flex-shrink-0 overflow-hidden">
          <div className="flex items-center justify-between min-h-[40px]">
            <div className="flex items-center gap-2 overflow-hidden">
              <img
                alt="XSONE Logo"
                className="h-8 w-auto brightness-0 dark:brightness-0 dark:invert flex-shrink-0"
                src="https://xerpredict.xsone.de/Logo_XSONE-removebg-300x97.png"
              />
              <span className="text-slate-300 dark:text-slate-600 font-light text-lg flex-shrink-0">×</span>
              <img
                alt="Organization Logo"
                className="h-8 w-auto max-w-[70px] object-contain brightness-0 dark:brightness-0 dark:invert flex-shrink-0"
                src="https://apixerpredict.xsone.de/api/auth/organizations/df011705-ddf2-4ee1-a642-7676c7dacf31/logo"
              />
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </button>
          </div>
        </div>

        <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto overflow-x-hidden scrollbar-thin">
          <div>
            <button
              title="xERPredict" onClick={() => navigate("/dashboard")}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all group relative overflow-hidden bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-sm"
            >
              <LayoutDashboard className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="font-medium text-[13px] flex-1 text-left truncate whitespace-nowrap">xERPredict</span>
            </button>
          </div>
          <div>
            <button
              title="AI Discovery" onClick={() => navigate("/ai-discovery")}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all group relative overflow-hidden text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            >
              <Sparkles className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="font-medium text-[13px] flex-1 text-left truncate whitespace-nowrap">AI Discovery</span>
              <ChevronDown className="w-3.5 h-3.5 flex-shrink-0 opacity-50" />
            </button>
          </div>
          <div>
            <button
              title="BI Analytics Engine" onClick={() => navigate("/bi-analytics")}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all group relative overflow-hidden text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            >
              <ChartColumn className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="font-medium text-[13px] flex-1 text-left truncate whitespace-nowrap">BI Analytics Engine</span>
            </button>
          </div>
          <div>
            <button
              title="Einstellungen" onClick={() => navigate("/settings")}
              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all group relative overflow-hidden text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
            >
              <Settings className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="font-medium text-[13px] flex-1 text-left truncate whitespace-nowrap">Einstellungen</span>
            </button>
          </div>
        </nav>

        <div className="p-2 border-t border-slate-100 dark:border-slate-800 flex-shrink-0 space-y-0.5">
          <button
            title="Abmelden"
            className="w-full flex items-center gap-2.5 px-3 py-2 text-slate-500 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-all overflow-hidden"
          >
            <LogOut className="w-[18px] h-[18px] flex-shrink-0" />
            <span className="font-medium text-[13px] truncate whitespace-nowrap">Abmelden</span>
          </button>
          <button
            title="Sidebar einklappen"
            className="hidden md:flex w-full items-center gap-2.5 px-3 py-2 text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300 rounded-lg transition-all overflow-hidden"
          >
            <ChevronLeft className="w-[18px] h-[18px] flex-shrink-0" />
            <span className="font-medium text-[13px] truncate whitespace-nowrap">Einklappen</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="transition-[margin] duration-100 ml-0 md:ml-[256px]">
        {/* Header */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <Menu className="w-5 h-5 text-slate-700 dark:text-slate-200" />
              </button>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
                  xERPredict
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 sm:mt-1">
                  Übersicht und Statistiken
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden md:flex items-center gap-3">
                <span className="text-lg font-bold text-slate-800 dark:text-white">xERPredict</span>
                <span className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-lg">
                  v1.3.1
                </span>
              </div>
              <button className="group flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all duration-150 cursor-pointer">
                <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">Sprache:</span>
                <span className="overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/10 dark:ring-white/15 group-hover:ring-2 group-hover:ring-blue-400/60 transition-all">
                  <svg className="w-7 h-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                    <rect width="640" height="160" fill="#000"></rect>
                    <rect y="160" width="640" height="160" fill="#D00"></rect>
                    <rect y="320" width="640" height="160" fill="#FFCE00"></rect>
                  </svg>
                </span>
              </button>
              <button className="p-1.5 sm:p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-100" />
              </button>
              <div className="hidden md:flex items-center gap-3 pl-2 sm:pl-4 border-l border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Organisation:</span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Quatelio</span>
                </div>
              </div>
              <div className="relative flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-l border-slate-200 dark:border-slate-700">
                <button className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity cursor-pointer">
                  <div className="text-right hidden sm:block">
                    <p className="font-semibold text-sm text-slate-800 dark:text-white">Quatelio User</p>
                    <span className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                      Benutzer
                    </span>
                  </div>
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                    Q
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6 hover:border-blue-400/50 transition-all">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
                        Q
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Guten Tag, willkommen zurück!</p>
                      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Quatelio User</h2>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-blue-500" />
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Quatelio</span>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700">
                          Benutzer
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-xs text-slate-400">quatelio@xerpredict.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:items-end">
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-700 dark:text-green-400">System Online</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5" />
                        <span>API verbunden</span>
                        <CircleCheck className="w-3 h-3 text-green-500" />
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Database className="w-3.5 h-3.5" />
                        <span>SAP-Verbindung</span>
                        <CircleX className="w-3 h-3 text-slate-300 dark:text-slate-600" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                      <FileSpreadsheet className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-800 dark:text-white">50+</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Use Cases</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                      <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-800 dark:text-white">50+</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">SAP-Tabellen</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                      <ChartColumn className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-800 dark:text-white">10k+</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Analysen</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                      <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-800 dark:text-white">5</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Bereiche</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-violet-500/5 to-emerald-500/5 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-amber-500 to-rose-600 rounded-xl shadow-lg">
                      <Workflow className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white">xerpredict Engine Pipeline</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Der End-to-End Prozess von der Idee zur Handlungsempfehlung
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="w-full text-left p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 shadow-sm">
                          <Lightbulb className="w-4.5 h-4.5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Schritt 1</p>
                          <p className="text-sm font-bold text-amber-600 dark:text-amber-400 truncate">Use-Case Discovery</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        KI-gestützt passende Use Cases finden und Machbarkeit prüfen
                      </p>
                    </div>
                    <div className="hidden lg:flex absolute top-1/2 -right-2 z-10 -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative">
                    <div className="w-full text-left p-4 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-600 shadow-sm">
                          <ShieldCheck className="w-4.5 h-4.5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Schritt 2</p>
                          <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 truncate">System Readiness</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        SAP-Verbindung, Datenqualität und Feature-Verfügbarkeit prüfen
                      </p>
                    </div>
                    <div className="hidden lg:flex absolute top-1/2 -right-2 z-10 -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative">
                    <div className="w-full text-left p-4 rounded-xl bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-600 shadow-sm">
                          <Play className="w-4.5 h-4.5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Schritt 3</p>
                          <p className="text-sm font-bold text-violet-600 dark:text-violet-400 truncate">Use-Case Run</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        Training, Prediction, Driver-Analyse und What-If Szenarien
                      </p>
                    </div>
                    <div className="hidden lg:flex absolute top-1/2 -right-2 z-10 -translate-y-1/2">
                      <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600" />
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative">
                    <div className="w-full text-left p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-600 shadow-sm">
                          <Download className="w-4.5 h-4.5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Schritt 4</p>
                          <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 truncate">Export &amp; Ergebnis</p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        CSV, PDF-Reports, REST-API und SAP-Rückschreibung
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Engine Layer – Intelligenz auf der Pipeline
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 border-rose-200 dark:border-rose-700 transition-all">
                      <Zap className="w-3.5 h-3.5" /> Decision Engine
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 border-sky-200 dark:border-sky-700 transition-all">
                      <ChartColumn className="w-3.5 h-3.5" /> BI Analytics
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300 border-fuchsia-200 dark:border-fuchsia-700 transition-all">
                      <Bot className="w-3.5 h-3.5" /> Agent Processing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-20 h-20 rounded-full border-2 border-blue-500/50 animate-ping"></div>
          <div className="absolute w-24 h-24 rounded-full border border-blue-500/30 animate-pulse"></div>
        </div>
        <button className="relative group cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-700 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"></div>
            <div className="absolute -inset-1 bg-blue-700 rounded-full opacity-75 group-hover:opacity-100 blur animate-spin-slow"></div>
            <div className="relative w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center shadow-2xl shadow-blue-700/50 group-hover:scale-110 transition-all duration-300">
              <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center animate-bounce">
                <span className="text-[10px] font-bold text-white">!</span>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <Sparkles className="absolute -top-3 -right-3 w-5 h-5 text-yellow-400 animate-ping" />
              <Sparkles className="absolute -bottom-2 -left-3 w-4 h-4 text-cyan-400 animate-ping" style={{ animationDelay: '0.5s' }} />
              <Zap className="absolute -top-1 -left-3 w-4 h-4 text-blue-400 animate-pulse" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
