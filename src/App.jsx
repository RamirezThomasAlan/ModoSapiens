import { useState, useEffect } from 'react';
import GamePage from './pages/GamePage/GamePage';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import './App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      {isLoading ? <LoadingPage /> : <GamePage />}
    </div>
  );
}

export default App;