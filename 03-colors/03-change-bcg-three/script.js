/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
let index = Math.round(Math.random() *4);
document.getElementById("run").addEventListener("click", function(){

    if(index == 1){
        document.body.style.backgroundColor = "red";
    }
    else if(index == 2){
        document.body.style.backgroundColor = "blue"
    }
    else if(index == 3){
        document.body.style.backgroundColor = "yellow"
    }
    else if(index == 4){
        document.body.style.backgroundColor = "green"
    }
});
    // your code here

})();
