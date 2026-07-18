import { X } from 'lucide-react';

export default function PreviewModal({ previewData, onClose }) {
  if (!previewData.isOpen) return null;

  return (
    <div className="modal-backdrop fixed inset-0 z-[100] flex items-center justify-center bg-primary/35 p-3 backdrop-blur-md sm:p-6" role="dialog" aria-modal="true" aria-label="Xem trước minh chứng">
      <div className="modal-panel flex h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/55 bg-glass-surface shadow-[0_40px_120px_-48px_rgba(0,94,159,0.85)] backdrop-blur-2xl">
        <div className="flex items-center justify-between border-b border-white/50 bg-white/30 px-5 py-4">
          <div>
            <p className="editorial-label">Evidence Preview</p>
            <h3 className="mt-1 font-display text-xl font-semibold">{previewData.type === 'pdf' ? 'Báo cáo PDF' : 'Ảnh minh chứng'}</h3>
          </div>
          <div className="flex items-center gap-2">
            <a href={previewData.url} target="_blank" rel="noreferrer" className="button-secondary">Mở thẻ mới</a>
            <button type="button" aria-label="Đóng xem trước" onClick={onClose} className="icon-button-dark"><X size={18} /></button>
          </div>
        </div>
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-taupe/80 p-4">
          {previewData.type === 'pdf' ? (
            <iframe src={previewData.url} title="PDF Preview" className="h-full w-full border-0 bg-white" />
          ) : (
            <img src={previewData.url} alt="Minh chứng" className="max-h-full max-w-full object-contain" />
          )}
        </div>
      </div>
    </div>
  );
}
