import './LoadingPage.scss';

const LoadingPage = () => {
  return (
    <div className="game-container">
      <div className="loading-screen">
        <div className="game-title">Modo Sapiens</div>
        <div className="loading-text">Activando neuronas...</div>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoadingPage;