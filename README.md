# SimpleMirror
A simple version of the popular MagicMirror application.
SimpleMirror is a basic web page using JavaScript to show info like date/time, weather, and news feeds on a monitor positioned behind a pane of one way glass.
This creates the illusion of a "Magic Mirror".

## Why...
I spent far too long trying to use frameworks like Angular and React to create my own version of the MagicMirror application.
So after many failed attempts, I decided to simply use plain Javascript to create my mirror application which i'm dubbing "SimpleMirror".

## Hardware
I run this with a RaspberryPi zero-w, but it could be run on any RaspberryPi with wifi capability. The pin may change between RPIs for the PIR motion sensor.

## PI Setup
I used the latest Rasbian OS to run the app. The image came with Chromium which works well for SimpleMirror.

In the Chromium config flags, you can add "--start-fullscreen" to force Chromium to start in fullscreen.

I used python and bash scripts to automate the mirror and PIR sensor startup