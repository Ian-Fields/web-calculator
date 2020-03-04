function showresult(val){
    var n1=parseFloat(document.getElementById('num1').value)
    var n2=parseFloat(document.getElementById('num2').value)
    
    var c=val
    
    switch(c)
        {
        case '1':
            var r=n1+n2
            break
        case '2':
            var r=n1-n2
            break
        case '3':
            var r=n1*n2
            break
        case '4':
            var r=n1/n2
            break
        default:
            break    
        }
    
    document.getElementById('result').value=r

    }
