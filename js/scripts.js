/* For doing this exercise, I got help from this website:
https://teamtreehouse.com/community/how-to-compare-3-values-in-javascript*/


function equal(a, b, c) {
    if ( a === b && b === c && a === c){
        console.log(3);
    } else if( a === b && b!== c && a !== c){
        console.log(2);
    } else if( a !== b && b === c && a !== c ){
        console.log (2);
    }
    else if( a !== b && b !==c && a === c ){
        console.log (2);
    }
    else {
        console.log(0);
    }
    }
    

    console.log(equal(4, 4, 4));
    console.log(equal(3, 4, 4));
    console.log(equal(2, 3, 4));




