from flask import Flask
import dict_db

# Create a flask object
app = Flask(__name__)


# Return all results
@app.route('/api/results')
def results():
    data = dict_db.dict_database()
    data.sort_list()

    # Flask requires the return value to be a dictionary, list does not work
    return { "data": [data.results] }


# Return specific results: e.g. distance/10km
@app.route('/<key>/<value>')
def matka(key, value):

    data = dict_db.dict_database()

    # Make a new list and wanted key & value
    new_list = []
    #key = 'distance'
    #value = '10km'

    # Search the dictionary for wanted information and append it to the new list
    for items in data.results:
        if items[key] == value:
            new_list.append(items)

    sort_list(new_list)

    return { "data": [new_list] }

# Sort list according to result time
def sort_list(results):
    return results.sort(key = lambda x: x['result'])

if __name__ == '__main__':
    app.run(debug = True)