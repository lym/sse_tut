## sse_tut
Simple Sinatra app implementing server sent events to send out
notifications to subscibed clients.

## Tools used
* haml for templating
* thin as the web server
* The EventSource js API for SSE's
* jquery-notify for client-side popups

## Usage
* pull down the project files
* cd to the root directory
* Run stream.rb which should fire up Thin
* in your browser, open a couple of windows, pointing at '/'
* in another browser window, navigate to /admin, type a message, submit
  it, and watch it appear simulataneously in all the open client
windows.
