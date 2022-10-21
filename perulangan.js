//perulangan
let a = "Apa";
let b = "boleh";
for(let i=1; i<=50; i++){
    if(i%3==0 && i%5==0){
        console.log(i+" "+a+b)
    }else if(i%3==0){
        console.log(i+" "+a)
    }else if(i%5==0){
        console.log(i+" "+b)
    }else {
        console.log(i)
    }
}

