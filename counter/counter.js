class Counter{
    constructor(){
        this.count=0;
        this.interval=null;
    }
    start(){
        if(!this.interval){
            this.interval=setInterval(()=>{
                this.count++;
                this.show();
            },1000)
        }
    }
    stop(){
        if(this.interval){
            clearInterval(this.interval)
            this.interval=null;
        }
    }
    show(){
        document.getElementById("count").innerText=this.count
    }
    increment1(){
        if(!this.interval){
           
            this.count++
            this.show()
        }
    }
    decrementt1(){
        if(!this.interval){
           
            this.count--;
            this.show()
        }
    }
}

let counterr= new Counter();

document.getElementById("toggle").addEventListener("click",(e) => {
    if(e.target.textContent==="Start"){
        counterr.start()
        e.target.textContent="Stop";
    }
    else{
        counterr.stop();
        e.target.textContent="Start";
    }
});
document.getElementById("increment").addEventListener("click",function(){
   counterr.stop();
   counterr.increment1()
})
document.getElementById("decrement").addEventListener("click",function(){
    counterr.stop();
    counterr.decrementt1()
 })
 
