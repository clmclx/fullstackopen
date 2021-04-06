1/browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    application/x-www-form-urlencoded with entry note=noteName which is used by the server to create a new entry in data.json
2/browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
3/server-->browser: HTML-code
    The code replied by the server is essentially the same as when we first had to add the new note noteName
4/server-->browser: main.js
    the script creates the list of notes from the GET method on "/exampleapp/data.json"
    