var express = require('express');
var app = express();

newsongimg: {
	img: ''
};

axios.get(uar + '/personalized/newsong?limit=6')
	.then(function (res) {
		var newsongList = res.data.result;
		for (var i = 0; i < newsongList.length; i++) {
			newsongimg[i].img = newsongList[i].picUrl;
		}
	})
	.catch(function (error) {

	});

app.get('/', function (req, res) {
	newsongimg
})

var server = app.listen(8081, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("应用实例，访问地址为 http://%s:%s", host, port)

})