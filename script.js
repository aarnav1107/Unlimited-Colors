//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) { // 6 because a hex color has 6 characters
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    // if (!intervalId) { // if intervalId is null
    //   intervalId = setInterval(changeBgColor, 1000); // 
    // }
    intervalId = setInterval(function()
    {
      document.body.style.backgroundColor = randomColor();
    
    }, 1000);
  
    // function changeBgColor() {
    //   document.body.style.backgroundColor = randomColor();
    // }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  
  