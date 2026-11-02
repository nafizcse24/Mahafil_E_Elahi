import React, { useRef, useState, useEffect } from 'react';
import { toPng } from 'html-to-image';
import { PosterTemplate } from './PosterTemplate';
import { Download, X, Sparkles, Loader2, Check } from 'lucide-react';

export const PosterModal = ({ isOpen, onClose, speakers }) => {
  const dialogRef = useRef(null);
  const posterRef = useRef(null);
  const previewBoxRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [previewScale, setPreviewScale] = useState(0.42);

  // Sync with native <dialog>
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      setDownloadSuccess(false);
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Dynamically calculate preview scale based on available modal width/height
  useEffect(() => {
    if (!isOpen || !previewBoxRef.current) return;

    const calculateScale = () => {
      const container = previewBoxRef.current;
      if (!container) return;

      const availWidth = container.clientWidth - 16; // internal padding
      const availHeight = container.clientHeight - 16;

      if (availWidth > 0 && availHeight > 0) {
        // 800 width x 1000 height (4:5 ratio)
        const scaleByWidth = availWidth / 800;
        const scaleByHeight = availHeight / 1000;
        // Fit within both width and height, capped at 0.525 (420px width)
        const optimalScale = Math.min(scaleByWidth, scaleByHeight, 0.525);
        setPreviewScale(Math.max(optimalScale, 0.28));
      }
    };

    calculateScale();
    const resizeObserver = new ResizeObserver(calculateScale);
    resizeObserver.observe(previewBoxRef.current);

    return () => resizeObserver.disconnect();
  }, [isOpen]);

  const handleDownload = async () => {
    if (!posterRef.current || isGenerating) return;

    try {
      setIsGenerating(true);

      // Ensure all web fonts are loaded
      await document.fonts?.ready;

      // Small tick for DOM stabilization
      await new Promise((r) => setTimeout(r, 150));

      const dataUrl = await toPng(posterRef.current, {
        quality: 0.98,
        pixelRatio: 2, // 1600x2000 px resolution for high-res print & social media
        cacheBust: true,
      });

      const link = document.createElement('a');
      link.download = 'mahafil-e-elahi-poster-4x5.png';
      link.href = dataUrl;
      link.click();

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error('Failed to generate poster image:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="poster-dialog-title"
      onClose={onClose}
      className="fixed inset-0 m-auto p-0 bg-transparent text-[#fbf5e2] rounded-3xl max-w-[95vw] sm:max-w-2xl max-h-[92vh] overflow-hidden border border-gold-500/40 shadow-[0_25px_80px_rgba(0,0,0,0.95)] backdrop:bg-black/85 backdrop:backdrop-blur-md transition-all open:animate-fade-in"
      style={{ overscrollBehavior: 'contain' }}
    >
      <div className="flex flex-col h-[90vh] max-h-[850px] bg-gradient-to-b from-[#052219] via-[#02130e] to-[#010a07] border border-gold-500/30 rounded-3xl overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-gold-500/30 bg-[#031912]/95 flex-shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <h2 id="poster-dialog-title" className="text-sm sm:text-base font-bold text-gold-100 font-serifBangla">
              ৪:৫ সাইজ পোস্টার প্রিভিউ ও ডাউনলোড
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-gold-400/80 hover:text-gold-200 hover:bg-gold-500/15 transition-colors"
            aria-label="বন্ধ করুন"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Poster Preview Container */}
        <div 
          ref={previewBoxRef} 
          className="flex-1 overflow-hidden p-3 sm:p-5 flex flex-col items-center justify-center relative min-h-0"
        >
          {/* Scaled Poster Frame */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.85)] border border-gold-400/50 bg-[#020a06] flex-shrink-0 transition-all duration-200"
            style={{
              width: `${Math.round(800 * previewScale)}px`,
              height: `${Math.round(1000 * previewScale)}px`,
            }}
          >
            {/* The 800x1000 element scaled down smoothly */}
            <div 
              className="origin-top-left"
              style={{
                transform: `scale(${previewScale})`,
                width: '800px',
                height: '1000px',
              }}
            >
              <PosterTemplate ref={posterRef} speakers={speakers} />
            </div>
          </div>

          <p className="mt-2 text-[0.7rem] sm:text-xs text-gold-300/80 font-sansBangla text-center flex-shrink-0">
            * সোশ্যাল মিডিয়া (Instagram, Facebook) পোস্ট করার আদর্শ ৪:৫ অনুপাত।
          </p>
        </div>

        {/* Modal Action Footer */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-t border-gold-500/30 bg-[#031912]/95 flex-shrink-0">
          <div className="text-xs text-gold-400/70 hidden sm:block font-serifBangla">
            কাউন্টডাউন ছাড়া ১৬০০×২০০০ হাই-রেজুলেশন PNG
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-gold-300 hover:text-gold-100 hover:bg-emerald-950/60 transition-colors font-serifBangla"
            >
              বন্ধ করুন
            </button>

            <button
              type="button"
              onClick={handleDownload}
              disabled={isGenerating}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-300 text-emerald-950 font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all transform active:scale-95 disabled:opacity-50 font-serifBangla"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-emerald-950" />
                  <span>পোস্টার তৈরি হচ্ছে...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-950" />
                  <span>ডাউনলোড সম্পন্ন!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-emerald-950" />
                  <span>পোস্টার ডাউনলোড (PNG)</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </dialog>
  );
};
