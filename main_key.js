//ЮТУБ
console.log('start')

document.addEventListener('keydown', function(event) {
  //удаляем лого на видео
  if (event.key == 'Z' ) {

    console.log('0') //этап 0 завершен, далее проверяем что сайт - ютуб

    if (document.querySelector('.annotation-type-custom')) { //проверяем, это ли видео на ютубе?

      console.log('1') //этап 1 завершен, блок на ютубе удален

      document.querySelector('.annotation-type-custom').remove() //убираем блок
    }
  }


  //удаляем верхний блок на главной странице
  if (event.key == 'X' ) {

    localStorage.setItem("a1", 'ZERO');
    percent_of_views()
    
  }

  if (event.key == 'A' ) {

    spawn_additional_block()
    
  }




  
});