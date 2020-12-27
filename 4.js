var json=[{
  "name": "张三",
  "serial": "0001"
}, {
  "name": "李四",
  "serial": "0002"
}, {
  "name": "王五",
  "serial": "0003"
}, {
  "name": "王五2",
  "serial": "0003"
}, {
  "name": "赵四",
  "serial": "0004"
}, {
  "name": "小明",
  "serial": "005"
}, {
  "name": "小张",
  "serial": "006"
}, {
  "name": "小李",
  "serial": "006"
}, {
  "name": "小李2",
  "serial": "006"
}, {
  "name": "赵四2",
  "serial": "0004"
}]
function FilterByserial(data, serial) {   //data是json对象，去重serial
  var dest = [];
  for (var i = 0; i < data.length; i++) {
      var ai = data[i];
      if (i == 0) {
          dest.push(ai);
      } else {
          var filterData = dest.filter(function (e) {
              return e[serial] == ai[serial];
          })
          if (filterData.length == 0) {
              dest.push(ai);
          }
      }
  }
  return dest;
}
console.log(FilterByserial(json,"serial"));