function spawn_additional_block(){


	if (document.querySelector('.additional-div') == undefined) {

	document.querySelector("#buttons").insertAdjacentHTML("afterbegin", '<div class="additional-div" style="position: absolute; top: 0; left: 700px; overflow-y: scroll; height: 400px;"> <button>HELLO WORLD!</button> <div class="additional-div-videos"> <table style="background:#d892dc;"> <tbody class="videos-list"> <tr> <td>111</td> <td>222</td> <td>333</td> <td>444</td> <td>555</td> </tr> </tbody> </table> </div> </div>')

	} else {

		document.querySelector('.additional-div').remove()

	}


}