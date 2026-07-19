import { FolderTree, Search, MessageSquare, Users, PenTool, ShieldCheck } from 'lucide-react';

export const portfolioData = {
  student: {
    name: "Phan Ngọc Hân",
    id: "K70",
    major: "Quản trị kinh doanh",
    university: "Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
    shortUniversity: "UEB - VNU",
    academicYear: "2025–26",
    bio: "Sinh viên ngành Quản trị kinh doanh tại Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội.",
    skills: ["Business Administration", "AI Tools (ChatGPT, Gemini)", "Digital Literacy", "Market Research", "Project Management"]
  },
  overview: [
    { id: 1, title: "Quản lý dữ liệu", desc: "Máy tính, tệp và thư mục", icon: FolderTree },
    { id: 2, title: "Khai thác thông tin", desc: "Tìm kiếm & đánh giá dữ liệu", icon: Search },
    { id: 3, title: "Tư duy AI", desc: "Prompt engineering hiệu quả", icon: MessageSquare },
    { id: 4, title: "Hợp tác trực tuyến", desc: "Làm việc nhóm trong môi trường số", icon: Users },
    { id: 5, title: "Sáng tạo nội dung", desc: "Tạo sản phẩm số với AI", icon: PenTool },
    { id: 6, title: "Liêm chính học thuật", desc: "An toàn số & AI có trách nhiệm", icon: ShieldCheck },
  ],
  projects: [
    {
      id: 1,
      title: "Bài 1: Thao tác cơ bản với tệp tin và thư mục",
      chapter: "Chương 1",
      shortDesc: "Thực hiện các thao tác quản lý tệp tin, thư mục và thiết lập thói quen tổ chức dữ liệu học tập khoa học.",
      skills: ["File Explorer", "Tổ chức dữ liệu", "Phím tắt hệ thống", "Sao lưu & Khôi phục"],
      target: `• Thực hiện thành thạo các thao tác cơ bản với tệp tin và thư mục: Tạo mới, đổi tên, sao chép, di chuyển, xóa, khôi phục và sao lưu dữ liệu.
• Xây dựng thói quen tổ chức dữ liệu học tập khoa học và có hệ thống.
• Áp dụng quy tắc đặt tên tệp rõ ràng, thống nhất để dễ dàng tìm kiếm, hạn chế nhầm lẫn phiên bản và giảm nguy cơ thất lạc dữ liệu.`,
      process: `[Công cụ sử dụng]: File Explorer, Recycle Bin, hệ thống ổ đĩa và các tổ hợp phím tắt trên bàn phím.

[Quá trình thực hiện]:
• Truy cập File Explorer và xác định vị trí các ổ đĩa.
• Tạo hệ thống thư mục, thư mục con và tệp tin theo yêu cầu học phần.
• Thực hiện các thao tác: Đổi tên, Sao chép, Di chuyển, Xóa và Khôi phục tệp.
• Sử dụng phím tắt để nâng cao tốc độ thao tác.
• Ghi lại từng bước bằng ảnh chụp màn hình làm minh chứng thực hành.`,
      result: `• Phân biệt được chức năng của thao tác sao chép, di chuyển, xóa và khôi phục.
• Hiểu sâu sắc vai trò của việc tổ chức thư mục và đặt tên tệp khoa học.
• Nhận thức được đây là kỹ năng nền tảng giúp sinh viên quản lý tài liệu hiệu quả và hạn chế rủi ro mất dữ liệu.`,
      report: "/docs/bai-1.pdf",
      status: "Hoàn Thành"
    },
    {
      id: 2,
      title: "Bài 2: Tìm kiếm và đánh giá thông tin học thuật",
      chapter: "Chương 2",
      shortDesc: "Khai thác tài liệu học thuật đáng tin cậy và đánh giá chất lượng nguồn tin theo mô hình CRAAP.",
      skills: ["Google Scholar", "Mô hình CRAAP", "Trích dẫn Harvard", "Đánh giá tin học thuật"],
      target: `• Phát triển kỹ năng tìm kiếm tài liệu học thuật từ các nguồn đáng tin cậy; biết cách đánh giá chất lượng và độ tin cậy của thông tin.
• Hạn chế sử dụng nguồn không rõ tác giả, dữ liệu thiếu kiểm chứng và tài liệu không phù hợp với mục tiêu nghiên cứu.
• Rèn luyện năng lực tổng hợp và trích dẫn tài liệu chuẩn mực trong học tập.`,
      process: `[Chủ đề & Phạm vi]: "Ảnh hưởng của trí tuệ nhân tạo đối với ngôn ngữ học" (Ứng dụng, tác động tích cực và hạn chế của AI). Sử dụng từ khóa tiếng Anh làm nguồn tìm kiếm chính, kết hợp từ khóa tiếng Việt tham khảo.

[Quá trình thực hiện]:
• Thu thập 10 tài liệu từ 4 nhóm nguồn: Google Scholar, Tạp chí khoa học chuyên ngành, Sách chuyên khảo và Nguồn truy cập mở.
• Đánh giá từng tài liệu theo mô hình CRAAP: Currency (Tính cập nhật), Relevance (Mức độ liên quan), Accuracy (Độ chính xác), Authority (Thẩm quyền học thuật), Purpose (Mục đích công bố).
• Tổng hợp kết quả vào bảng đánh giá và xếp hạng mức độ tin cậy theo thang điểm 1-10.`,
      result: `• Xác định được các yếu tố cốt lõi tạo nên một nguồn thông tin học thuật đáng tin cậy.
• Phân biệt rõ tài liệu học thuật chuẩn mực với các nguồn thông tin thiếu căn cứ.
• Hoàn thiện danh mục tài liệu tham khảo theo định dạng Harvard.
• Rút ra nguyên tắc: Nguồn tài liệu cần có tác giả rõ ràng, nội dung phù hợp, phương pháp minh bạch và dữ liệu có thể kiểm chứng.`,
      report: "/docs/bai-2.pdf",
      status: "Hoàn Thành"
    },
    {
      id: 3,
      title: "Bài 3: Xây dựng và tối ưu hóa Prompt",
      chapter: "Chương 3",
      shortDesc: "Viết prompt rõ ràng, có cấu trúc và áp dụng các kỹ thuật prompting từ cơ bản đến nâng cao với AI.",
      skills: ["Prompt Engineering", "Kỹ thuật Prompting", "Khai thác ChatGPT/LLMs", "Đánh giá Output AI"],
      target: `• Phát triển kỹ năng viết prompt rõ ràng, có cấu trúc và đầy đủ ngữ cảnh; áp dụng các kỹ thuật prompting từ cơ bản đến nâng cao.
• Khai thác AI hiệu quả trong tóm tắt tài liệu, giải thích khái niệm và tạo câu hỏi ôn tập.
• Đánh giá ảnh hưởng của chất lượng prompt đối với kết quả đầu ra của AI.`,
      process: `[Các tác vụ lựa chọn]: Tóm tắt bài đọc "Critical Period Hypothesis in SLA", Phân biệt Semantics và Pragmatics, Tạo bộ câu hỏi ôn tập "Communicative Language Teaching – CLT".

[Xây dựng & Thử nghiệm Prompt]:
• Thiết kế 3 phiên bản prompt cho mỗi tác vụ: Prompt cơ bản (ngắn gọn), Prompt cải tiến (bổ sung mục tiêu/cấu trúc), Prompt nâng cao (xác định vai trò, đối tượng, ngữ cảnh, ví dụ).
• Chạy thử nghiệm trên ChatGPT, ghi lại kết quả 3 cấp độ và lập bảng so sánh theo tiêu chí: Độ chính xác, Mức độ đầy đủ, Tính rõ ràng, và Khả năng đáp ứng.`,
      result: `Ba nguyên tắc viết prompt hiệu quả được đúc kết:
1. Đưa ra chỉ dẫn rõ ràng và cụ thể.
2. Cung cấp đầy đủ ngữ cảnh cần thiết.
3. Xác định rõ vai trò của AI và đối tượng tiếp nhận.

Kết luận: Prompt càng cụ thể và có cấu trúc thì kết quả đầu ra của AI càng phù hợp, chính xác và dễ đưa vào ứng dụng.`,
      report: "/docs/bai-3.pdf",
      status: "Hoàn Thành"
    },
    {
      id: 4,
      title: "Bài 4: Hợp tác và quản lý dự án trực tuyến",
      chapter: "Chương 4",
      shortDesc: "Phối hợp làm việc nhóm trên môi trường số, phân công nhiệm vụ và theo dõi tiến độ bằng công cụ trực tuyến.",
      skills: ["Trello (Kanban)", "Google Docs/Drive", "Hợp tác nhóm số", "Quản lý tiến độ"],
      target: `• Phát triển năng lực phối hợp và làm việc nhóm trên môi trường số; phân công nhiệm vụ, theo dõi tiến độ và quản lý tài liệu chung.
• Sử dụng công cụ trực tuyến phù hợp với từng hoạt động của dự án.
• Rèn luyện kỹ năng giao tiếp, điều phối và giải quyết vấn đề trong nhóm.`,
      process: `[Dự án & Công cụ]: Hoàn thiện Reading Package cho học phần "Viết luận đại học" (Nhóm 3 thành viên). Công cụ: Trello (phân công/tiến độ), Google Docs (soạn thảo cộng tác), Google Drive (lưu trữ), Messenger & Google Meet (trao đổi/họp).

[Quá trình làm việc & Giải pháp]:
• Phân chia trách nhiệm rõ ràng, theo dõi tiến độ qua bảng Trello Kanban.
• Cộng tác trực tiếp trên Google Docs và lưu trữ thống nhất trên Google Drive.
• Giải quyết thách thức: Khó theo dõi tiến độ (dùng Trello), Trùng lặp nội dung (dùng Google Docs cộng tác), Giao tiếp hiểu sai (họp Google Meet trực tiếp).`,
      result: `• Dự án được quản lý theo quy trình khoa học và rõ ràng.
• Các thành viên phối hợp hiệu quả, hạn chế trùng lặp công việc.
• Việc lựa chọn đúng công cụ giúp nâng cao đáng kể chất lượng và hiệu suất làm việc nhóm.`,
      report: "/docs/bai-4.pdf",
      status: "Hoàn Thành"
    },
    {
      id: 5,
      title: "Bài 5: Ứng dụng AI trong sáng tạo nội dung số",
      chapter: "Chương 5",
      shortDesc: "Sử dụng AI tạo sinh để hỗ trợ tạo Infographic & thuyết trình, biên tập và bảo đảm minh bạch đạo đức.",
      skills: ["AI Sáng tạo nội dung", "ChatGPT / Gemini", "Canva AI / Adobe Firefly", "Biên tập & Đạo đức AI"],
      target: `• Sử dụng AI tạo sinh hỗ trợ sáng tạo nội dung số; hiểu rõ vai trò, điểm mạnh và hạn chế của từng công cụ AI.
• Bảo đảm tính minh bạch, đạo đức và dấu ấn cá nhân trong sản phẩm.
• Rèn luyện năng lực kiểm tra, biên tập và hoàn thiện nội dung do AI hỗ trợ.`,
      process: `[Dự án & Công cụ]: Tạo Infographic và Bài thuyết trình ngắn về chủ đề "Ứng dụng AI trong việc nâng cao kỹ năng nói tiếng Anh của sinh viên đại học". Công cụ: ChatGPT, Google Gemini, Adobe Firefly, Canva AI.

[Quá trình thực hiện]:
• Sử dụng AI gợi ý ý tưởng và xây dựng nội dung ban đầu.
• Tạo hình ảnh minh họa bằng công cụ AI, tích hợp và tinh chỉnh thiết kế trên Canva.
• Lưu lại prompt, đầu ra AI, các bước chỉnh sửa cá nhân và sản phẩm hoàn thiện.`,
      result: `• Đánh giá công cụ: AI hỗ trợ tốt trong việc gợi ý ý tưởng, viết bản nháp, tạo phương án thiết kế ban đầu; tuy nhiên còn hạn chế trong kiểm chứng thông tin thực tế và sắc thái bối cảnh.
• Nguyên tắc đạo đức: Công khai việc sử dụng AI, không dùng nội dung AI chưa kiểm chứng làm bằng chứng học thuật, không sao chép nguyên văn đầu ra AI. Sản phẩm thể hiện rõ đóng góp cá nhân.`,
      report: "/docs/bai-5.pdf",
      status: "Hoàn Thành"
    },
    {
      id: 6,
      title: "Bài 6: Đạo đức AI và liêm chính học thuật",
      chapter: "Chương 6",
      shortDesc: "Nghiên cứu chính sách, rèn luyện tư duy phản biện và xây dựng 7 nguyên tắc sử dụng AI có trách nhiệm.",
      skills: ["Đạo đức AI", "Liêm chính học thuật", "Trích dẫn & Minh bạch", "7 Nguyên tắc AI trách nhiệm"],
      target: `• Hiểu rõ giới hạn đạo đức khi sử dụng AI trong học tập và nghiên cứu; phân biệt giữa hỗ trợ hợp lý và gian lận học thuật.
• Sử dụng AI minh bạch, có kiểm chứng và có trách nhiệm.
• Xây dựng nguyên tắc cá nhân để bảo đảm liêm chính học thuật.`,
      process: `[Nghiên cứu chính sách & Thực hành]:
• Tìm hiểu quy định ĐHQGHN về AI: Không cấm tuyệt đối nhưng yêu cầu minh bạch, đạo đức số và chịu trách nhiệm về sản phẩm.
• Thực hành bài thuyết trình "The role of English podcasts and short videos in improving students’ listening and speaking confidence" (Dùng AI gợi ý dàn ý, diễn đạt, phản biện; người học tự kiểm tra thông tin, chỉnh sửa và bổ sung ví dụ cá nhân).

[7 Nguyên tắc sử dụng AI có trách nhiệm]:
1. Chỉ sử dụng khi cho phép. 2. Công khai công cụ & mục đích. 3. Không nộp nguyên văn đầu ra AI. 4. Không cung cấp dữ liệu riêng tư. 5. Không dùng nguồn giả do AI tạo. 6. Kiểm chứng bằng nguồn chính thức. 7. Trợ lực tư duy, không thay thế quá trình học.`,
      result: `• Hoàn thiện Infographic về 7 nguyên tắc sử dụng AI đúng đắn.
• Nhận thức sâu sắc rằng AI chỉ là công cụ hỗ trợ, không thay thế trách nhiệm người học.
• Việc sử dụng AI hiệu quả đòi hỏi bảo đảm 3 yếu tố: Minh bạch, Kiểm chứng, và Có đóng góp cá nhân rõ ràng.`,
      report: "/docs/bai-6.pdf",
      status: "Hoàn Thành"
    }
  ],
  rubric: [
    { criteria: "Thiết kế và cấu trúc Portfolio", excellent: "Chuyên nghiệp, sáng tạo, điều hướng tốt, UI/UX hiện đại.", status: "Hoàn thiện", action: "Đã hoàn thiện đầy đủ nội dung và giao diện Portfolio" },
    { criteria: "Bài 1: Quản lý tệp/thư mục", excellent: "Cấu trúc tối ưu, quy tắc đặt tên rõ ràng, minh họa sắc nét.", status: "Hoàn thiện", action: "Đã hoàn thiện báo cáo và minh chứng thực hiện" },
    { criteria: "Bài 2: Tìm kiếm & Đánh giá", excellent: "Bảng đánh giá CRAAP chi tiết, dùng toán tử nâng cao hiệu quả.", status: "Hoàn thiện", action: "Đã hoàn thiện báo cáo và minh chứng thực hiện" },
    { criteria: "Bài 3: Viết Prompt hiệu quả", excellent: "So sánh rõ ràng trước/sau, phân tích lỗi và cải tiến sâu sắc.", status: "Hoàn thiện", action: "Đã hoàn thiện báo cáo và minh chứng thực hiện" },
    { criteria: "Bài 4: Hợp tác trực tuyến", excellent: "Minh chứng rõ việc chia task, họp nhóm và quản lý tiến độ.", status: "Hoàn thiện", action: "Đã hoàn thiện báo cáo và minh chứng thực hiện" },
    { criteria: "Bài 5: Sáng tạo nội dung với AI", excellent: "Sản phẩm đẹp, sáng tạo, trích dẫn rõ phần nào dùng AI.", status: "Hoàn thiện", action: "Đã hoàn thiện báo cáo và minh chứng thực hiện" },
    { criteria: "Bài 6: AI có trách nhiệm", excellent: "Bộ nguyên tắc cá nhân chặt chẽ, tư duy phản biện cao.", status: "Hoàn thiện", action: "Đã hoàn thiện báo cáo và minh chứng thực hiện" },
  ]
};
