console.log("hello world");
window.alert("welcome to my dream world!");
function area(length, width){
    Area = length*width;
    return Area;
}
console.log(area(5,3));

function exercise2(num1,num2){
    sum = num1+num2;
    if(num1===num2)
    {
        return sum*3;
    }
    else{
        return sum;
    }
}

console.log(exercise2(2,2));
console.log(exercise2(1,2));

function exercise3(num1,num2){
    sum = num1+num2;
    console.log(num1);
    console.log(num2);
    console.log(sum);
    if(sum===50)
    {
        return true;
    }else if (num1===50 || num2===50){
        return true;
    }
    else return false;
}

console.log(exercise3(Math.floor((Math.random()*51)) ,Math.floor((Math.random()*51))))

function exercise4(voltage,current)
{
    return voltage*current;
}
console.log("Power = "+exercise4(6,3));

function exercise5(){
    isless = true;
    randnum = Math.floor(Math.random()*11);
    console.log(randnum);
    if(randnum<5)
    {
        isless = true;

    }
    else if(randnum>5)
    {
        isless = false;
    }
    if(isless===true)
    {
        return "The number is less than 5"
    }
    else if(isless===false){
        return "The number is greater than 5"
    }
}

console.log(exercise5())