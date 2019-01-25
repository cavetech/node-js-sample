const Sentry = require('@sentry/node')
Sentry.init({ dsn: 'https://485af430310941b68a340198c51b52c6@sentry.io/1380006' })

var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  //response.send('Hello World!')
  Sentry.captureMessage(response)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
