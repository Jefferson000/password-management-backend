#!/usr/bin/env node
var app = require("./app");
var debug = require("debug")("sgabackend:server");
var http = require("http");


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

/**
 * Used port from env
 */
const PORT = process.env.PORT;

/**
 * Set por to express
 */
app.set("port", PORT);

/**
 * bind
 */
const BIND = `Port ${PORT}`;

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(app.get("port"));
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(BIND + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(BIND + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  debug("Listening on " + app.get("port"));
  console.log("Listening on port " + app.get("port"));
}
