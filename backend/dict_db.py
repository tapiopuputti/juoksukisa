class dict_database:
    def __init__(self):
        self.results = [
            {
                'id' : 0, 
                'name' : 'Kalle Järvinen',
                'result' : '01:23:34',
                'distance' : '10km',
                'age' : '55'
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

    def sort_list(self):
        return self.results.sort(key = lambda x: x['result'])