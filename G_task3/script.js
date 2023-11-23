function display(val)
{
    myform.calculate.value +=val
}
function clear_all()
{
    alert("You have click on clear all button")
    myform.calculate.value=''
}
function result()
{
    ans=eval(myform.calculate.value)
    if(ans==Infinity)
    {
        alert("can't divide by zero")
        myform.calculate.value=''
    }
    if(ans==undefined)
    {
        alert("Enter some input")
        myform.calculate.value=''
    }
    else{
        myform.calculate.value=ans;
    }
}
