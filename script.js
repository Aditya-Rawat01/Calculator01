var btn=document.querySelectorAll("button");
var h4=document.querySelector("h4");
var str=""; var flag="+-*/%.";
btn.forEach(function(index){
    index.addEventListener("click",function(){
        if (index.textContent!="AC" && index.textContent!="C" && index.textContent!="=" && index.textContent!="+/-") {
            if (str=="Error" || h4.innerHTML==0) {str=index.textContent;} 
            else if (flag.includes(index.innerHTML) && flag.includes(str.charAt(str.length-1))){
               str=str.substring(0, str.length-1);
               str+=index.textContent;
            }
           else { str+=index.textContent;}
        }
        
        else if (index.textContent=="=") {
            if (h4.innerHTML=="Error" || h4.innerHTML=="") {str="Error"}
           else{ try {str=eval(h4.innerHTML)}
            catch(e){str="Error"};}
            
        } else if(index.textContent=="AC") {
            str="";
        } else if (index.textContent=="C") {
            str=str.substring(0,str.length-1);
           
        } else if (index.textContent=="+/-") {
            if (str.length!=0) {str=String(-str);}
            
        }
        str=String(str);
        if (str=="NaN" || str=="Infinity") {str="Error"};
        h4.innerHTML=str;
        
    })
})




