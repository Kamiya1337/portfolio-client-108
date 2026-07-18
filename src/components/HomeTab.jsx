import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import Hero from './Hero';

const modules = [
  { number: '04', title: 'Assignments', copy: 'Assignments and applied academic work.', tab: 'projects' },
  { number: '05', title: 'Evidence', copy: 'Reports, media, and linked learning artifacts.', tab: 'evidence' },
  { number: '06', title: 'Rubric', copy: 'Evaluation criteria and portfolio readiness.', tab: 'rubric' },
  { number: '07', title: 'Reflection', copy: 'Personal insight, challenges, and next steps.', tab: 'summary' },
];

export default function HomeTab({ setActiveTab }) {
  const { student, overview } = portfolioData;
  return (
    <div>
      <Hero student={student} setActiveTab={setActiveTab} />

      <section className="page-shell pb-24">
        <div className="reveal paper-plate grid gap-10 border-l-4 border-sunflower-yellow p-7 sm:p-10 lg:grid-cols-[0.9fr_1.4fr] lg:p-16">
          <div>
            <p className="editorial-label">02 Profile / Định vị cá nhân</p>
            <h2 className="mt-5 font-display text-[clamp(3.1rem,7vw,6rem)] font-bold leading-[0.92] tracking-[-0.03em] text-primary">
              Digital <span className="italic text-secondary">Catalyst</span>
            </h2>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Data-driven Thinking x Digital Creativity</p>
          </div>
          <div className="border-t border-primary/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="max-w-3xl text-base leading-8 text-charcoal">
              Em là một người luôn tràn đầy niềm đam mê với việc khai phá tiềm năng vô hạn của công nghệ số và trí tuệ nhân tạo. Định vị học thuật của em nằm ở điểm giao thoa giữa tư duy phân tích logic dựa trên dữ liệu thực tế và tinh thần sáng tạo số không giới hạn. Em say mê việc tìm hiểu cơ chế vận hành của các công cụ hiện đại, từ đó chủ động tìm giải pháp tối ưu hóa để kiến tạo nên những sản phẩm số chỉn chu, mang lại giá trị trải nghiệm thực sự cho người dùng.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal">
              Hồ sơ học tập này không chỉ đơn thuần là nơi tổng hợp các bài tập bộ môn Công nghệ số và AI, mà còn đóng vai trò như một cuốn nhật ký hành trình ghi lại trọn vẹn quá trình em khám phá, thử nghiệm và dần chủ động làm chủ công nghệ.
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal">
              Thông qua từng bài thực hành, em đã từng bước chuyển hóa các tri thức lý thuyết trên giảng đường thành những sản phẩm ứng dụng có tính thực tiễn cao, minh bạch và có thể dễ dàng tiếp cận bởi cộng đồng.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="editorial-label">03 Learning Map</p>
            <h2 className="mt-4 font-display text-[clamp(3rem,6vw,5.4rem)] font-bold leading-[0.95] tracking-[-0.025em] text-primary">Trụ cột học thuật</h2>
          </div>
          <p className="max-w-xl text-base italic leading-8 text-secondary lg:col-span-6 lg:col-start-7">
            Bản đồ năng lực giữ nguyên các chủ điểm học phần, trình bày như một catalogue học thuật thay vì dashboard.
          </p>
        </div>

        <div className="reveal-stagger mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {overview.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="reveal glass-panel hover-lift-subtle group p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-7xl font-semibold leading-none text-primary/10 transition-colors group-hover:text-primary/20">{String(index + 1).padStart(2, '0')}</span>
                  <span className="rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-sunflower-yellow/25"><Icon size={24} strokeWidth={1.5} /></span>
                </div>
                <h3 className="mt-8 font-display text-3xl font-medium leading-tight text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-secondary">{item.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-shell py-24">
        <div className="editorial-divider mb-20" />
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="editorial-label">Portfolio Navigation</p>
            <h2 className="mt-4 font-display text-[clamp(3rem,6vw,5.4rem)] font-bold leading-[0.96] tracking-[-0.025em] text-primary">Module Explorer</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-secondary lg:col-span-5 lg:justify-self-end">
            Navigate the academic journey through coursework, supporting evidence, assessment criteria, and reflection.
          </p>
        </div>
        <div className="reveal-stagger mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {modules.map((item) => (
            <button
              type="button"
              key={item.number}
              onClick={() => setActiveTab(item.tab)}
              className="reveal glass-panel hover-lift group min-h-72 p-7 text-left active:scale-[0.98] hover:bg-primary"
            >
              <div className="mb-12 flex items-start justify-between">
                <span className="font-display text-7xl font-semibold leading-none text-primary/10 group-hover:text-white/20">{item.number}</span>
                <ArrowUpRight size={20} className="mt-2 text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </div>
              <h3 className="font-display text-3xl font-medium text-primary group-hover:text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-secondary group-hover:text-white/75">{item.copy}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="page-shell pb-28">
        <div className="reveal paper-plate flex min-h-72 items-center justify-center p-10 text-center text-charcoal">
          <div>
            <p className="editorial-label">Academic Framework</p>
            <p className="mt-6 max-w-4xl font-display text-2xl font-medium italic leading-relaxed text-primary sm:text-4xl">
              “Hành trình tri thức chỉ thực sự trở nên giá trị khi mỗi bước đi đều được minh chứng bằng sản phẩm, đối soát bằng thực tiễn và đúc kết bằng sự tự ngẫm.”
            </p>
            <div className="mx-auto mt-8 h-px w-24 bg-primary/20" />
          </div>
        </div>
      </section>
    </div>
  );
}
