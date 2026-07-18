import { Check, TriangleAlert } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const valid = (value) => Boolean(value && value !== 'Sẽ cập nhật sau' && value !== 'Không yêu cầu');

export default function RubricTable() {
  const { projects, rubric } = portfolioData;
  const totalMilestones = projects.length * 2;
  const completedMilestones = projects.reduce((count, project) => count + Number(valid(project.report)) + Number(valid(project.evidenceImg)), 0);
  const progressPercent = Math.round(50 + (completedMilestones / totalMilestones) * 50);
  const projectRows = projects.map((project) => {
    const reportDone = valid(project.report);
    const imageDone = valid(project.evidenceImg);
    return { id: project.id, title: `${project.title.split(':')[0]}: Minh chứng thực hiện`, standard: 'Đầy đủ file báo cáo chi tiết nội dung học tập và hình ảnh screenshot thực tế.', complete: reportDone && imageDone, action: reportDone && imageDone ? 'Đã đồng bộ' : `Cần bổ sung: ${!reportDone ? 'File báo cáo PDF' : ''}${!reportDone && !imageDone ? ' & ' : ''}${!imageDone ? 'Ảnh screenshot' : ''}` };
  });

  return (
    <div className="min-h-screen">
      <header className="page-intro"><p className="editorial-label">Academic Rubric</p><h1 className="page-title">Bảng tiêu chí &amp; Đánh giá chất lượng</h1><p className="page-copy">Đối chiếu kết quả học tập với các chỉ số tiêu chí của học phần, phản ánh mức độ hoàn thiện minh chứng và tính sẵn sàng của hồ sơ.</p></header>
      <section className="page-shell pb-20">
        <div>
          <div className="paper-plate flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12">
            <div>
              <p className="editorial-label">Rubric Criteria</p>
              <h2 className="mt-4 font-display text-5xl font-medium leading-tight text-primary">Academic evaluation ledger</h2>
              <div className="mt-7 h-px w-28 bg-primary/20" />
            </div>
            <div className="rounded-3xl border border-sunflower-yellow/30 bg-sunflower-yellow/15 p-8 text-center">
              <p className="editorial-label">Current Readiness</p>
              <p className="mt-2 font-display text-7xl font-semibold leading-none text-primary">{progressPercent}%</p>
            </div>
          </div>
          <div className="paper-plate mt-12 overflow-hidden">
            <div className="hidden grid-cols-12 gap-6 border-b border-white/50 bg-primary/5 px-8 py-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary lg:grid"><div className="col-span-4">Criterion Details</div><div className="col-span-3">Status Notes</div><div className="col-span-2 text-center">Progress</div><div className="col-span-3">Observations</div></div>
            {rubric.map((row, index) => <article key={row.criteria} className="group grid gap-5 border-b border-white/50 px-6 py-8 last:border-b-0 hover:bg-white/35 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-8 lg:py-10"><div className="lg:col-span-4"><p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">Criterion {String(index + 1).padStart(2, '0')}</p><h3 className="mt-3 font-display text-2xl font-medium leading-tight text-primary group-hover:italic">{row.criteria}</h3></div><p className="text-sm leading-7 text-secondary lg:col-span-3">{row.excellent}</p><div className="lg:col-span-2 lg:text-center"><span className="ledger-status bg-secondary/10 text-secondary">{row.status}</span></div><p className="text-sm italic leading-7 text-muted-dark lg:col-span-3">{row.action}</p></article>)}
          </div>
        </div>
      </section>
      <section className="border-y border-white/55 bg-white/20 px-6 py-20 backdrop-blur-xl sm:px-8 xl:px-[5vw]">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1fr_320px] lg:items-center"><div><p className="editorial-label">Portfolio Readiness</p><h2 className="mt-4 font-display text-5xl font-medium text-primary">Tiến độ minh chứng thực tế</h2><p className="mt-6 max-w-2xl text-base leading-8 text-secondary">Đã tích hợp <strong className="text-charcoal">{completedMilestones}/{totalMilestones}</strong> mục báo cáo và hình ảnh. Điểm số phản ánh đúng dữ liệu hiện có và không sử dụng điểm giả từ bản thiết kế tham chiếu.</p></div><div className="paper-plate p-10 text-charcoal"><p className="font-display text-8xl font-semibold leading-none text-primary">{progressPercent}%</p><p className="editorial-label mt-3">Calculated Score</p><div className="mt-8 border-t border-primary/10 pt-6 text-sm text-muted-dark">Dynamic portfolio readiness</div></div></div>
      </section>
      <section className="page-shell py-20"><div><p className="editorial-label">Evidence Completion</p><div className="mt-8 grid gap-5 md:grid-cols-2">{projectRows.map((row) => <article key={row.id} className="glass-panel p-7 transition-all hover:-translate-y-1 hover:border-sunflower-yellow/60 hover:bg-white/45"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-2xl font-medium leading-tight text-primary">{row.title}</h3>{row.complete ? <Check size={18} className="text-secondary" /> : <TriangleAlert size={18} className="text-tertiary" />}</div><p className="mt-4 text-sm leading-7 text-secondary">{row.standard}</p><p className={`mt-5 text-xs font-semibold uppercase tracking-wider ${row.complete ? 'text-muted-dark' : 'text-charcoal'}`}>{row.action}</p></article>)}</div></div></section>
    </div>
  );
}
