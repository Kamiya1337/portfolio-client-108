import { portfolioData } from '../data/portfolioData';

const sections = [
  {
    number: '01',
    label: 'Kiến thức',
    title: 'Kiến thức & Kỹ năng đã đạt được',
    copy: `Ban đầu, em từng nghĩ việc hoàn thành một portfolio học tập chỉ đơn giản là tập hợp toàn bộ bài làm cá nhân rồi tải lên một trang web cho đủ yêu cầu. Tuy nhiên, khi trực tiếp bắt tay vào thực hiện, em mới nhận ra rằng nếu chỉ lưu trữ tài liệu một cách rời rạc thì sản phẩm sẽ rất thiếu tính liên kết, đồng thời người xem khó có thể cảm nhận được quá trình phát triển tư duy và sự tiến bộ học thuật của bản thân qua từng giai đoạn.

Thông qua học phần này, em đã rèn luyện được tư duy tổ chức dữ liệu một cách hệ thống: từ việc chuẩn hóa quy tắc đặt tên tệp, phân loại danh mục khoa học cho đến việc chia nhỏ nội dung theo từng chủ đề để tối ưu hóa khả năng theo dõi. Đặc biệt, em đã thay đổi hoàn toàn cách tiếp cận với Trí tuệ nhân tạo (AI). Thay vì truy vấn tùy hứng như trước, em đã học cách làm chủ kỹ thuật Prompt Engineering—thiết lập đầy đủ Vai trò (Role), Ngữ cảnh (Context), Nhiệm vụ (Task) và Định dạng đầu ra (Format)—từ đó thu được những kết quả chính xác, có kiểm soát và có giá trị ứng dụng cao.

Bên cạnh đó, việc tự tay xây dựng portfolio dưới dạng một ứng dụng web cũng mang lại cho em cơ hội thực hành thiết kế sản phẩm số thực thụ. Em phải tự mình cân đối bố cục thị giác, quản lý luồng dữ liệu minh chứng, tích hợp liên kết báo cáo PDF và tối ưu hóa trải nghiệm người dùng sao cho thông tin được truyền tải minh bạch và trực quan nhất.`,
  },
  {
    number: '02',
    label: 'Thách thức',
    title: 'Khó khăn gặp phải & Giải pháp',
    copy: `Thử thách lớn nhất mà em đối mặt không nằm ở việc hoàn thành từng báo cáo riêng lẻ, mà chính là bài toán tích hợp toàn bộ các thành phần học thuật thành một sản phẩm số thống nhất và chỉn chu. Quá trình thiết kế web đòi hỏi em phải liên tục tinh chỉnh giao diện, từ hệ màu sắc, tỷ lệ bố cục, bảng theo dõi minh chứng, ma trận đánh giá Rubric cho đến khả năng hiển thị tương thích trên nhiều thiết bị và định dạng xuất PDF chuẩn mực.

Trong suốt quá trình triển khai, em đã chủ động ứng dụng các công cụ AI như một trợ lý thông minh để gợi ý ý tưởng bố cục, hỗ trợ sửa lỗi lập trình và rà soát cú pháp nội dung. Tuy nhiên, em luôn giữ nguyên tắc không sao chép nguyên bản những kết quả do AI tạo ra. Mọi đoạn mã hay văn bản gợi ý đều được em tự mình chạy thử, kiểm tra độ chính xác, sửa chữa các sai sót kỹ thuật và thay thế hoàn toàn các nội dung chung chung bằng dữ liệu thực tế cùng trải nghiệm học tập chân thực của chính mình.`,
  },
  {
    number: '03',
    label: 'Next Steps',
    title: 'Kế hoạch hoàn thiện & Phát triển',
    copy: `Để đảm bảo chất lượng cao nhất cho sản phẩm cuối cùng, em đã thiết lập kế hoạch rà soát chi tiết với các mục tiêu cụ thể. Trước hết, em sẽ tiến hành kiểm tra đối soát toàn bộ hệ thống liên kết báo cáo PDF và thư mục lưu trữ, đảm bảo từng đường dẫn đều truy xuất chính xác nội dung tương ứng của từng bài tập.

Đối với những bài thực hành mà sản phẩm chính được tích hợp trực tiếp trong báo cáo, em sẽ ghi chú rõ ràng về tính đồng bộ của minh chứng thay vì cố gắng tạo thêm các đường dẫn giả lập hay nội dung không có thật. Cuối cùng, em sẽ kiểm tra kỹ lưỡng định dạng xuất PDF của toàn bộ portfolio, đảm bảo khi nộp lên hệ thống quản lý học tập, hồ sơ vẫn giữ nguyên tính thẩm mỹ, không bị lỗi phông chữ, vỡ bố cục hay thiếu hụt bất kỳ thông tin quan trọng nào.`,
  },
];

