import './FeedbackMessage.scss';

const FeedbackMessage = ({ isCorrect, explanation }) => {
  return (
    <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
      {isCorrect ? '¡Correcto! 🎉' : 'Incorrecto 😕'}
      <div className="explanation">{explanation}</div>
    </div>
  );
};

export default FeedbackMessage;