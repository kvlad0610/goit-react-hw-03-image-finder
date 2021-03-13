import { useEffect } from 'react';

export default function Modal({ onUrl, onCloseModal }) {
  const handleEscape = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };
  const handleBackdrop = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  return (
    <div className="Overlay" onClick={handleBackdrop}>
      <div className="Modal">
        <img src={onUrl} alt="" />
      </div>
    </div>
  );
}
