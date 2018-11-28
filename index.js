const cluster=require('cluster');
const numCPU=require('os');
const server=require('./server');

const app={};

//console.log(numCPU.constants.signals.SIGKILL);
var len=numCPU.cpus().length;
//console.log(numCPU.cpus());
//console.log(numCPU.endianness());
console.log(numCPU.freemem())
app.init=function(){
    if(cluster.isMaster){
        for(let i=0;i<len;i++){
            cluster.fork();
        }
        console.log(numCPU);
        return;
    }else{
        server.init();
    }
    console.log(`Workers ${process.pid} started`);
    
}
app.init();