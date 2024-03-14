function refreshPage() {
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
    var formulaire = document.getElementById("form");
    if (formulaire) {
      formulaire.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire par défaut
        let disp = document.getElementById("align");
        disp.style.display = "none";

        let dispresult = document.getElementById("result");
        var metier = document.getElementById("metier").value;
        var lvl = document.getElementById("niveauActuel").value;
        var objectiflvl = document.getElementById("niveauAtteindre").value;
        var grade = document.getElementById("grade").value;
        var boost = document.getElementById("boostQuotidien").value;

        if(metier==="Mineur") {
          fetch('mn.json')
          .then(response => response.json())
          .then(data => {
            var xpbase = data[`${lvl}`];
            var xpobjectif = data[`${objectiflvl}`];
            var tolvl = xpobjectif - xpbase
            var xpness = tolvl * ((grade/100)+(boost/100))
            var xpfinal = tolvl - xpness
            console.log(xpfinal)
            var result = `<img id="picresult" src="pala.png" alt="Lingot de paladium" /> <h1>Pour passer du niveau ${lvl} au niveau ${objectiflvl} en tant que mineur, il vous faudra ${xpfinal} points d'expérience, soit ${Math.ceil(xpfinal/1000)} bouteilles d'expérience métier.</h1> <button id="return" onclick="refreshPage()">Retour au calculateur</button>`
            document.getElementById('result').innerHTML = result;
            dispresult.style.display = "block";
        })
        } else if (metier==="Farmeur") {
          fetch('fm.json')
          .then(response => response.json())
          .then(data => {
            var xpbase = data[`${lvl}`];
            var xpobjectif = data[`${objectiflvl}`];
            var tolvl = xpobjectif - xpbase
            var xpness = tolvl * ((grade/100)+(boost/100))
            var xpfinal = tolvl - xpness
            console.log(xpfinal)
            var result = `<img id="picresult" src="pala.png" alt="Lingot de paladium" /> <h1>Pour passer du niveau ${lvl} au niveau ${objectiflvl} en tant que farmeur, il vous faudra ${xpfinal} points d'expérience, soit ${Math.ceil(xpfinal/1000)} bouteilles d'expérience métier.</h1> <button id="return" onclick="refreshPage()">Retour au calculateur</button>`
            document.getElementById('result').innerHTML = result;
            dispresult.style.display = "block";
        })
        } else if (metier==="Chasseur") {
          fetch('ch.json')
          .then(response => response.json())
          .then(data => {
            var xpbase = data[`${lvl}`];
            var xpobjectif = data[`${objectiflvl}`];
            var tolvl = xpobjectif - xpbase
            var xpness = tolvl * ((grade/100)+(boost/100))
            var xpfinal = tolvl - xpness
            console.log(xpfinal)
            var result = `<img id="picresult" src="pala.png" alt="Lingot de paladium" /> <h1>Pour passer du niveau ${lvl} au niveau ${objectiflvl} en tant que chasseur, il vous faudra ${xpfinal} points d'expérience, soit ${Math.ceil(xpfinal/1000)} bouteilles d'expérience métier.</h1> <button id="return" onclick="refreshPage()">Retour au calculateur</button>`
            document.getElementById('result').innerHTML = result;
            dispresult.style.display = "block";
        })
        } else if (metier==="Alchimiste") {
          fetch('al.json')
          .then(response => response.json())
          .then(data => {
            var xpbase = data[`${lvl}`];
            var xpobjectif = data[`${objectiflvl}`];
            var tolvl = xpobjectif - xpbase
            var xpness = tolvl * ((grade/100)+(boost/100))
            var xpfinal = tolvl - xpness
            console.log(xpfinal)
            var result = `<img id="picresult" src="pala.png" alt="Lingot de paladium" /> <h1>Pour passer du niveau ${lvl} au niveau ${objectiflvl} en tant qu'alchimiste, il vous faudra ${xpfinal} points d'expérience, soit ${Math.ceil(xpfinal/1000)} bouteilles d'expérience métier.</h1> <button id="return" onclick="refreshPage()">Retour au calculateur</button>`
            document.getElementById('result').innerHTML = result;
            dispresult.style.display = "block";
        })
        }

    });
    }
  });

// document.getElementById("form").addEventListener("submit", function(event) {
//     event.preventDefault();
//     var metier = document.getElementById("metier").value;
//     var lvl = document.getElementById("niveauActuel").value;
//     var objectiflvl = document.getElementById("niveauAtteindre").value;
//     var grade = document.getElementById("grade").value;
//     var boost = document.getElementById("boostQuotidien").value;
//     var double = document.getElementById("potionXp").value;
//     console.log(metier,lvl,objectiflvl,grade,boost,double)
//   });