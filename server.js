var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')
var port = process.env.PORT || 5000;

var contentTypes = {
  'html' : 'text/html',
  'css'  : 'text/css',
  'ico'  : 'images/x-icon',
  'png'  : 'images/png',
  'svg'  : 'images/svg+xml',
  'js'   : 'application/javascript',
  'otf'  : 'application/x-font-otf',
  'ttf'  : 'application/x-font-ttf',
  'eot'  : 'application/vnd.ms-fontobject',
  'woff' : 'application/x-font-woff',
  'woff2': 'application/font-woff2',
  'zip'  : 'application/zip'
}


http.createServer(function (request, response) {
	var caminho = url.parse(request.url).pathname;

	if (caminho==='/') {
		var ficheiro = path.join(__dirname, 'public', caminho, 'index.html');
   	} else {
		var ficheiro = path.join(__dirname, 'public', caminho);
   	}
	console.log('path = '+caminho);

	fs.readFile(ficheiro, function (erro, dados) {
  	if (erro) {
    	response.writeHead(404);
    	response.end();
  	} else {
    	var extensao = path.extname(ficheiro).slice(1);
    	response.end(dados);
  	}
});

}).listen(port,function () {
  console.log('--- O servidor arrancou –--');
  console.log('porta:'+port);
});

