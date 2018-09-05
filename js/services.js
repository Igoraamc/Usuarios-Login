var services = {
	settings : {
		"async": true,
		"url": "",
		"type": "POST",
		"data": ""
	},
	settingsGet : {
		"async": true,
		"url": "",
		"type": "GET"
	},
	logar : function(object, callback) {
		services.settings.url = "https://reqres.in/api/login";
		services.settings.data = object;

		$.ajax(services.settings).done(function(response) {
			callback(response);
		});
	},
	listaDeUsuarios : function(page, callback) {
		services.settingsGet.url = "https://reqres.in/api/users?page="+page;

		$.ajax(services.settingsGet).done(function(response) {
			callback(response);
		});
	}
}