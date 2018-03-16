const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', keyPress)
}

let i = 0;
let check = [];

function keyPress(e) {
    key = parseInt(e.which || e.detail);
    if (key === code[i]){
      check.push(key);
      ++i;
      console.log(check)
      checkCheats()
    } else {
      restart()
    }
}

function checkCheats(){
  if (check.length === 10){
    alert("HAXXORZZZ")
  }
}

function restart(){
  i = 0;
  check = [];
  console.log("Start Over!")
}