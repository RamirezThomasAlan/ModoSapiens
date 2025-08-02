import './ResultPage.scss';

const ResultPage = ({ title, message, score, onRestart }) => {
  return (
    <div className="game-container">
      <div className="state-screen">
        <h2 className="state-title">{title}</h2>
        <p className="state-message">{message}</p>
        <div className="final-score">{score}</div>
        <button className="action-btn" onClick={onRestart}>
          {title.includes('VICTORIA') ? 'Jugar de nuevo' : 'Reintentar'}
        </button>
      </div>
    </div>
  );
};

export default ResultPage;