
var calc=(function(){
    var arr=[];
    var operand="";
    return{
    add:function(){
        return arr[0]+arr[1];
    },
    mul:function(){
        return n1*n2;
    },
    div:function(){
        return n1/n2;
    },
    sub:function(){
        if(n1>n2){
        return n1-n2;}
        return n2-n1;
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
    document.getElementById("input").value="1";
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
    
}
