let startTime = Date.now();
let waitTime = 3000; // 3000ms = 3s

const frame = () => {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;

  if (elapsedTime < waitTime) {
    requestAnimationFrame(frame);
  } else {
    window.location.href = 'main.html';
  }
};

requestAnimationFrame(frame);
