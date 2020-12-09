
const wordWrap = ( s , maxChar ) => {
    let st = 0, end = 0 , sum = 0;
    while( end <= s.length ){
        sum = sum + s[end] + 1;
        if( sum > maxChar ){
            console.log(st+1, end);
            sum = s[end] + 1;
            st = end;
        }
        end++;
    }
    console.log(st+1, end);
}

wordWrap([3, 2, 2] , 2);