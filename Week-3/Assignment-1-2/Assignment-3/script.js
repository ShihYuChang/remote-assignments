// Change the context to test.txt
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  const inputValue = document.getElementById("inputNum").value;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector(".change").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", `http://localhost:3000/getData?number=${inputValue}`, true);
  xhttp.send();
}
