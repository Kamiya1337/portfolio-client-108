import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';
import PreviewModal from './PreviewModal';

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
          <p className="editorial-label">Sản phẩm học phần</p>
          <div className="mt-6">
            <div className="glass-panel hover-lift-subtle flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/60 text-primary shadow-sm backdrop-blur-xl">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-primary">Báo cáo học phần (PDF)</h3>
                  <p className="text-xs text-secondary">Tài liệu báo cáo chi tiết của bài tập thực hành</p>
                </div>
              </div>
              {project.report ? (
                <a
                  href={project.report}
                  onClick={(event) => onPreview(event, project.report, 'pdf')}
                  className="button-primary w-full sm:w-auto"
                >
                  <span>Xem báo cáo PDF</span>
                  <ExternalLink size={15} />
                </a>
              ) : (
                <span className="status-muted">Sẽ cập nhật sau</span>
              )}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
