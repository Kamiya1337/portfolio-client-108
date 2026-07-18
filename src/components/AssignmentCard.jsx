import { ArrowRight, ExternalLink, FileText, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const isAvailable = (value) => Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');

export default function AssignmentCard({ project, onSelect, featured = false }) {
  return (
    <article
      className={`reveal glass-panel hover-lift group flex flex-col p-5 sm:p-6 ${featured ? 'lg:col-span-7' : 'lg:col-span-5'}`}
    >
      <div className={`${featured ? 'image-frame aspect-[16/10]' : 'image-frame aspect-[4/3]'} mb-8 border border-white/50 bg-taupe`}>
        {isAvailable(project.evidenceImg) ? (
          <img
            src={project.evidenceImg}
            alt={`Minh chứng ${project.title}`}
            className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-dark"><ImageIcon size={30} /></div>
        )}
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="dark-label-box bg-primary text-white">Assignment {String(project.id).padStart(2, '0')}</span>
          <span className="dark-label-box bg-white/80">{project.status}</span>
        </div>
      </div>

      <div className="grid gap-7 md:grid-cols-[92px_1fr]">
        <div>
          <span className="font-display text-6xl font-semibold leading-none text-primary/20">{String(project.id).padStart(2, '0')}</span>
        </div>
        <div>
          <p className="soft-label">{project.chapter}</p>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-[-0.01em] text-primary transition-colors group-hover:italic sm:text-4xl">{project.title}</h2>
          <p className="mt-5 text-sm leading-7 text-secondary">{project.shortDesc}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.skills?.slice(0, 3).map((skill) => (
              <span key={skill} className="rounded-full border border-secondary/15 bg-secondary/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-secondary">{skill}</span>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {isAvailable(project.report) ? <a href={project.report} target="_blank" rel="noreferrer" className="card-resource-link"><FileText size={13} /> Report</a> : <span className="card-resource-link opacity-50">Report pending</span>}
            {isAvailable(project.driveLink) ? <a href={project.driveLink} target="_blank" rel="noreferrer" className="card-resource-link"><ExternalLink size={13} /> Drive</a> : <span className="card-resource-link opacity-50">Drive pending</span>}
          </div>
          <motion.button whileTap={{ scale: 0.98 }} type="button" onClick={() => onSelect(project)} className="button-primary mt-6 w-full sm:w-auto">
            View Case Study <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>
    </article>
  );
}
