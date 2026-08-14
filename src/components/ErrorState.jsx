
import './styles.css';

export const ErrorState = ({ message = 'An error occurred.' }) => {
  return (
    <div className="rsk-container rsk-error">
      <div className="rsk-icon">❌</div>
      <p className="rsk-message">{message}</p>
    </div>
  );
};
