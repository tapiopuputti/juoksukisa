class dict_database:
    def __init__(self):
        self.results = [
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

    def sort_list(self):
        return self.results.sort(key = lambda x: x['result'])