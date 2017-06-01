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


//servico email

/*
// Enviando e-mails usando o Node.js e o famoso nodemailer
var nodemailer = require('nodemailer');

// Vamos criar a conta que irá mandar os e-mails
var conta = nodemailer.createTransport({
    service: 'Gmail', // Existem outros services, você pode procurar
                      // na documentação do nodemailer como utilizar
                      // os outros serviços
    auth: {
        user: 'wesley150wow@gmail.com', // Seu usuário no Gmail
        pass: '150051147' // A senha da sua conta no Gmail :-)
    }
});

conta.sendMail({
    from: 'Wesley Azevedo <wesley150wow@gmail.com>', // Quem está mandando
    to: 'Wesley Azevedo <wesley150wow@gmail.com>', // Para quem o e-mail deve chegar
    subject: 'Estou testando seu gist', // O assunto
    html: '<strong>Oi Alan!</strong><p>Estou testando seu gist para enviar e-mails, amo você!</p>', // O HTMl do nosso e-mail
}, function(err){
    if(err)
        throw err;

    console.log('E-mail enviado!');
}); */