export const createConfetti = (container) => {
  const colors = ['#6a11cb', '#2575fc', '#2ed573', '#ffa502', '#ff4757', '#7442c8'];
  
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    
    container.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
};

export const calculateTotalProgress = (currentLevel, levelProgress) => {
  if (currentLevel === 'extreme') return 100;
  
  const base = 
    (currentLevel === 'easy' ? 0 : 
     currentLevel === 'medium' ? 3 : 
     currentLevel === 'hard' ? 6 : 9);
  
  const current = 
    (currentLevel === 'easy' ? levelProgress.easy : 
     currentLevel === 'medium' ? levelProgress.medium : 
     levelProgress.hard);
  
  return ((base + current) / 10) * 100;
};