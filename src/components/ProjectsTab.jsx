import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import AssignmentCard from './AssignmentCard';
import AssignmentDetail from './AssignmentDetail';
import useScrollReveal from '../hooks/useScrollReveal';

export default function ProjectsTab() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewData, setPreviewData] = useState({ isOpen: false, url: '', type: '' });
  const { projects } = portfolioData;
  useScrollReveal(selectedProject?.id ?? 'grid');

  const openPreview = (event, url, type) => {
    event.preventDefault();
    setPreviewData({ isOpen: true, url, type });
  };
  const closePreview = () => setPreviewData({ isOpen: false, url: '', type: '' });

  if (selectedProject) return <AssignmentDetail project={selectedProject} onBack={() => setSelectedProject(null)} previewData={previewData} onPreview={openPreview} onClosePreview={closePreview} />;

  return (
    <div>
      <header className="page-intro reveal">
        <p className="editorial-label">Assignments &amp; Coursework</p>
        <h1 className="page-title max-w-5xl">Danh mục bài tập &amp; Sản phẩm ứng dụng</h1>
        <p className="page-copy">Tổng hợp các bài thực hành học phần Công nghệ số &amp; AI, thể hiện qua báo cáo chi tiết, minh chứng thực tế và tài nguyên lưu trữ.</p>
      </header>
      <section className="reveal-stagger page-shell grid grid-cols-1 gap-6 pb-28 lg:grid-cols-12">
        {projects.map((project, index) => (
          <AssignmentCard key={project.id} project={project} onSelect={setSelectedProject} featured={index % 3 === 0} />
        ))}
      </section>
      <section className="border-y border-white/55 bg-white/20 px-5 py-20 backdrop-blur-xl sm:px-8 xl:px-[5vw]">
        <div className="reveal mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <p className="editorial-label">Academic Standards</p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-tight text-primary">Evidence before decoration.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-secondary">Mỗi hồ sơ ưu tiên tính chính xác của nội dung, khả năng truy xuất tài nguyên và sự minh bạch trong quá trình thực hiện.</p>
          </div>
          <div className="paper-plate p-10 text-charcoal">
            <p className="editorial-label">Archive Scope</p>
            <p className="mt-5 font-display text-8xl font-semibold leading-none text-primary">{String(projects.length).padStart(2, '0')}</p>
            <p className="mt-2 text-sm text-secondary">documented assignments</p>
          </div>
        </div>
      </section>
    </div>
  );
}
