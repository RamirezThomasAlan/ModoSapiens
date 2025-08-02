import './OptionsList.scss';

const OptionsList = ({ options, selectedOption, correctAnswer, onSelect }) => {
  return (
    <div className="options">
      {options.map((option, index) => {
        let buttonClass = '';
        if (correctAnswer) {
          if (option === correctAnswer) {
            buttonClass = 'correct';
          } else if (option === selectedOption) {
            buttonClass = 'incorrect';
          }
        } else if (option === selectedOption) {
          buttonClass = 'selected';
        }

        return (
          <button
            key={index}
            className={`option-btn ${buttonClass}`}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default OptionsList;