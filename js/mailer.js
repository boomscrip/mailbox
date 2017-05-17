function mailer(from, subject, content) {
	var helper = require('sendgrid').mail;
	var fromEmail = new helper.Email(from);
	var toEmail = new helper.Email('main@spodvorie.ru');
	var subject = subject || 'Hello World from the SendGrid Node.js Library!';
	var content = new helper.Content('text/plain', content || 'Hello, Email!');
	var mail = new helper.Mail(fromEmail, subject, toEmail, content);

	var SENDGRID_API_KEY = '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';
	var sg = require('sendgrid')(SENDGRID_API_KEY);

	var request = sg.emptyRequest({
	  method: 'POST',
	  path: '/v3/mail/send',
	  body: mail.toJSON()
	});

	sg.API(request, function (error, response) {
	  if (error) {
	    console.log('Error response received');
	  }
	  console.log(response.statusCode);
	  console.log(response.body);
	  console.log(response.headers);
	});
}

console.log(mailer('expfront@gmail.com'))
module.exports = mailer
