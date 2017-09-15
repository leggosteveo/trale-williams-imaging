var express = require('express');

// Define the port to run on
app.set('port', (process.env.PORT || 5000));




// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/fonts', express.static(__dirname + '/fonts'));