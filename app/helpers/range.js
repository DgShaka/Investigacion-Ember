import { helper } from '@ember/component/helper';

export default helper(function range([start, end]) {
  let array = [];
  for (let i = start; i < end; i++) {
    array.push(i);
  }
  return array;
});