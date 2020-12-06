$("#run").click(function () { 
    var n = $("#input-number").val();

    if(n % 3 === 0 && n % 5 === 0){
        $("#output").text("FizzBuss");
    }
    else if(n % 3 === 0){
        $("#output").text("Fizz");
    }
    else(n % 5 === 0){
        $("#output").text("Buzz");
    }

});