# A command line todo app created with nodejs

## Features
### 1. Adding a new note:
Each note should have a title and body and each of them should be strings

> Command:
```
node app.js add --title="Title of your note" --body="body of your note"
```

### 2. Listing all the notes:
Lists titles of all the notes created before.
> Command:
```
node app.js list
```

### 3. Reading a particular note
Provide the title of the note you want to read and it will output that note.
> Command
```
node app.js read --title="Note title to be read"
```

### 4. Removing a note
Removes a note with the title provided as the command line argument
> Command:
```
node app.js remove --title="Note title to be removed"
```