export default function Summary() {
  const { student } = portfolioData;
  return (
    <div className="min-h-screen">
      <header className="page-shell pb-16 pt-16 text-center xl:pt-24"><p className="editorial-label">Reflection &amp; Commitment</p><h1 className="mt-5 font-display text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.03em] text-primary">Tổng kết hành trình &amp; Cam kết học thuật</h1><p className="mx-auto mt-8 max-w-3xl font-display text-2xl italic leading-snug text-secondary/80">Ghi chép những trải nghiệm cá nhân, bài học kinh nghiệm, khó khăn đã vượt qua cùng cam kết liêm chính trong học tập.</p></header>
      <main className="page-shell grid gap-8 pb-28 lg:grid-cols-12">
        <div className="space-y-12 lg:col-span-8">{sections.map((section) => <section key={section.number} className="relative"><span className="absolute -left-14 top-3 hidden font-display text-8xl font-semibold leading-none text-primary/10 lg:block">{section.number}</span><div className="paper-plate p-7 sm:p-10"><p className="editorial-label">{section.label}</p><h2 className="mt-4 font-display text-4xl font-medium leading-tight text-primary">{section.title}</h2><p className="mt-7 whitespace-pre-line text-base leading-8 text-secondary">{section.copy}</p></div></section>)}</div>
        <aside className="space-y-8 lg:col-span-4">
          <div className="paper-plate sticky top-28 p-8">
            <h3 className="border-b border-primary/10 pb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-charcoal">Thông Tin Lưu Trữ</h3>
            <div className="mt-8 space-y-6">
              <div><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-dark">Ngày ghi chú</p><p className="mt-2 text-sm">24 Tháng 06, 2026</p></div>
              <div><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-dark">Học kỳ</p><p className="mt-2 text-sm">Học kỳ II - 2025-2026</p></div>
              <div><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-dark">Trạng thái</p><p className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-primary">Hoàn tất lưu trữ</p></div>
            </div>
            <div className="mt-10 rounded-2xl border border-sunflower-yellow/25 bg-sunflower-yellow/10 p-4 text-xs italic leading-6 text-muted-dark">Portfolio này là minh chứng cho sự nỗ lực không ngừng và sự minh bạch trong học thuật.</div>
          </div>
        </aside>
        <section className="paper-plate mt-8 border-t-4 border-t-sunflower-yellow p-8 text-charcoal sm:p-12 lg:col-span-12"><p className="editorial-label">Academic Integrity</p><h2 className="mt-4 font-display text-4xl font-medium text-primary">Cam kết Liêm chính Học thuật</h2><p className="mt-7 whitespace-pre-line text-base italic leading-8 text-secondary">{`Em, ${student.name}, xin cam kết một cách nghiêm túc rằng toàn bộ nội dung, báo cáo và minh chứng được trình bày trong portfolio này đều phản ánh đúng đắn, trung thực quá trình học tập và nỗ lực thực hành của bản thân em.

Trong suốt quá trình thực hiện học phần, em có ứng dụng Trí tuệ nhân tạo (AI) như một công cụ hỗ trợ học tập có trách nhiệm—chủ yếu nhằm mục đích gợi ý phương án trình bày, hỗ trợ kiểm lỗi lập trình và rà soát văn phong. Em luôn nhận thức sâu sắc rằng AI chỉ đóng vai trò trợ lực giúp tối ưu hóa thời gian và mở rộng góc nhìn, hoàn toàn không thể thay thế cho tư duy tự học, sự tìm tòi cá nhân và trách nhiệm đối với sản phẩm tri thức của chính mình. Em cam kết tuyệt đối không sử dụng minh chứng giả, không kiến tạo sản phẩm hư cấu và không làm sai lệch diễn biến thực tế của các bài tập.

Em xin chân thành cảm ơn Quý Thầy Cô đã đồng hành, hướng dẫn và dành thời gian đánh giá hồ sơ học tập của em.`}</p><div className="mt-10 border-t border-primary/10 pt-6"><p className="editorial-label">Student</p><p className="mt-2 font-display text-3xl font-medium text-primary">{student.name}</p></div></section>
      </main>
    </div>
  );
}
