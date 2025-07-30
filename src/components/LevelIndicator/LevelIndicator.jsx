import './LevelIndicator.scss';

const LevelIndicator = ({ level, progress }) => {
  const getLevelText = () => {
    switch(level) {
      case 'easy': return 'Nivel Fácil';
      case 'medium': return 'Nivel Medio';
      case 'hard': return 'Nivel Difícil';
      case 'extreme': return 'Nivel Extremo';
      default: return '';
    }
  };

  const getProgressText = () => {
    if (level === 'extreme') return '';
    return ` (${progress[level]}/3)`;
  };

  return (
    <div className={`current-level level-${level}`}>
      {getLevelText()}{getProgressText()}
    </div>
  );
};

export default LevelIndicator;