const cluster=require('cluster');
const numCPU=require('os').cpus().length;
const server=require('./server');

const app={};
app.init=function(){
    if(cluster.isMaster){
        for(let i=0;i<numCPU;i++){
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