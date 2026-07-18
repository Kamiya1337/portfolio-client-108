import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AssignmentCard({ project, onSelect, featured = false }) {
  return (
    <article
      className={`reveal glass-panel hover-lift group flex flex-col p-6 sm:p-7 ${featured ? 'lg:col-span-7' : 'lg:col-span-5'}`}
    >
      <div className="mb-6 flex items-center justify-between gap-4 border-b border-primary/10 pb-4">
        <span className="dark-label-box bg-primary text-white">Assignment {String(project.id).padStart(2, '0')}</span>
        <span className="dark-label-box bg-white/80">{project.status}</span>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="soft-label">{project.chapter}</p>
          <h2 className="mt-3 font-display text-2xl font-medium leading-tight tracking-[-0.01em] text-primary transition-colors group-hover:italic sm:text-3xl">{project.title}</h2>
          <p className="mt-4 text-sm leading-7 text-secondary">{project.shortDesc}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.skills?.slice(0, 3).map((skill) => (
              <span key={skill} className="rounded-full border border-secondary/15 bg-secondary/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-secondary">{skill}</span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-primary/10 pt-5">
          {project.report ? (
            <a href={project.report} target="_blank" rel="noreferrer" className="card-resource-link">
              <FileText size={14} /> Báo cáo PDF
            </a>
          ) : (
            <span className="card-resource-link opacity-50">Đang cập nhật</span>
          )}
          <motion.button whileTap={{ scale: 0.98 }} type="button" onClick={() => onSelect(project)} className="button-primary w-full sm:w-auto">
            Chi tiết bài tập <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </article>
  );
}
