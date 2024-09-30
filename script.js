// Get the elements
const dot = document.querySelector('.dot');
const container = document.querySelectorAll('.container');

const lastItem = container[container.length - 1].offsetTop;

window.addEventListener('scroll', () => {
  const userScroll = window.scrollY;
  const scrollableHeight= document.documentElement.scrollHeight - window.innerHeight;

  
  const scrollPercent = userScroll / scrollableHeight;

  // Calculate how far the dot should move based on the scroll percentage
  
  const movingDot = scrollPercent * lastItem;

  // Apply the transform to move the dot
  dot.style.transform = `translate(-50%, ${movingDot}px)`;
});
