const MIN_MERGE = 32;

const minRunLength = (n) => {
  let r = 0;
  while (n >= MIN_MERGE) {
    r |= (n & 1);
    n >>= 1;
  }
  return n + r;
}

const insertionSort = (arr) => {
 insertion(arr, 0, arr.length - 1); 
}

const mergeSort = (arr) => {
 mergeSortRecursive(arr, 0, arr.length - 1); 
}

const mergeSortRecursive = (arr, l, r) => {
 if (l >= r) {
   return;
 }
  var m =l + parseInt((r-l)/2);	
	mergeSortRecursive(arr, l, m);
  mergeSortRecursive(arr, m + 1, r);
  merge(arr, l, m, r);
}

const insertion = (arr, left, right) => {
 for (let i = left + 1; i <= right; i++) {
   let temp = arr[i];
   let j = i - 1;
   
   while (j >= left && arr[j] > temp) {
     arr[j + 1] = arr[j];
     j--;
   }
   arr[j + 1] = temp;
 }
}

const merge = (arr, l, m, r) => {
  let len1 = m - l + 1, len2 = r - m;
  let left = new Array(len1);
  let right = new Array(len2);
  for (let x = 0; x < len1; x++) {
    left[x] = arr[l + x];
  }
  for (let x = 0; x < len2; x++) {
    right[x] = arr[m + 1 + x];
  }
  let i = 0;
  let j = 0;
  let k = l;
  
  while (i < len1 && j < len2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++
  }
  
  while (i < len1) {
    arr[k] = left[i];
    k++;
    i++;
  }
  
  while (j < len2) {
    arr[k] = right[j];
    k++;
    j++;
  }
}

const timSort = (arr) => {
 let n = arr.length;
 let minRun = minRunLength(MIN_MERGE);
  
  for (let i = 0; i < n; i += minRun) {
    insertion(arr, i, Math.min((i + MIN_MERGE - 1), (n - 1)));
  }
  
  for (let size = minRun; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      let mid = left + size - 1;
      let right = Math.min((left + 2 * size - 1), (n - 1));
      if (mid < right)
        merge(arr, left ,mid, right);
    }
  }
}

const swap = (arr, i, j) => {
 let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const partition = (arr, low, high) => {
 let pivot = arr[high];
  
  let i = (low - 1);
  
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return (i + 1);
}

const quickSortRecursive = (arr, low, high) => {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSortRecursive(arr, low, pi - 1);
    quickSortRecursive(arr, pi + 1, high);
  }
}

const quickSort = (arr) => {
 quickSortRecursive(arr, 0, arr.length - 1); 
}

const heapify = (arr, n, i) => {
	let largest = i;
	let l = 2 * i + 1;
	let r = 2 * i + 2;
	
	if (l < n && arr[l] > arr[largest])
		largest = l;
		
	if (r < n && arr[r] > arr[largest])
		largest = r;
		
	if (largest != i) {
		swap(arr, i, largest);
		heapify(arr, n, largest);
	}
}

const heapSort = (arr) => {
	let n = arr.length;
	
	for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
		heapify(arr, n, i);
		
	for (var i = n - 1; i > 0; i--) {
		swap(arr, 0, i);
		heapify(arr, i, 0);
	}
}

export {
  timSort,
  mergeSort,
  insertionSort,
  quickSort,
  heapSort
}
