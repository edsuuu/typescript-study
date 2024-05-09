type MapStringCallBack = (item: string) => string;

function mapString(array: string[], callbackfn: MapStringCallBack): string[] {
  const newArray: string[] = [];

  for (let index = 0; index < array.length; index++) {
    const item = array[index];

    newArray.push(callbackfn(item));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
const abcMaped = mapString(abc, (item) => item.toUpperCase());

console.log(abc);
console.log(abcMaped);
