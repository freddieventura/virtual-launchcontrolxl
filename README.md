# virtual-launchcontrolxl
Midi device created with open stage control , compatible with Ableton and Novation LaunchControlXL software


Note: There is no will at all to make any earnings out of it, just so you guys can enjoy the experience as close as  having the Real Hardware, but just with a touchscreen, so you can work remotely whenever you don't have access to the Real Hardware you have previously purchased.

I have spent countless of hours trying to understand how everything of this works, to put it all together, but surely the rest of devs of [Open Stage Control](https://github.com/jean-emmanuel/Open-Stage-Control/) have spent  just a bit more hours than me doing **o-s-c**  . In conjunction of our superpowers , we have brought you this amazing Software Stack , completely for Free !!



### Usage Instructions

1 - Download the repo files
2 - Create Virtual Midi Ports for In and Out 
  If using Windows Use  [loopMIDI](https://www.tobias-erichsen.de/software/loopmidi.html)
3 - Run the command (note pathnames and virtual MIDI port names should be the ones you setted) 
.\open-stage-control-1.10.3-win32-x64\open-stage-control.exe -- --debug --midi sysex virtual-launchcontrolxl:virtual-launchcontrolxl-out,virtual-launchcontrolxl-in -c .\virtual-launchcontrolxl.js --load .\virtual-launchcontrolxl.json
4 - Enjoy it with Ableton Live


### Bonus functionality


Check the Custom Script [Isotonik Launch Control XXL](https://isotonikstudios.com/product/launchcontrol-xxl/) , it allows you to create 32 Knobs , Parameter mappings. 
