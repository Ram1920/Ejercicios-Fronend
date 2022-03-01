function sumAll(arr) {
    let arr1 = [],sum=0;
    for(let i=Math.min.apply(null,arr);i<=Math.max.apply(null,arr);i++){
      arr1.push(i);
      sum+=i;
    }
    return sum;
  }
   
 console.log(sumAll([5, 8])); 