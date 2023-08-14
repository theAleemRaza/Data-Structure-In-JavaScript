function binary_search(array,data){

    var l = 0;
    var r = array.length - 1;
    
    while (l <= r){
    mid=Math.floor(( l+r )/2);
    if (data == array[mid]){
        return mid;
    }
    if (data < array[mid]){
        r=mid-1
    }
    if (data > array[mid]){
        l=mid+1
    }
}
return -1  
}

const result= binary_search([1,5,10,15,20,35,50,55],35)
console.log(result)
