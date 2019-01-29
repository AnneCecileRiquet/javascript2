/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function asv() {
    function quest(){
        let age = prompt("Quel est votre age ?");
        let sexe = prompt("Quel est votre sexe ?");
        let ville = prompt("Quelle est votre ville ?");
   
        if( confirm("Vous avez " + age + " ans, vous êtes un/une " + sexe + " et vous habitez " + ville)){
            alert("Merci");  
        }else{
            quest();
        }
    }
    quest();

})();
