var bouton = document.querySelectorAll(".btn")
var resultat = document.getElementById("resultat")
var total = ""
resultat.innerHTML = 0

for (let i=0; i<bouton.length;i++) {
  bouton[i].addEventListener("click", function() {
    if (bouton[i].value == '=') {
      total = eval(total)
      resultat.innerHTML = total
    }
    else {
      total = total + bouton[i].value
      resultat.innerHTML = total
    }
  })
}
