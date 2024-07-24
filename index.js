document.write('<h2>Heading</h2>');
document.write('<hr>')
for(var num = 1; num <=6; num++){
    document.write('<h'+num+'>This is header number'+num+'</h'+num+'>');
}

var sum = 0
do{
    var e= prompt("Enter a number:");
    var n = +e;
    
    if(!isNaN (n)){
        sum += n;
    }

}while( n !==0 && sum < 100);
alert("the final total is" + sum);
