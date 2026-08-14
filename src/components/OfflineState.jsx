
import './styles.css';

export const OfflineState = ({ message = 'You are currently offline.' }) => {
  return (
    <div className="rsk-container rsk-offline">
      <div className="rsk-icon">📶</div>
      <p className="rsk-message">{message}</p>
    </div>
  );
};
