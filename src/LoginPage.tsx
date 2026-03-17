import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Brain,
  ChartColumn,
  Rocket,
  Shield,
  CircleCheck,
  Mail,
  Lock,
  Eye,
  ArrowRight,
  ExternalLink,
  Zap,
} from 'lucide-react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Pre-calculate random values for particles to avoid hydration mismatches and impure function warnings
  const [particles] = useState(() => Array.from({ length: 20 }).map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 3}s`
  })));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt', { email, password });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-5000"></div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={style}
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 text-white space-y-8 animate-fade-in-left">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                alt="XSONE Logo"
                className="h-12 w-auto brightness-0 invert opacity-90"
                src="https://xerpredict.xsone.de/Logo_XSONE-removebg-300x97.png"
              />
            </div>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/90 to-cyan-600/90 px-6 py-3 rounded-full shadow-lg shadow-blue-500/30 animate-pulse-subtle backdrop-blur-sm border border-white/10">
              <Sparkles className="w-5 h-5 animate-spin-slow" aria-hidden="true" />
              <span className="text-sm font-semibold tracking-wide">
                🚀 NEXT-GEN AI ERP PLATFORM
              </span>
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent animate-fade-in leading-tight">
                xERPredict
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-200/90 animate-fade-in animation-delay-200 leading-relaxed max-w-xl">
                Prediction · Systemscan · AI — All-in-One ERP-Lösung
              </h2>
              <p className="text-lg sm:text-xl text-blue-200/80 max-w-lg animate-fade-in animation-delay-400 leading-relaxed">
                Die intelligenteste Prediction- &amp; Analyse-Plattform für SAP-Systeme. Transformieren Sie Rohdaten in strategische Entscheidungen.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 animate-fade-in animation-delay-500">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white">
                99.9%
              </div>
              <div className="text-xs text-blue-300/70 uppercase tracking-wider">
                Uptime-Garantie
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-white">
                1M+
              </div>
              <div className="text-xs text-blue-300/70 uppercase tracking-wider">
                Datensätze/Tag
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl animate-fade-in animation-delay-600">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 flex items-center gap-2">
                    KI-Prognosen<span className="text-[10px] bg-blue-500/30 px-2 py-0.5 rounded-full text-blue-300">NEU</span>
                  </h3>
                  <p className="text-sm text-blue-200/70">Machine Learning für präzise Vorhersagen</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                  <ChartColumn className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Echtzeit-Reports</h3>
                  <p className="text-sm text-blue-200/70">Live-Daten direkt aus SAP</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Blitzschnell</h3>
                  <p className="text-sm text-blue-200/70">Abfragen in unter 100ms</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Enterprise Security</h3>
                  <p className="text-sm text-blue-200/70">DSGVO-konform &amp; verschlüsselt</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 animate-fade-in animation-delay-700">
            <div className="flex items-center gap-2 text-emerald-400 text-sm">
              <CircleCheck className="w-4 h-4" aria-hidden="true" />
              <span>SAP-kompatibles KI-Modell</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 text-sm">
              <CircleCheck className="w-4 h-4" aria-hidden="true" />
              <span>DSGVO-konform &amp; verschlüsselt</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 text-sm">
              <CircleCheck className="w-4 h-4" aria-hidden="true" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-auto lg:min-w-[460px] animate-fade-in-right">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 p-6 sm:p-8 hover:shadow-blue-500/20 transition-shadow duration-500">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Willkommen zurück</h3>
                <p className="text-blue-200/70">Melden Sie sich an, um fortzufahren</p>
              </div>
              <button
                className="group flex items-center gap-1.5 px-2 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all duration-150 cursor-pointer"
                title="Switch to English"
              >
                <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">Sprache:</span>
                <span className="overflow-hidden rounded-[3px] shadow-sm ring-1 ring-black/10 dark:ring-white/15 group-hover:ring-2 group-hover:ring-blue-400/60 transition-all">
                  <svg className="w-7 h-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                    <rect width="640" height="160" fill="#000"></rect>
                    <rect y="160" width="640" height="160" fill="#D00"></rect>
                    <rect y="320" width="640" height="160" fill="#FFCE00"></rect>
                  </svg>
                </span>
              </button>
            </div>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">E-Mail-Adresse</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
                    <Mail className="w-5 h-5 text-blue-400 group-focus-within:text-cyan-400 transition-colors" aria-hidden="true" />
                  </div>
                  <input
                    placeholder="ihre.email@unternehmen.de"
                    required
                    className="w-full pl-12 pr-4 py-3.5 text-base bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-white/90">Passwort</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="w-5 h-5 text-blue-400 group-focus-within:text-cyan-400 transition-colors" aria-hidden="true" />
                  </div>
                  <input
                    placeholder="••••••••"
                    required
                    className="w-full pl-12 pr-12 py-3.5 text-base bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-blue-400 hover:text-cyan-400 transition-colors">
                    <Eye className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input className="w-4 h-4 rounded border-white/20 bg-white/5 text-blue-600 focus:ring-blue-500/50 focus:ring-offset-0 cursor-pointer" type="checkbox" />
                  <span className="text-sm text-blue-200/70 group-hover:text-blue-200 transition-colors">Angemeldet bleiben</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-4 text-base bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group relative overflow-hidden transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <span>Jetzt starten</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-blue-200/50">oder</span>
                </div>
              </div>
              
              <button type="button" className="w-full py-3 text-sm bg-white/5 hover:bg-white/10 text-blue-200 font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>Demo anfordern</span>
              </button>
              
              <button type="button" className="w-full py-3.5 text-sm bg-white/5 hover:bg-white/10 text-blue-200 font-medium rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 group">
                <Rocket className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                <span>Warum xERPredict?</span>
                <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-3">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 flex items-center gap-6 text-sm text-blue-200/70 animate-fade-in animation-delay-1000">
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
            System Online
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:flex items-center gap-1">
            <Zap className="w-3 h-3 text-yellow-400" aria-hidden="true" />
            Latenz: 12ms
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">🔒 256-bit SSL</span>
        </div>
        <a
          href="https://xsone.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-200/50 text-xs sm:text-sm flex items-center gap-2 hover:text-blue-200/70 transition-colors"
        >
          <span>Powered by</span>
          <span className="font-semibold text-blue-200/70 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300">
            XS.One
          </span>
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
