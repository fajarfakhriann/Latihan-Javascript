function konversiMenit(menit) {
  if (menit < 60) {
    return `${menit} menit`;
  } else if (menit < 1440) {
    return `${Math.floor(menit / 60)} jam ${menit % 60} menit`;
           
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00