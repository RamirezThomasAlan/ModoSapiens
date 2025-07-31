import './QuestionCard.scss';

const QuestionCard = ({ question }) => {
  return (
    <div className="question">
      {question}
    </div>
  );
};

export default QuestionCard;