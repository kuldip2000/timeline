
const dot = document.querySelector('.dot');
const container = document.querySelectorAll('.container');

const lastItem = container[container.length - 1].offsetTop;

window.addEventListener('scroll', () => {
  const userScroll = window.scrollY;
  const scrollableHeight= document.documentElement.scrollHeight - window.innerHeight;

  
  const scrollPercent = userScroll / scrollableHeight;

  
  
  const movingDot = scrollPercent * lastItem;


  dot.style.transform = `translate(-50%, ${movingDot}px)`;
});
