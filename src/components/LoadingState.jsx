
import './styles.css';

export const LoadingState = ({ message = 'Loading...' }) => {
  return (
    <div className="rsk-container">
      <div className="rsk-spinner"></div>
      <p className="rsk-message">{message}</p>
    </div>
  );
};
