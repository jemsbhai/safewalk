import requests
import json


def getsafety(lat, lng):

    url = "https://api.crimeometer.com/v1/incidents/raw-data"

    querystring = {"lat":str(lat),"lon":str(lng),"distance":"500ft","datetime_ini":"%202020-03-01%27T%2700:%2000:%2000.0","datetime_end":"%202021-03-25%27T%2700:%2000:%2000.0"}

    payload = ""
    headers = {
        'Content-Type': "application/json",
        'x-api-key': "REDACTEDKEY",
        'cache-control': "no-cache",
        'Postman-Token': "a8cc9ea4-d519-4e05-bfe7-db797add269f"
        }


    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

    print(response.text)

    js = json.loads(response.text)

    t = js['total_incidents']
    return t




def getpoints(rj, n):

    r = rj['routes'][n]
    # if not r:
    #     return []

    legs = []


    for l in r['legs']:
        steps = l['steps']
        for s in steps:
            lat = s['start_location']['lat']
            lon = s['start_location']['lng']
            point = {}
            point['lat'] = lat
            point['lon'] = lon

            
            ##test safety
            sf = getsafety(lat, lon)
            if sf > 3:
                return getpoints(rj, n+1)

            legs.append(point)

            lat = s['end_location']['lat']
            lon = s['end_location']['lng']
            point = {}
            point['lat'] = lat
            point['lon'] = lon

            ##test safety

            sf = getsafety(lat, lon)
            if sf > 3:
                return getpoints(rj, n+1)

            legs.append(point)
        
    print(legs)
    return legs











def getpath(lat, lng, lat2, lng2):
    url = "https://maps.googleapis.com/maps/api/directions/json"

    deststr = str(lat2) + "," + str(lng2)
    originstr = str(lat) + "," + str(lng)

    querystring = {"destination":deststr,"key":"KEYREDACTEDFORSAFETY","mode":"walking","origin":originstr}

    payload = ""
    headers = {
        'cache-control': "no-cache",
        'Postman-Token': "b4250437-dbc0-4a03-85cb-211915a2c287"
        }

    response = requests.request("GET", url, data=payload, headers=headers, params=querystring)

    print(response.text)

    rj = json.loads(response.text)

    legs = getpoints(rj, 0)

    return legs