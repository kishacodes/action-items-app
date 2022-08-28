<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Action Items App</title>
        <link rel="stylesheet" href="style.css" />
        
    </head>
    <body>
        <h1>Action Items</h1>
        <div id="app">
            <div>
                
                <label for="item">Action: </label>
                <input type="text" id="item" v-model="enteredValue" />
                <button v-on:click="addItem">Add item</button>
            </div>
            <ul>
                <li v-for="item in items">{{item}}</li>
            </ul> 
        </div>
        <script src="https://unpkg.com/vue@next"></script>
        <script src="app.js"></script>
    </body>
</html>