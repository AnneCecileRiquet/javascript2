/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        let array = [];
        let grand = 1;
        let petit = 100;
        let somme = 0;
        let moyenne = 0;
        
        for(let i = 0; i < 10; i++) {
            array.push(Math.floor(Math.random() * 101 ));
            let val = i + 1;
            document.getElementById("n-" + val).innerHTML = array[i];

            if(array[i] > grand) grand = array[i];
            if(array[i] < petit) petit = array[i];
            somme += array[i];
            moyenne = somme / 10;    
        }

        
        document.getElementById("min").innerHTML = petit;
        document.getElementById("max").innerHTML = grand;
        document.getElementById("sum").innerHTML = somme;
        document.getElementById("average").innerHTML = moyenne;
    });

})();
