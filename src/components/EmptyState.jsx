
import './styles.css';

export const EmptyState = ({ message = 'No data found.' }) => {
  return (
    <div className="rsk-container">
      <div className="rsk-icon">📭</div>
      <p className="rsk-message">{message}</p>
    </div>
  );
};
