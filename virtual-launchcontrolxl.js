// Open Stage Control Custom Module
//
// Name: Sysex verification for MIDI device 
// Author: freddieventura
//
// Description:
// Some hardware MIDI devices "authenticate" with other gear by exchanging
// 2 Sysex messages , one is the ackRequest sent by the DAW or Master Device
// The MIDI Device will respond systematicaly with ackReply
// This Module automate this process , simply sniff the communication , grab
// the sysex on hexadecimal and replace the Variables
//
// i.e: novation launchcontrolxl sysex verification module

ackRequest = 'f0 7e 00 06 01 f7';
ackReply = 'f0 7e 00 06 02 00 20 29 61 00 00 00 00 00 05 09 f7';
midiOutput = 'virtual-launchcontrolxl' ;

module.exports = {

    oscInFilter:function(data){
        // Filter incoming osc messages
        var {address, args, host, port} = data
            // MIDI routing !
            if (host === 'midi' && address === '/sysex') {
                // simple conditions
                if (args[0].value == ackRequest) { 
					send('midi', midiOutput , '/sysex', ackReply);
				}
            }
        // return data if you want the message to be processed
        return {address, args, host, port};

    },

}
/* eof eof eof akai apc-mini sysex verification module eof eof eof */
