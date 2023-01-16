module.exports = function check(str, bracketsConfig) {
  let obj1 = {};
  let obj2 = {};
  bracketsConfig.forEach((item) => obj1[item[1]] = item[0]);
  bracketsConfig.forEach((item) => obj2[item[0]] = item[1]);
  let arr = [];
  for(let i = 0; i < str.length; i++) {
    if (Object.values(obj1).includes(str[i])) {
      if (str[i] !== obj2[str[i]]) arr.push(str[i]);
      else {
        if (str[i] !== arr[arr.length - 1]) arr.push(str[i]);
        else arr.splice(arr.length - 1, 1);
      }
    }
    else if (arr[arr.length - 1] === obj1[str[i]]) arr.splice(arr.length - 1, 1);
    else return false;
  }
  if (arr.length === 0) return true;
  else return false;
}
