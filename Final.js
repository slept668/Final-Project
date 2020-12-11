const ol = document.createElement("ol");
document.body.appendChild(ol);
const todoField = document.querySelector("#todoField");
var stress = [];


document.querySelector('#daForm').addEventListener("submit", function(event) {
    event.preventDefault();

    textEntry = todoField.value;
    stress.push(textEntry)
    const stressMap = stress.map((todo, index) => `
        <li class="AWAITING" id="${index}">
            <input id="${index}" type="checkbox" name="check" class="AWAITING">
             ${todo} <button id="${index}" type="remove">x</button>
        </li>
        `);   
    var stressJoined = stressMap.join(``);
    ol.innerHTML = stressJoined;



    var checkboxes = document.querySelectorAll('input[type=checkbox]')
    for (var checkbox of checkboxes) {
        checkbox.addEventListener('change', function(event) {
          if (event.target.checked) {
            document.getElementById(event.target.id).className = "DONE";
          } else {
            document.getElementById(event.target.id).className = "AWAITING";
          }
        });
      }


      var exes = document.querySelectorAll('button[type=remove]')
    for (var ex of exes) {
        ex.addEventListener('click', function(click)
         {
           stress.splice(click.target.id, 1);
           regen();
           });
      }
});

function regen(){
    const stressMap = stress.map((todo, index) => `
        <li class="AWAITING" id="${index}">
            <input id="${index}" type="checkbox" name="check" class="AWAITING">
             ${todo} <button id="${index}" type="remove">x</button>
        </li>
        `);   
    var stressJoined = stressMap.join(``);
    ol.innerHTML = stressJoined;



    var checkboxes = document.querySelectorAll('input[type=checkbox]')
    for (var checkbox of checkboxes) {
        checkbox.addEventListener('change', function(event) {
          if (event.target.checked) {
            document.getElementById(event.target.id).className = "DONE";
          } else {
            document.getElementById(event.target.id).className = "AWAITING";
          }
        });
      }


      var exes = document.querySelectorAll('button[type=remove]')
    for (var ex of exes) {
        ex.addEventListener('click', function(click)
         {
           stress.splice(click.target.id, 1);
           regen()
           });
      }
}