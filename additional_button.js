function spawn_additional_button () {

    document.querySelector('#buttons').insertAdjacentHTML("afterbegin", '<div class="additional-block"> <button class="additional-button">XX</button> <div class="additional-list hidden"> </div> </div>')
}



function show_additional_list(){
  alert('123123')
  document.querySelector('.additional-list').classList.remove("hidden");
}


