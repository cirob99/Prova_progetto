$(document).ready(function() { 

//VARIANTE 1 FUNZIONANTE con semplice chiamata ajax a google api

var rosa = "Q0-KzQEACAAJ"; 
// id casuale per prova: daHuJgRmXT0C 

		$.ajax({
			url: ("https://www.googleapis.com/books/v1/volumes/"+ rosa),
			type: "GET",
			dataType: 'json' // formato dei dati della response
		})

		.done(function (response) { 
			// html for listing products
			console.log(response)
            console.log(response.kind)
	
			var read_products_html=`

				<!-- start table -->
				<table class='table table-bordered table-hover'>
					<tr>
						<th class='w-15-pct'>Titolo</th>
						<th class='w-10-pct'>Autore</th>
						<th class='w-15-pct'>Categoria</th>
						<th class='w-25-pct'>Descrizione</th>
					</tr>
                    <tr>
							<td>` + response.volumeInfo.title + `</td>
							<td>` + response.volumeInfo.authors + ` euro</td>
							<td>` + response.volumeInfo.categories + `</td>
							<td>` + response.volumeInfo.description + `</td>
					</tr>
                    </table>`

			// inject to 'page-content' of our app
			$("#page-content").html(read_products_html);

			// chage page title
			changePageTitle("Read all");
		})    

		.fail(function (xhr, resp, text) {
			// show error to console
			console.log(xhr,resp,exc);
		});
		return false;
})


