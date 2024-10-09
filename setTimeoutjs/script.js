let n = 0
const intervalo1 = setInterval(function() {
  console.clear()
  console.log("Contador: " + n)
  n = n + 1
}, 1000)
//setTimeout - espere e depois execute
setTimeout(function() {
  clearInterval(intervalo1)
  window.alert("Redirecionando")
  location.href = "https://www.google.com"
}, 5000)
//clearInterval(intervalo1)