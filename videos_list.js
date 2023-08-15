function video_list(result, video_title, video_url, video_thumbnail) {

	video_list_table = document.querySelector(".videos-list")


	// video_list_table.innerHTML = ''

	video_list_table.insertAdjacentHTML("afterbegin", `

			<tr>
				<td><h1>`+ result +`</h1></td>
				<td><h1 href="`+ video_url +`">`+ video_title +`</h1></td>
				<td><img style="max-width: 150px;" src="`+ video_thumbnail +`"  href="`+ video_url +`"></td>
				<td> DELETE </td>
			</tr>


		`)

 }

 //test-minor процент преввью просмотры название удалить