// 合并
function merge(left,right){
  var arr=new Array;
  while(left.length>0&&right.length>0){
      if(left[0]<=right[0]){
          arr.push(left.shift())
      }else{
          arr.push(right.shift())
      }
  };
  return arr.concat(left).concat(right)
};
// 拆分
function mergeSort(arr){
  console.log(`arr=${arr}`)
  if(arr.length==1){
      return arr
  };
  var mid=Math.floor(arr.length/2);
  var left=arr.slice(0,mid);
  var right=arr.slice(mid);
  return merge(mergeSort(left),mergeSort(right))
};
console.log(mergeSort([3,1,4,1,5,9,2,6]))