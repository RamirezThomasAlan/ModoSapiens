import './ProgressBar.scss';

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}>
        {[3, 6, 9].map((mark, index) => (
          <div 
            key={index} 
            className="progress-marker" 
            style={{ left: `${mark * 10}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;