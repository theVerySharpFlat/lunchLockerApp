# lunchLockerApp

This is a mobile app developed for the FIRST Innovation Challenge that took place in the 2021 FIRST robotics season.

Teams were tasked with building a product that would help people be more physically active and encourage people to be healthier.
The design team on this project decided to build a safe that would store snacks and asked that the programming team build
an app that tracked fitness and opens the safe when fitness conditions are met.

This app was essentially my first major project, so please excuse the poor code quality.

Essentially, this app contains two main dependencies besides the Ionic framework: The Google fitness API and The Cordova BLE plugin
and the app connects the two together using Ionic.

The counterpart to this project can be found at
https://github.com/theVerySharpFlat/lunchLockerBLESystem which is the code that would run on a Raspberry Pi in the safe and recieve
BLE data from the app to know whether or not to unlock the safe.
