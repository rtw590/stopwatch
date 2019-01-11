window.addEventListener("keydown", e => {
  let letterPressed = e.key;

  switch (letterPressed) {
    case "m":
      if (
        document.getElementById("30seconds").checked == true &&
        document.getElementById("1minute").checked == true
      ) {
        document.getElementById("30seconds").checked = false;
        document.getElementById("1minute").checked = false;
      } else if (
        document.getElementById("30seconds").checked == true ||
        document.getElementById("1minute").checked == true
      ) {
        document.getElementById("30seconds").checked = false;
        document.getElementById("1minute").checked = false;
      } else {
        document.getElementById("30seconds").checked = true;
        document.getElementById("1minute").checked = true;
      }
      break;
    case "b":
      console.log("B was pushed");
      break;
    case " ":
      startStop();
      break;
    case "r":
      reset();
      break;
    default:
      console.log(`${letterPressed} was pressed`);
  }
});
