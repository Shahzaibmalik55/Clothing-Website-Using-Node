/// <reference path="./typings/node/node.d.ts" />

import http = require("http");
import fs = require("fs");
import url = require("url");
import qs = require("querystring");


var server:http.Server = http.createServer(function(req,res){
	if(req.url == "/"){
		fs.readFile("./index.html",function(err,data){
			if(err){
				console.log(err);
				res.end();
			}
			else{
				res.end(data.toString());
			}
		})
	}
	if(req.url == "/about.html"){
		fs.readFile("./about.html",function(err,data){
			if(err){
				console.log(err);
				res.end();
			}
			else{
				res.end(data.toString());
			}
		})
	}
	if(req.url == "/checkout.html"){
		fs.readFile("./checkout.html",function(err,data){
			if(err){
				console.log(err);
				res.end();
			}
			else{
				res.end(data.toString());
			}
		})
	}
	if(req.url == "/contact.html"){
		fs.readFile("./contact.html",function(err,data){
			if(err){
				console.log(err);
				res.end();
			}
			else{
				res.end(data.toString());
			}
		})
	}
	if(req.url == "/faqs.html"){
		fs.readFile("./faqs.html",function(err,data){
			if(err){
				console.log(err);
				res.end();
			}
			else{
				res.end(data.toString());
			}
		})
	}
	if(req.url == "/productdetail.html"){
		fs.readFile("./productdetail.html",function(err,data){
			if(err){
				console.log(err);
				res.end();
			}
			else{
				res.end(data.toString());
			}
		})
	}
	if(req.url == "/products.html"){
		fs.readFile("./products.html",function(err,data){
			if(err){
				console.log(err);
				res.end();
			}
			else{
				res.end(data.toString());
			}
		})
	}
	if(req.url == "/shoppingcart.html"){
		fs.readFile("./shoppingcart.html",function(err,data){
			if(err){
				console.log(err);
				res.end();
			}
			else{
				res.end(data.toString());
			}
		})
	}
	
}).listen(4000);
