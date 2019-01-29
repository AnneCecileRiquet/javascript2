/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
     
   /* var maintenant=new Date();
    var day=maintenant.getDay();    
    var jour=maintenant.getDate();
    var mois=maintenant.getMonth()+1;
    var an=maintenant.getFullYear();
    var heure=maintenant.getHours();
    var minutes=maintenant.getMinutes();
    var secondes=maintenant.getSeconds();

    document.getElementById("target").innerHTML = (day + " " + jour + " " + mois + " " + an + " " + heure + " " + minutes + " " + secondes);
*/

     var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
     var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
     var date = new Date();
     var message = jours[date.getDay()] + " ";   
     message += date.getDate() + " ";   
     message += mois[date.getMonth()] + " "; 
     message += date.getFullYear() + ", ";
     message += date.getHours() + "h";
     message += date.getMinutes();
     document.getElementById("target").innerHTML = (message);
    
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
