function add(...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  return sum;
}
function soustract(...number) {
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    result -= number[i];
  }
  return result;
}
function multi(...number) {
  let value = 1;
  for (let i = 0; i < number.length; i++) {
    value *= number[i];
  }
  return value;
}
export default {
  soustract,
};
export { add, multi };
