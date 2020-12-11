import json

class dict_database:
    def __init__(self):
        # Read results data from json file
        self.results = self.read_json()

    def sort_list(self):
        # Sort results according to runner's result time
        return self.results.sort(key = lambda x: x['result'])

    def write_json(self):
        # Write results to json file
        with open('results.json', 'w') as file_out:
            json.dump(self.results, file_out)

    def read_json(self):
        # Read results from json file
        with open('results.json','r') as file_in:
            loaded_DB = json.load(file_in)
            return loaded_DB

if __name__ == '__main__':
    # Initialize results data and write it to json file "results.json"
    results = [
        {
            'id' : 0, 
            'name' : 'Kalle Järvinen',
            'result' : '01:23:34',
            'distance' : '10km',
            'age' : '51'
        },
        {
            'id' : 1, 
            'name' : 'Pentti Mielonen',
            'result' : '02:11:04',
            'distance' : '10km',
            'age' : '29'
        },
        {
            'id' : 2, 
            'name' : 'Jukka Keimola',
            'result' : '01:09:31',
            'distance' : '10km',
            'age' : '19'
        },
        {
            'id' : 3, 
            'name' : 'Heikki Kinnunen',
            'result' : '02:09:51',
            'distance' : '10km',
            'age' : '41'
        },
        {
            'id' : 4, 
            'name' : 'Olli Ojala',
            'result' : '01:53:21',
            'distance' : '10km',
            'age' : '23'
        },
        {
            'id' : 5, 
            'name' : 'Veikko Huopalainen',
            'result' : '03:00:55',
            'distance' : '10km',
            'age' : '34'
        }
    ]

    with open('results.json', 'w') as file_out:
        json.dump(results, file_out)