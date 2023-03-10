export default function Modal({ message, open, onClose }) {
  if (!open) return null;
  return (
    <div id="Modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="link-btn" onClick={onClose}>
          Close
        </button>
        <h2>Confirmation</h2>
        {message}
      </div>
    </div>
  );
}
