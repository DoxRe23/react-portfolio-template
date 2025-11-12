import React, { useEffect } from 'react';
import '../assets/styles/Timeline.scss';

type Props = {
  images: string[];
  startIndex?: number;
  onClose: () => void;
};

export default function ImageLightbox({ images, startIndex = 0, onClose }: Props) {
  const [index, setIndex] = React.useState(startIndex);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIndex(i => Math.min(i + 1, images.length - 1));
      if (e.key === 'ArrowLeft') setIndex(i => Math.max(i - 1, 0));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [images.length, onClose]);

  if (!images || images.length === 0) return null;

  return (
    <div className="timeline-lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <div className="timeline-lightbox__content" onClick={e => e.stopPropagation()}>
        <button className="timeline-lightbox__close" onClick={onClose} aria-label="Close">×</button>
        <img src={images[index]} alt={`timeline-${index}`} className="timeline-lightbox__img" />
        <div className="timeline-lightbox__controls">
          <button
            onClick={() => setIndex(i => Math.max(i - 1, 0))}
            disabled={index === 0}
            aria-label="Previous"
          >
            ‹
          </button>
          <span className="timeline-lightbox__counter">{index + 1} / {images.length}</span>
          <button
            onClick={() => setIndex(i => Math.min(i + 1, images.length - 1))}
            disabled={index === images.length - 1}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
