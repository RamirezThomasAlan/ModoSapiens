import './LivesCounter.scss';

const LivesCounter = ({ lives }) => {
  return (
    <div className="lives-container">
      {[...Array(3)].map((_, index) => (
        <div 
          key={index} 
          className={`life ${index >= lives ? 'lost' : ''}`}
        ></div>
      ))}
    </div>
  );
};

export default LivesCounter;