function mcd(x,y){
    if ( y>x ){
        [x,y]=[y,x];
    }

    if ( x % y != 0){
        [x,y] = [y,x % y];
        mcd(x,y);
    }
    
    return y;
}

let n = 0.458;
let i = 0;

do{
    n *= 10;
    i++;
} while ( n*10 % 10)

let m = 10**i;

console.log(n+" "+m)

let p = mcd(n,m)

console.log(p);

while( true ){

    let p = mcd(n,m)

    console.log(p);

    if ( p == 1 ){
        break;
    } else{
        n /= p;
        m /= p;
    }
}

console.log(n+"/"+m)




