import os
import webbrowser

webbrowser.register('/usr/bin/chromium-browser',None)
webbrowser.get('chromium-browser')
webbrowser.open('/home/pi/Documents/simple/SimpleMirror/index.html', new=1)