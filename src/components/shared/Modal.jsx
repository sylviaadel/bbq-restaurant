import ReactDOM from "react-dom";
export default function Modal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div id="Modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h2>Confirmation</h2>
        <p>Are you sure you want to delete this category?</p>
        <div className="modal-footer">
          <button className="link-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-btn" onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
