import { ArrowLeft, ExternalLink, FileText, Image as ImageIcon } from 'lucide-react';
import PreviewModal from './PreviewModal';

function EvidenceItem({ icon: Icon, label, value, type, onPreview }) {
  const isPending = !value || value === 'Sẽ cập nhật sau';
  const isNotRequired = value === 'Không yêu cầu';
  return (
    <div className="glass-panel hover-lift-subtle flex min-h-44 flex-col p-6 hover:bg-white/60">
      <Icon size={22} strokeWidth={1.5} className="text-primary" />
      <p className="mt-6 font-display text-2xl font-medium text-primary">{label}</p>
      <div className="mt-auto pt-6">
        {isPending && <span className="status-muted">Sẽ cập nhật sau</span>}
        {isNotRequired && <span className="status-muted">Không yêu cầu</span>}
        {!isPending && !isNotRequired && type === 'drive' && <a href={value} target="_blank" rel="noreferrer" className="button-secondary">Mở Google Drive <ExternalLink size={14} /></a>}
        {!isPending && !isNotRequired && type !== 'drive' && <a href={value} onClick={(event) => onPreview(event, value, type)} className="button-secondary">Xem {type === 'pdf' ? 'báo cáo' : 'hình ảnh'} <ExternalLink size={14} /></a>}
      </div>
    </div>
  );
}

export default function AssignmentDetail({ project, onBack, previewData, onPreview, onClosePreview }) {
  return (
    <div className="min-h-screen px-5 py-10 sm:px-8 xl:px-[5vw] xl:py-16">
      <PreviewModal previewData={previewData} onClose={onClosePreview} />

      <button type="button" onClick={onBack} className="button-secondary"><ArrowLeft size={17} /> Quay lại danh sách</button>
      <article className="paper-plate reveal mx-auto mt-10 max-w-[1280px] overflow-hidden">
        <header className="grid gap-8 border-b border-white/50 p-7 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-3">
            <p className="washi-tape">Assignment {String(project.id).padStart(2, '0')}</p>
            <p className="mt-5 text-sm text-secondary">{project.chapter}</p>
          </div>
          <div className="lg:col-span-8">
            <h1 className="font-display text-[clamp(3rem,6vw,5.8rem)] font-bold leading-[0.96] tracking-[-0.025em] text-primary">{project.title}</h1>
            <p className="mt-7 max-w-3xl text-base italic leading-8 text-secondary">{project.shortDesc}</p>
          </div>
        </header>
        <div className="grid gap-px bg-primary/10 lg:grid-cols-2">
          <section className="bg-white/25 p-7 backdrop-blur-xl lg:p-10">
            <p className="editorial-label">Mục tiêu nhiệm vụ</p>
            <p className="mt-6 text-base leading-8">{project.target}</p>
          </section>
          <section className="bg-secondary/5 p-7 backdrop-blur-xl lg:p-10">
            <p className="editorial-label">Kỹ năng áp dụng</p>
            <p className="mt-6 text-base italic leading-8">{project.skills?.join(', ')}</p>
          </section>
        </div>
        <section className="border-t border-primary/10 p-7 lg:p-12">
          <p className="editorial-label">Quá trình thực hiện</p>
          <p className="mt-7 max-w-4xl text-base leading-8">{project.process}</p>
        </section>
        <section className="border-t border-primary/10 p-7 lg:p-12">
          <p className="editorial-label">Sản phẩm & Minh chứng</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <EvidenceItem icon={FileText} label="Báo cáo (PDF/Word)" value={project.report} type="pdf" onPreview={onPreview} />
            <EvidenceItem icon={ImageIcon} label="Ảnh chụp màn hình" value={project.evidenceImg} type="img" onPreview={onPreview} />
            <EvidenceItem icon={ExternalLink} label="Tài nguyên Google Drive" value={project.driveLink} type="drive" onPreview={onPreview} />
          </div>
        </section>
      </article>
    </div>
  );
}
