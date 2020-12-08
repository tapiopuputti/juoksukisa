from flask import Flask

# Create a flask object
app = Flask(__name__)

# Return all results
@app.route('/api/results')
def results():
    results = [
        {
            'id' : 0, 
            'name' : 'Kalle Järvinen',
            'result' : '01:23:34',
            'distance' : '10km' 
        },
        {
            'id' : 1, 
            'name' : 'Pentti Mielonen',
            'result' : '02:11:04',
            'distance' : '10km' 
        },
        {
            'id' : 2, 
            'name' : 'Jukka Keimola',
            'result' : '01:09:31',
            'distance' : '10km' 
        },
        {
            'id' : 3, 
            'name' : 'Heikki Kinnunen',
            'result' : '02:09:51',
            'distance' : '10km' 
        },
        {
            'id' : 4, 
            'name' : 'Olli Ojala',
            'result' : '01:53:21',
            'distance' : '10km' 
        },
        {
            'id' : 5, 
            'name' : 'Veikko Huopalainen',
            'result' : '03:00:55',
            'distance' : '10km' 
        }
    ]

    sort_list(results)

    # Flask requires the return value to be a dictionary, list does not work
    return { "data": [results] }

# Return specific results: e.g. distance/10km
@app.route('/<key>/<value>')
def matka(key, value):
    
    results = [
        {
            'id' : 0, 
            'name' : 'Kalle Järvinen',
            'result' : '01:23:34',
            'distance' : '10km' 
        },
        {
            'id' : 1, 
            'name' : 'Pentti Mielonen',
            'result' : '02:11:04',
            'distance' : '5km' 
        },
        {
            'id' : 2, 
            'name' : 'Jukka Keimola',
            'result' : '01:09:31',
            'distance' : '10km' 
        },
        {
            'id' : 3, 
            'name' : 'Heikki Kinnunen',
            'result' : '02:09:51',
            'distance' : '10km' 
        },
        {
            'id' : 4, 
            'name' : 'Olli Ojala',
            'result' : '01:53:21',
            'distance' : '1km' 
        },
        {
            'id' : 5, 
            'name' : 'Veikko Huopalainen',
            'result' : '03:00:55',
            'distance' : '1km' 
        }
    ]

    # Make a new list and wanted key & value
    new_list = []
    #key = 'distance'
    #value = '10km'

    # Search the dictionary for wanted information and append it to the new list
    for items in results:
        if items[key] == value:
            new_list.append(items)

    sort_list(new_list)

    return { "data": [new_list] }

# Sort list according to result time
def sort_list(results):
    return results.sort(key = lambda x: x['result'])

if __name__ == '__main__':
    app.run(debug = True)