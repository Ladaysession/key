// window.onload = function spawn_additional_block() {
// 	document.querySelector("#buttons").insertAdjacentHTML("afterbegin", '<div class="additional-div"> <button>HELLO WORLD!</button> <div class="additional-div-videos hidden" style="width:100px;height:100px;background:red;"> </div> </div>')

// 	additional_div = document.querySelector('.additional-div');

// additional_div.addEventListener('click', function(event) {
//     document.querySelector('.additional-div-videos').classList.remove("hidden");
// });

// window.onclick = function(event) {
//     if (!event.target.matches('.additional-div')) {

//         document.querySelector('.additional-div-videos').classList.add('hidden');

//     }
// }




// }

// document.querySelector('.testtest').addEventListener('click', function(event) {
// 	alert(123)
// });

function spawn_additional_block(){


	if (document.querySelector('.additional-div') == undefined) {

	document.querySelector("#buttons").insertAdjacentHTML("afterbegin", '<div class="additional-div"> <button>HELLO WORLD!</button> <div class="additional-div-videos"> <table style="background:red;"> <tbody class="videos-list"> <tr> <td>111</td> <td>222</td> <td>333</td> <td>444</td> <td>555</td> </tr> </tbody> </table> </div> </div>')

	} else {

		document.querySelector('.additional-div').remove()

	}


}