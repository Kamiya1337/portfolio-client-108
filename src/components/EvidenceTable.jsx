import { useState } from 'react';
import { Check, ExternalLink, Maximize2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import PreviewModal from './PreviewModal';

function isComplete(value) {
  return Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');
}

export default function EvidenceTable() {
  const { projects } = portfolioData;
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });
  const completed = projects.filter((project) => isComplete(project.report) && isComplete(project.evidenceImg) && isComplete(project.driveLink)).length;

  const openPreview = (event, url, type) => {
    if (type === 'drive') return;
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };

  const EvidenceLink = ({ value, label, type }) => {
    if (!value || value === 'Sẽ cập nhật sau') return <span className="ledger-status">Đang chờ</span>;
    if (value === 'Không yêu cầu') return <span className="ledger-status">Không yêu cầu</span>;
    const Icon = type === 'drive' ? ExternalLink : Maximize2;
    return <a href={value} target="_blank" rel="noreferrer" onClick={(event) => openPreview(event, value, type)} className="ledger-link">{label}<Icon size={13} /></a>;
  };

  const StatusBadge = ({ project }) => {
    const complete = isComplete(project.report) && isComplete(project.evidenceImg) && isComplete(project.driveLink);
    return complete ? <span className="ledger-status ledger-status-complete"><Check size={12} /> Đã nộp</span> : <span className="ledger-status">Thiếu minh chứng</span>;
  };

  return (
    <div className="min-h-screen">
      <PreviewModal previewData={previewData} onClose={() => setPreviewData({ isOpen: false, url: '', type: '' })} />
      <header className="page-intro">
        <p className="editorial-label">Evidence &amp; Repository</p>
        <h1 className="page-title max-w-5xl">Kho minh chứng &amp; Tài nguyên học tập</h1>
        <p className="page-copy">Hệ thống hóa toàn bộ báo cáo PDF, hình ảnh chụp thực tế và thư mục Google Drive phục vụ cho công tác đối soát học thuật.</p>
      </header>

      <section className="page-shell pb-28">
        <div className="mx-auto grid gap-8 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="paper-plate overflow-hidden">
          <div className="divide-y divide-primary/10 md:hidden">
            {projects.map((project) => (
              <article key={project.id} className="py-6">
                <div className="flex items-start justify-between gap-4 px-5">
                  <div>
                    <p className="editorial-label">Assignment {String(project.id).padStart(2, '0')}</p>
                    <h2 className="mt-3 font-display text-xl font-semibold">{project.title}</h2>
                  </div>
                  <StatusBadge project={project} />
                </div>
                <div className="mt-6 grid grid-cols-1 gap-2 px-5 min-[420px]:grid-cols-3">
                  <EvidenceLink value={project.report} label="Report" type="pdf" />
                  <EvidenceLink value={project.evidenceImg} label="Image" type="img" />
                  <EvidenceLink value={project.driveLink} label="Drive" type="drive" />
                </div>
              </article>
            ))}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/50 bg-primary/5 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary">
                  <th className="px-8 py-6">Assignment</th>
                  <th className="px-8 py-6 text-center">Report File</th>
                  <th className="px-8 py-6 text-center">Evidence Image</th>
                  <th className="px-8 py-6 text-center">Resource Link</th>
                  <th className="px-8 py-6 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                {projects.map((project) => (
                  <tr key={project.id} className="group transition-all hover:bg-white/35">
                    <td className="px-8 py-10">
                      <p className="font-display text-2xl font-medium leading-tight text-primary transition-transform duration-500 group-hover:translate-x-2">{project.title}</p>
                      <p className="mt-2 text-xs uppercase tracking-wider text-muted-dark">{project.chapter}</p>
                    </td>
                    <td className="px-8 py-10 text-center"><EvidenceLink value={project.report} label="Xem báo cáo" type="pdf" /></td>
                    <td className="px-8 py-10 text-center"><EvidenceLink value={project.evidenceImg} label="Xem ảnh" type="img" /></td>
                    <td className="px-8 py-10 text-center"><EvidenceLink value={project.driveLink} label="Mở Drive" type="drive" /></td>
                    <td className="px-8 py-10 text-right"><StatusBadge project={project} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between border-t border-white/50 px-6 py-5">
            <p className="editorial-label">Showing {projects.length} academic records</p>
            <p className="text-sm text-muted-dark">{completed}/{projects.length} complete</p>
          </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28">
          <div className="paper-plate p-8">
            <p className="editorial-label">Archive Summary</p>
            <div className="mt-8 flex gap-10">
              <div><p className="font-display text-5xl text-primary">{projects.length * 2}</p><p className="text-sm text-muted-dark">Total Files</p></div>
              <div className="border-l border-primary/10 pl-10"><p className="font-display text-5xl text-primary">{completed}/{projects.length}</p><p className="text-sm text-muted-dark">Complete Records</p></div>
            </div>
            <p className="mt-10 border-t border-primary/10 pt-6 text-sm italic text-muted-dark">Verifying academic integrity protocol...</p>
          </div>
          <div className="paper-plate border-t-4 border-t-sunflower-yellow p-8">
            <div className="flex items-center gap-2"><Sparkles size={18} className="text-primary" /><p className="editorial-label">Integrity Check</p></div>
            <h2 className="mt-5 font-display text-3xl font-semibold text-primary">Submission Accuracy</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-muted-dark">Mỗi trạng thái được tính trực tiếp từ dữ liệu báo cáo, hình ảnh và liên kết tài nguyên hiện có.</p>
            <p className="mt-10 font-display text-6xl font-semibold text-primary">{Math.round((completed / projects.length) * 100)}%</p>
          </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
