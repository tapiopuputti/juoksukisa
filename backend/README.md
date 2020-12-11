Backend Python app for "juoksukisa".

Route "/api/results" returns a sorted (according to result times) list within a simple dictionary.
Route "/<key>/<value>" returns a sorted (according to result times) list matching given key and value
    e.g. "/distance/10km" returns all participants who ran 10km distance.