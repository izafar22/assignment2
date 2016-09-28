
var calc=(function(){
    
    var arr=[];
    var operand="";
    
    return{
    add:function(){
        return arr[0]+arr[1];
    },
    mul:function(){
        return arr[0]*arr[1];
    },
    div:function(){
        return arr[0]/arr[1];
    },
    sub:function(){
        if(arr[0]>arr[1]){
        return arr[0]-arr[1];}
        return arr[1]-arr[0];
    },
    setinputs:function(input){
        n1=0;
    },    
    setOperand:function(operator){
        operand=operator;
    },
    getOperand:function(){
            return operand;
        },
        pushComnpute:function(input){
        arr.push(input);
    },
    getarr:function(){
        return arr;
    }
}
        
    
})();

//DOM//
document.getElementById("1").onclick=function(){
    //console.log(document.getElementById("input").value);
    document.getElementById("input").value+="1";
};
document.getElementById("2").onclick=function(){
    document.getElementById("input").value+="2";
};
document.getElementById("3").onclick=function(){
    document.getElementById("input").value+="3";
};
document.getElementById("4").onclick=function(){
    document.getElementById("input").value+="4";
};
document.getElementById("5").onclick=function(){
    document.getElementById("input").value+="5";
};
document.getElementById("6").onclick=function(){
    document.getElementById("input").value+="6";
};
document.getElementById("7").onclick=function(){
    document.getElementById("input").value+="7";
};
document.getElementById("8").onclick=function(){
    document.getElementById("input").value+="8";
};
document.getElementById("9").onclick=function(){
    document.getElementById("input").value+="9";
};
document.getElementById("0").onclick=function(){
    document.getElementById("input").value+="0";
};
document.getElementById("+").onclick=function(){
    calc.setOperand("+");
    console.log(calc.getOperand());
    var input=parseInt(document.getElementById("input").value);
    document.getElementById("input").value=null;
    console.log(input);
    calc.pushComnpute(input);
    console.log(calc.getarr());    
};
document.getElementById("-").onclick=function(){
    calc.setOperand("-");
    console.log(calc.getOperand());
    var input=parseInt(document.getElementById("input").value);
    document.getElementById("input").value=null;
    console.log(input);
    calc.pushComnpute(input);
    console.log(calc.getarr());    
};
document.getElementById("=").onclick=function(){
    calc.pushComnpute(parseInt(document.getElementById("input").value));
    console.log(calc.getarr());
    if(calc.getOperand()=="+"){
        document.getElementById("input").value=calc.add();
    }
    else if(calc.getOperand()=="*"){
        document.getElementById("input").value=calc.mul();
    }
    else if(calc.getOperand()=="/"){
        document.getElementById("input").value=calc.div();
    }
    else if(calc.getOperand()=="-"){
        document.getElementById("input").value=calc.sub();
    }
    else
    {
        console.log("invalid operand");
    }
}
