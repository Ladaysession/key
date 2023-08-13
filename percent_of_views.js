array_localstorage = [0]

function percent_of_views() {
  //ПОЛУЧАЕМ ЗНАЧЕНИЕ ПОДПИСЧИКОВ - НАЧАЛО
array_localstorage = []
subscribers_string = document.querySelectorAll('#subscriber-count')[0].textContent
// subscribers_string = subscribers_string.substr(0,5)

//Thousands (K) or Millions (M) or Hundrets (H)
KMH_subscribers = 0;
subscribers_count = '';
i = 0;
result = 0; //
videos_counter = 0; //
array_counter = 0;

while( i < subscribers_string.length ){

  //ПРОВЕРЯЕМ КОЛИЧЕСТВО ПОДПИСЧИКОВ
  //В subscribers_count ЗАСОВЫВАЕМ ПЕРВЫЕ ЗНАЧЕНИЯ
  if ( subscribers_string.charAt(i) == 'M' ) {
    KMH_subscribers = 1000000
    break;
  } else if ( subscribers_string.charAt(i) == 'K' ) {
    KMH_subscribers = 1000
    break;
  } else if ( subscribers_string.charAt(i) == ' ' ) {
    KMH_subscribers = 1
    break;
  }
   else {
    //ПОСИМВОЛЬНО ПРОВЕРЯЕМ КАЖДЫЙ СИМВОЛ И ЕГО ДОБАВЛЯЕМ В subscribers_count, КРОМЕ
    //К, М, " "
    subscribers_count += subscribers_string.charAt(i)
  }

  i++;

}

//ПРЕОБРАЗУЕМ subscribers_count В ЧИСЛО
subscribers_count = Number(subscribers_count)

console.log(KMH_subscribers)
console.log(subscribers_count)

//ПОЛУЧАЕМ ЗНАЧЕНИЕ ПОДПИСЧИКОВ - КОНЕЦ



videos = document.querySelectorAll('.inline-metadata-item');

//Thousands (K) or Millions (M) or Hundrets (H)
i = 0;
videos_counter = 0;
array_counter = 0;
//ЦИКЛ В ЦИКЛЕ. СНАЧАЛА БЕРЕМ КАЖДЫЙ ВИДЕОРОЛИК
//ЗАТЕМ ПРОВЕРЯЕМ СТРОКИ КАЖДОГО ВИДЕОРОЛИКА
//И ЕГО ЗНАЧЕНИЯ (ПРОСМОТРЫ)
//В КОНЦЕ ПО ФОРМУЛЕ ПРОСМ/ПОДП * 100 ВЫВОДИМ
//ПОЛУЧЕННОЕ ЗНАЧЕНИЕ ПОД КАЖДЫЙ РОЛИК
while( i < videos.length){
  result = 0;
  KMH_views = 0;
  views_count = '';

  video_title = document.querySelectorAll('#video-title')[videos_counter]

  y = 0;
  videos[i].textContent

    while( y < videos[i].textContent.length ){

      if ( videos[i].textContent.charAt(y) == 'M' ) {
        KMH_views = 1000000
        break
      } else if ( videos[i].textContent.charAt(y) == 'K' ) {
        KMH_views = 1000
        break
      } else if ( videos[i].textContent.charAt(y) == ' ' ) {
        KMH_views = 1
        break
      } else {
        views_count += videos[i].textContent.charAt(y)
      }

      y++
    }

  //ПРЕОБРАЗУЕМ subscribers_count В ЧИСЛО
  views_count = Number(views_count)

  //result ФОРУМАЛА РАСЧЕТА
  result = Math.round( ( (views_count * KMH_views) / (subscribers_count * KMH_subscribers) ) * 100 )

  //ВЫВОДИМ РЕЗУЛЬТАТ К КАЖДОМУ РОЛИКУ
  // videos[i].textContent += '  [ ' + result + '%' + ' ] '

  //ВЫВОДИМ РЕЗУЛЬТАТ К КАЖДОМУ РОЛИКУ
  //ДЛЯ КАЖДОГО РОЛИКА СОЗДАЕТСЯ НЕБОЛЬШОЙ span-БЛОК, КУДА И ВЫВОДИТЬСЯ РЕЗУЛЬТАТ (%)
  //ЕСЛИ ТАКОВОЙ span-БЛОК УЖЕ ЕСТЬ, ТО ВМЕСТО СОЗДАНИЯ НОВОГО - РЕЗУЛЬТАТ ВНОСИТЬСЯ В НЕГО
  testI = document.querySelectorAll("#metadata-line").length

  if (document.querySelectorAll('.percent-video')[videos_counter] == undefined) {
    document.querySelectorAll("#metadata-line")[videos_counter].insertAdjacentHTML("afterbegin", '<span class="percent-video">'+ '  [ ' + result + '%' + ' ] '+'</span>')
  } else {
    document.querySelectorAll('.percent-video')[videos_counter].textContent = '  [ ' + result + '%' + ' ] '
  }




  // document.querySelectorAll("#metadata-line")[ i / 2 ].insertAdjacentHTML("afterbegin", '<span class="percent">'+ '  [ ' + result + '%' + ' ] '+'</span>')

  // if ( document.querySelectorAll("#metadata-line > .percent-video")[ i / 2 ] === undefined) {

  //   document.querySelectorAll("#metadata-line")[ i / 2 ].insertAdjacentHTML("afterbegin", '<span class="percent-video">'+ '  [ ' + result + '%' + ' ] '+'</span>')

  // } else {
  //   // alert(321)
  // }










  //МЕНЯЕМ ЦВЕТА СТРОК КАЖДОРОГО РОЛИКА В ЗАВИСИМОСТИ ОТ ПОКАЗАТЕЛЯ result

  if ( result >= 0 && result < 15 ) {

    // videos[i].style.color = '#ff0000';
    document.querySelectorAll('.percent-video')[ i / 2 ].style.background = "#ff0000";

  }  else if ( result >= 15 && result <= 50 ) {

    // videos[i].style.color = '#ff8900'; 
    document.querySelectorAll('.percent-video')[ i / 2 ].style.background = "#FF9800";

  } else if ( result >= 51 && result <= 100 ) {

    // videos[i].style.color = '#8BC34A';
    document.querySelectorAll('.percent-video')[ i / 2 ].style.background = "#CDDC39";


  } else if ( result > 100 ) {

    // videos[i].style.color = '#00c400';
    videos[i].style.background = 'black';
    document.querySelectorAll('.percent-video')[ i / 2 ].style.background = "#4CAF50";
    videos[i].style.color = '#4CAF50';
    document.querySelectorAll('.percent-video')[ i / 2 ].style.color = "black";

    //ВЫВОД В КОНСОЛЬ: ПРОЦЕНТ > НАЗВАНИЕ > ССЫЛКА
    array_localstorage[array_counter] = '  [ ' + result + '%' + ' ] ' + video_title.textContent + ' || ' + video_title.parentElement.href
    array_counter++;
    // alert(array_localstorage[videos_counter])
  }


  //ПОЧЕМУ 2? ПОТОМУ, ЧТО ЮТУБ ГОВНО И К ИНФОРМАЦИИ О ПРОСМОТРАХ
  //ДОБАВЛЯЕТ ЕЩЕ КУЧУ ЛИШНЕЙ ИНФЫ, ЧЕРЕЗ КАЖДЫЙ РОЛИК.
  //ЭТУ ИНФУ Я СОРТИРУЮ И ПРОВЕРЯЮ ТОЛЬКО ЧЁТНЫЕ ЗНАЧЕНИЯ
  i += 2;
  videos_counter++;
}

  localStorage.setItem("a1", JSON.stringify(array_localstorage));


}

//test-minor