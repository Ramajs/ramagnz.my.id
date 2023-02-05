__path = process.cwd()

// module
var express = require('express');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();

// Lib
var { fetchJson, getBuffer } = require('../lib/myfunc');

// Settings
const listkey = ["ramagnz","rama"];
const author = "Danzz inc."

// Mess err
mess = {
    error: {
        status: false,
        code: 503,
        message: 'Error, Service Unavaible',
        maintanied_by: 'Danzz Coding'
    },
    noturl: {
    	status: false,
    	code: 403,
    	message: 'Error, Invlid Url',
    	maintanied_by: 'Danzz Coding'
    },
    nottext: {
    	status: false,
    	code: 403,
    	message: 'Error, Invlid Text',
    	maintanied_by: 'Danzz Coding'
    },
    nottext1: {
    	status: false,
    	code: 403,
    	message: 'Error, Invlid Text 1',
    	maintanied_by: 'Danzz Coding'
    },
    nottext2: {
    	status: false,
    	code: 403,
    	message: 'Error, Invlid Text 2',
    	maintanied_by: 'Danzz Coding'
    },
    notnum: {
    	status: false,
    	message: 'Enter Num',
    	maintanied_by: 'Danzz Coding'
    },
    notpage: {
    	status: false,
    	message: 'Enter Page',
    	maintanied_by: 'Danzz Coding'
    },
    notmoji1: {
    	status: false,
    	code: 403,
    	message: 'Error, Invlid Emoji 1',
    	maintanied_by: 'Danzz Coding'
    },
    notmoji2: {
    	status: false,
    	code: 403,
    	message: 'Error, Invlid Emoji 2',
    	maintanied_by: 'Danzz Coding'
    },
    notquery: {
    	status: false,
    	code: 403,
    	message: 'Error, Invlid Query',
    	maintanied_by: 'Danzz Coding'
    },
    notapikey: {
    	status: false,
    	code: 403,
    	message: 'Error, Invalid Apikey, Please Check The Apikey In Dash',
    	maintanied_by: 'Danzz Coding'
    },
    notapikeyprem: {
    	status: false,
    	code: 403,
    	message: 'Error, Invalid Apikey, You Are Not A Premium User, Buy In Pricing',
    	maintanied_by: 'Danzz Coding'
    },
    notapikeyvip: {
    	status: false,
    	code: 403,
    	message: 'Error, Invalid Apikey, You Are Not A VIP User, Buy In Pricing',
    	maintanied_by: 'Danzz Coding'
    },
    notfound: {
    	status: false,
    	code: 404,
    	message: 'Error, Not Found',
    	maintanied_by: 'Danzz Coding'
    },
    notid: {
    	status: false,
    	code: 404,
    	message: 'Error, Invalid Id or Username',
    	maintanied_by: 'Danzz Coding'
    },
    ready: {
    	status: false,
    	code: 403,
    	message: 'Error, ​​Already In Use',
    	maintanied_by: 'Danzz Coding'
    }
}

// Variable
/*!
* var apikey = req.query.apikey
* var query = req.query.q
* var text = req.query.text
* var url = req.query.url
*/

