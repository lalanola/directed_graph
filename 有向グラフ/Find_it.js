const arr = [-1, 6, 7, 2, 1, 3, 4, 5];
let arr2 = [-1, 0, 0, 0, 0, 0, 0, 0];

let v = 1;
let s = [];
while (arr2[v] == 0) {
  arr2[v] = 1;
  s.push(v);
  v = arr[v];
}
let res = [];
for (const nx of s) {
  if (nx == v) {
    v = -1;
  }
  if (v == -1) {
    res.push(nx);
  }
}

for (let i = 0; i < res.length; i++) {
  if (i) {
    console.log(" ");
  }
  console.log(res[i]);
}
