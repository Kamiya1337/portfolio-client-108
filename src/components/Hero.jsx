import { ArrowRight, FileCheck2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const headline = ['Business Administration', '& Management', 'Digital Portfolio'];

export default function Hero({ student, setActiveTab }) {
  const reduceMotion = useReducedMotion();
  const wordVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.58, delay: reduceMotion ? 0 : index * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="section-anchor page-shell overflow-hidden pb-24 pt-14 md:pb-32 md:pt-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center xl:gap-12">
        <div className="reveal min-w-0 lg:col-span-7 xl:col-span-8">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/35 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl"
          >
            <Sparkles size={16} className="text-primary" />
            <p className="editorial-label">Overview / Tổng quan</p>
          </motion.div>

          <h1 className="max-w-[1030px] font-display text-[clamp(3.6rem,7.2vw,6.7rem)] font-medium leading-[0.92] tracking-[-0.02em] text-primary">
            {headline.map((line, index) => (
              <motion.span
                custom={index}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className={`block ${index === 1 ? 'italic text-secondary/90' : ''}`}
                key={line}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="my-10 flex origin-left items-center gap-5"
          >
            <span className="editorial-hairline flex-1" />
            <Sparkles size={22} className="shrink-0 text-primary" />
            <span className="editorial-hairline w-24" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="paper-plate relative max-w-3xl overflow-hidden p-8 sm:p-10"
          >
            {/* Subtle internal gradient accent */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-sunflower-yellow/20 via-primary/10 to-transparent blur-3xl" />

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-md">
              <Sparkles size={13} className="text-sunflower-yellow" />
              <span>Hồ sơ học tập số · Digital Portfolio</span>
            </div>

            <p className="max-w-2xl font-display text-3xl font-medium leading-[1.28] tracking-[-0.01em] text-charcoal sm:text-4xl">
              Portfolio môn <span className="font-semibold text-primary">Nhập môn Công nghệ số</span> và <span className="italic text-secondary">Ứng dụng Trí tuệ nhân tạo</span>.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => setActiveTab('projects')}
                className="group flex min-h-[52px] w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sunflower-yellow via-[#f5cb1a] to-[#e5b500] px-8 py-3.5 font-label text-[11px] font-bold uppercase tracking-[0.16em] text-primary shadow-[0_12px_30px_-8px_rgba(242,196,0,0.7)] transition-all duration-300 hover:shadow-[0_16px_36px_-6px_rgba(242,196,0,0.85)] sm:w-auto"
              >
                <span>Mục bài tập</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => setActiveTab('evidence')}
                className="group flex min-h-[52px] w-full items-center justify-center gap-3 rounded-2xl border border-white/90 bg-white/70 px-8 py-3.5 font-label text-[11px] font-bold uppercase tracking-[0.16em] text-primary shadow-[0_4px_20px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:bg-white/95 hover:shadow-[0_10px_28px_rgba(0,94,159,0.12)] sm:w-auto"
              >
                <span>Minh chứng</span>
                <FileCheck2 size={16} className="transition-transform group-hover:scale-110" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="paper-plate reveal min-w-0 p-4 lg:sticky lg:top-28 lg:col-span-5 xl:col-span-4"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-white/45" />
            <div className="image-frame aspect-[4/5] border border-white/50 bg-taupe">
              <img
                src="/avatar-dinh-thai-son.jpg"
                alt={`${student.name} portfolio owner`}
                className="h-full w-full object-cover object-center saturate-[1.04]"
              />
            </div>
          </motion.div>

          <div className="mt-10 space-y-7">
            <div>
              <p className="editorial-label">Portfolio Owner</p>
              <h2 className="mt-2 font-display text-4xl font-medium leading-tight tracking-[-0.01em] text-charcoal sm:text-5xl">{student.name}</h2>
            </div>
            <dl className="grid gap-6 border-t border-primary/10 pt-7">
              <div>
                <dt className="soft-label">Major</dt>
                <dd className="mt-2 text-sm font-semibold leading-6">{student.major}</dd>
              </div>
              <div>
                <dt className="soft-label">Institution</dt>
                <dd className="mt-2 text-sm font-semibold">{student.shortUniversity}</dd>
                <dd className="mt-1 text-xs leading-5 text-muted-dark">{student.university}</dd>
              </div>
              <div>
                <span className="dark-label-box">Batch {student.academicYear}</span>
              </div>
            </dl>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