// Features
// Downloader
router.get('/downloader/facebook', async (req, res, next) => {
	var apikey = req.query.apikey
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	if (!apikey) return res.json(mess.notapikey)
	if(listkey.includes(apikey)){
	
	let data = await fetchJson(`https://danzzapi.xyz/api/downloader/facebook?url=${url}&apikey=danzz`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
} else {
  res.json(mess.notapikey)
}
})

router.get('/downloader/soundcloud', async (req, res, next) => {
	var apikey = req.query.apikey
	var url = req.query.url
	if (!url) return res.json(mess.noturl)
	if (!apikey) return res.json(mess.notapikey)
	if(listkey.includes(apikey)){
	
	let data = await fetchJson(`https://danzzapi.xyz/api/downloader/soundcloud?url=${url}&apikey=danzz`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
} else {
  res.json(mess.notapikey)
}
})

// Asupan
router.get('/asupan/santuy', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/asupan/santuy?apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'video/mp4');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

router.get('/asupan/bocil', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/asupan/bocil?apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'video/mp4');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

router.get('/asupan/hijaber', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/asupan/hijaber?apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'video/mp4');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

router.get('/asupan/ukhty', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/asupan/ukhty?apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'video/mp4');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

// Cecan
router.get('/cecan/hijaber', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/cecan/hijaber?apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

router.get('/cecan/indonesia', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/cecan/indonesia?apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

router.get('/cecan/malaysia', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/cecan/malaysia?apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

router.get('/cecan/japan', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/cecan/japan?apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

// Cogan
router.get('/cogan/random', async (req, res, next) => {
var apikey = req.query.apikey
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/cogan/random?apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

// Search
router.get('/search/pinterest', async (req, res, next) => {
	var apikey = req.query.apikey
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	if (!apikey) return res.json(mess.notapikey)
	if(listkey.includes(apikey)){
	
	let data = await fetchJson(`https://danzzapi.xyz/api/search/pinterest?query=${query}&apikey=danzz`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
} else {
  res.json(mess.notapikey)
}
})

router.get('/search/google', async (req, res, next) => {
	var apikey = req.query.apikey
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	if (!apikey) return res.json(mess.notapikey)
	if(listkey.includes(apikey)){
	
	let data = await fetchJson(`https://danzzapi.xyz/api/search/google?query=${query}&apikey=danzz`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
} else {
  res.json(mess.notapikey)
}
})

router.get('/search/googleimage', async (req, res, next) => {
	var apikey = req.query.apikey
	var query = req.query.q
	if (!query) return res.json(mess.notquery)
	if (!apikey) return res.json(mess.notapikey)
	if(listkey.includes(apikey)){
	
	let data = await fetchJson(`https://danzzapi.xyz/api/search/googleimage?query=${query}&apikey=danzz`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
} else {
  res.json(mess.notapikey)
}
})

// Canvas
router.get('/canvas/biden', async (req, res, next) => {
var apikey = req.query.apikey
var text = req.query.text
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/canvas/biden?text=${text}apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

router.get('/canvas/facts', async (req, res, next) => {
var apikey = req.query.apikey
var text = req.query.text
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/canvas/facts?text=${text}&apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

router.get('/canvas/oogway', async (req, res, next) => {
var apikey = req.query.apikey
var text = req.query.text
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/canvas/oogway?text=${text}&apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

router.get('/canvas/sadcat', async (req, res, next) => {
var apikey = req.query.apikey
var text = req.query.text
if(!apikey) return res.json(mess.notapikey)
if(listkey.includes(apikey)){
	
var requestSettings = {
url: `https://danzzapi.xyz/api/canvas/sadcat?text=${text}&apikey=danzz`, method: 'GET', encoding: null };
request(requestSettings, function(error, response, body) {
res.set('Content-Type', 'image/png');
res.send(body)
})
} else {
  res.json(mess.notapikey)
}
})

// Ramdom
router.get('/random/meme', async (req, res, next) => {
	var apikey = req.query.apikey
	if (!apikey) return res.json(mess.notapikey)
	if(listkey.includes(apikey)){
	
	let data = await fetchJson(`https://danzzapi.xyz/api/random/meme?apikey=danzz`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
} else {
  res.json(mess.notapikey)
}
})

router.get('/random/quotes', async (req, res, next) => {
	var apikey = req.query.apikey
	if (!apikey) return res.json(mess.notapikey)
	if(listkey.includes(apikey)){
	
	let data = await fetchJson(`https://danzzapi.xyz/api/random/quotes?apikey=danzz`)
	res.json({
	status: true,
	author: `${author}`,
	result: data.result
	})
} else {
  res.json(mess.notapikey)
}
})

module.exports = router
