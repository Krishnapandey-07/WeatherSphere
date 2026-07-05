import "../styles/ErrorMessage.css";

function ErrorMessage({ message }) {
  return (
    <div className="error-container">
      <div className="error-icon">⚠️</div>
      <div className="error-text">{message}</div>
    </div>
  );
}

export default ErrorMessage;