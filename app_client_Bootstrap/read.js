$(document).ready(function() { 

	//chiamata ajax al servizio rest read_all
	/*$.ajax({
		url: "http://localhost/Prova_progetto/api_server/api/read_all.php",
		type: "GET",
		dataType: 'json' // formato dei dati della response
	})*/


	//VARIANTE 1 FUNZIONANTE visualizzazione di una riga della tabella tramite chiamata ajax a google api
		$.ajax({
			url: "https://www.googleapis.com/books/v1/volumes/Q0-KzQEACAAJ",
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

	//variante 2 NON funzionante
	/*var request = $.ajax({
		url: 'https://www.googleapis.com/books/v1/volumes/volumeId',
		type: 'GET',
		data: { volumeId: "Q0-KzQEACAAJ"} ,
		contentType: 'json'
	});
	
	request.done(function(response) {
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
		}) */
	
	
	//});
})
