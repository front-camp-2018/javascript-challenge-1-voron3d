/* eslint-disable-next-line */
export const sortByWeight = arr => {

  const wArr = arr.map(num => {
    return num.split('').reduce((sum, current) => {
      return sum + Number(current);
    }, 0);
  });

  function swap (items, firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  }

  function partition (items, left, right) {
    const pivot = items[Math.floor((right + left) / 2)];

    while (left <= right) {
      while (items[left] < pivot) {
        left++;
      }
      while (items[right] > pivot) {
        right--;
      }
      if (left <= right) {
        swap(items, left, right);
        swap(arr, left, right);
        left++;
        right--;
      }
    }
    return left;
  }

  function quickSort (items, left = 0, right = items.length - 1) {
    if (items.length > 1) {
      const index = partition(items, left, right);
      if (left < index - 1) {
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        quickSort(items, index, right);
      }
    }
    return items;
  }

  quickSort(wArr);
  return arr;

};
