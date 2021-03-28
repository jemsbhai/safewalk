from flask import Flask, request, redirect, session, url_for, Response, json, render_template, send_from_directory
from flask.json import jsonify
import json
import os
import random
import time
import requests
from flask_cors import CORS
from flask_ngrok import run_with_ngrok
import wayfinder


app = Flask(__name__)
app.config.from_object(__name__)
CORS(app)
run_with_ngrok(app)



@app.route("/getanotherroute", methods=['GET', 'POST'])
def getanotherroute():

    print(request)

    res = request.get_json()
    print (res)

    resraw = request.get_data()
    print (resraw)

    start = res['origin']
    lat = start['lat']
    lon = start['lon']
    

    end = res['dest']
    lat2 = end['lat']
    lon2 = end['lon']
    
    waypoints = []

    waypoints = wayfinder.getpath(lat, lon, lat2, lon2)


##    args = request.args
##    form = request.form
##    values = request.values

##    print (args)
##    print (form)
##    print (values)

##    sres = request.form.to_dict()
 

    status = {}
    status["server"] = "up"
    status["message"] = "some random message here"
    status["result"] = waypoints 

    statusjson = json.dumps(status)

    print(statusjson)

    js = "<html> <body>OK THIS WoRKS</body></html>"

    resp = Response(statusjson, status=200, mimetype='application/json')
    ##resp.headers['Link'] = 'http://google.com'

    return resp





@app.route("/dummyJson", methods=['GET', 'POST'])
def dummyJson():

    print(request)

    res = request.get_json()
    print (res)

    resraw = request.get_data()
    print (resraw)

##    args = request.args
##    form = request.form
##    values = request.values

##    print (args)
##    print (form)
##    print (values)

##    sres = request.form.to_dict()
 

    status = {}
    status["server"] = "up"
    status["message"] = "some random message here"
    status["request"] = res 

    statusjson = json.dumps(status)

    print(statusjson)

    js = "<html> <body>OK THIS WoRKS</body></html>"

    resp = Response(statusjson, status=200, mimetype='application/json')
    ##resp.headers['Link'] = 'http://google.com'

    return resp





@app.route("/dummy", methods=['GET', 'POST'])
def dummy():

    ##res = request.json

    js = "<html> <body>OK THIS WoRKS</body></html>"

    resp = Response(js, status=200, mimetype='text/html')
    ##resp.headers['Link'] = 'http://google.com'

    return resp

@app.route("/api", methods=["GET"])
def index():
    if request.method == "GET":
        return {"hello": "world"}
    else:
        return {"error": 400}


if __name__ == "__main__":
    # app.run(debug=True, host = '150.136.136.201', port = 8002)
    # app.run(debug=True, host = '45.79.199.42', port = 8002)
    app.run(debug=True, host = 'localhost', port = 8002)
