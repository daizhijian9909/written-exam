function reverse(arr, len) {
  if (len > 1) {
    //一轮将12345->23451
    for (let i = 0; i < len - 1; i++) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }


    len--;
    reverse(arr, len);
  }
  return arr;
}
function handleRes(s) {
  let arr = s.split("");
  let len = arr.length;
  let answer = reverse(arr, len).join("");
  console.log("1、" + answer);
  return answer;
}
console.log(handleRes("hello"));
