const handleClick = function(e) {
  console.log(`I was clicked!: ${e.target.id}`);
};

const button = {
  init: function() {
    let buttons = document.getElementsByClassName('button');
    for(let buttonInstance of buttons) {
      buttonInstance.addEventListener("click", handleClick);
    }
  }
};

module.exports = button;
