import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HomeTab from './components/HomeTab';
import ProjectsTab from './components/ProjectsTab';
import EvidenceTable from './components/EvidenceTable';
import RubricTable from './components/RubricTable';
import Summary from './components/Summary';
import { portfolioData } from './data/portfolioData';
import useScrollReveal from './hooks/useScrollReveal';

const tabTitles = {
  home: 'Overview / Tổng quan',
  projects: 'Assignments / Bài tập',
  evidence: 'Evidence / Minh chứng',
  rubric: 'Rubric / Tiêu chí',
  summary: 'Reflection / Tổng kết',
};

const navItems = [
  ['home', 'Overview'],
  ['projects', 'Assignments'],
  ['evidence', 'Evidence'],
  ['rubric', 'Rubric'],
  ['summary', 'Reflection'],
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  useScrollReveal(activeTab);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeTab setActiveTab={setActiveTab} />;
      case 'projects': return <ProjectsTab />;
      case 'evidence': return <EvidenceTable />;
      case 'rubric': return <RubricTable />;
      case 'summary': return <Summary />;
      default: return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="portfolio-app couture-bg relative min-h-screen text-charcoal selection:bg-sunflower-yellow selection:text-primary">
      {/* Fixed Background Ambient Glass Gradient Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      <header className="portfolio-topbar sticky top-0 z-40 px-4 py-3 sm:px-8 xl:px-[5vw]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <button type="button" onClick={() => setActiveTab('home')} className="group flex items-center gap-3 text-left transition-transform hover:-translate-y-0.5 active:scale-[0.99]">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white/60 shadow-[0_4px_16px_rgba(0,94,159,0.1)] backdrop-blur-xl transition-all group-hover:bg-white/90">
              <img src="/images.jpeg" alt="Logo cat avatar" className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="font-display text-3xl font-semibold tracking-[-0.02em] text-primary lg:text-4xl">Portfolio</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-secondary">{tabTitles[activeTab]}</p>
            </div>
          </button>

          <nav className="flex gap-1 overflow-x-auto rounded-2xl border border-white/80 bg-white/40 p-1.5 font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-primary/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_8px_24px_-12px_rgba(0,94,159,0.12)] backdrop-blur-2xl" aria-label="Portfolio sections">
            {navItems.map(([id, label]) => (
              <motion.button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                whileTap={{ scale: 0.97 }}
                className={`motion-nav-item whitespace-nowrap rounded-xl px-4 py-2 transition-all duration-200 hover:-translate-y-0.5 ${activeTab === id ? 'motion-nav-active bg-primary text-white shadow-[0_12px_28px_-10px_rgba(0,94,159,0.6)]' : 'hover:bg-white/60 hover:text-primary'}`}
              >
                {label}
              </motion.button>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 rounded-2xl border border-white/80 bg-white/45 px-4 py-2 text-xs font-semibold text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-xl xl:flex">
            <span className="h-2 w-2 rounded-full bg-secondary/80 animate-pulse" />
            <span>Academic Year {portfolioData.student.academicYear}</span>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          {renderContent()}
        </motion.main>
      </AnimatePresence>

      <footer className="site-footer border-t border-white/55 bg-glass-surface px-6 py-7 backdrop-blur-2xl sm:px-8 xl:px-[5vw]">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="editorial-label">Couture Academic Portfolio</p>
            <p className="mt-1 text-sm text-muted-dark">{portfolioData.student.name} · {portfolioData.student.shortUniversity}</p>
          </div>
          <p className="text-xs text-muted-dark">Academic Year {portfolioData.student.academicYear}</p>
        </div>
      </footer>
    </div>
  );
}
