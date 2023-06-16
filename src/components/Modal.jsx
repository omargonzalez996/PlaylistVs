
function Modal({ onClose, ended }) {
    if (ended) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="results">
                    <h2>We have a winner!!!</h2>
                </div>
                <button className="modal-close" onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}

export default Modal;