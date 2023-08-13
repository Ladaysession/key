function spawn_additional_button () {

    document.querySelector('#buttons').insertAdjacentHTML("afterbegin", '<div class="additional-block"> <button class="additional-button">XX</button> <div class="additional-list hidden"> </div> </div>')
}



// document.querySelector(".additional-button").addEventListener("click", show_additional_list());

// function show_additional_list(){
//   alert('123123')
//   // document.querySelector('.additional-list').classList.remove("hidden");
// }

document.querySelector(".additional-button").onclick = function() {myFunction()};

function myFunction() {
  document.querySelector(".additional-button").innerHTML = "YOU CLICKED ME!";
  alert('asd')
}