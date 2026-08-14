
import './styles.css';

export const SuccessState = ({ message = 'Operation successful!' }) => {
  return (
    <div className="rsk-container rsk-success">
      <div className="rsk-icon">✅</div>
      <p className="rsk-message">{message}</p>
    </div>
  );
};
