function video_list(result, video_title, video_url, video_thumbnail) {

	video_list_table = document.querySelector(".videos-list")

	// video_list_table.innerHTML = ''

	video_list_table.insertAdjacentHTML("afterbegin", `

			<tr>
				<td style="padding: 10px;"><h2>`+ result +`</h1></td>
				<td style="padding: 10px;"><h2><a href="`+ video_url +`">`+ video_title +`</a></h1></td>
				<td style="padding: 10px;"><img style="max-width: 150px;" src="`+ video_thumbnail +`"  href="`+ video_url +`"></td>
			</tr>


		`)

 }

 //test-minor процент преввью просмотры название удалить