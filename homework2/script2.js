function task1() {
    let number=prompt('Enter the number:');
    let a=0
    for(i=1;i<=number;i++) {
        a+=i
    }
    console.log(`The sum is ${a}`);
}
//task1();

function task2(){
    let b=1;
    for(i=1;i<=5;i++){
        b*=i
    }
    console.log('The product of numbers from 1 to 5 is ' + b);
}
//task2();

function task3(){
    let n=prompt('Enter the number:');
    for(i=1;i<=n;i++){
        console.log('Hello World! ' + i);
    }
}
//task3();

function task4(){
    let x=prompt('Enter the number:');
    for(i=1;i<=x;i++){
        if(i%3==0){
            console.log(i);
        }
    }
}
//task4();

function task5(){
    let myNumber=prompt('Enter the number:');
    let sum=0
    for(i=1;i<=myNumber;i++){
        if(i%3==0){
            sum+=i
        }
    }
    console.log(sum);
}
//task5();