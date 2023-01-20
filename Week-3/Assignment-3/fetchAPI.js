function fetchData(url) {
  const main = document.querySelector(".mainBody");
  const inputValue = document.getElementById("inputNum").value;
  fetch(`http://localhost:3000/getData?number=${inputValue}`)
    .then((response) => {
      return response.text();
    })
    .then((response) => {
      main.innerHTML = response;
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
}
