function twoSum(nums, target) {
  let finalAns = [];
  if (nums.length < 2) {
    console.log("陣列須包含兩個以上的數字");
  } else {
    if (nums.length >= 2) {
      for (let i = 0; i < nums.length; i++) {
        for (let n = i + 1; n < nums.length; n++) {
          let numTotal = nums[i] + nums[n];
          if (numTotal === target) {
            finalAns.push(nums[i], nums[n]);
          }
        }
      }
    }

    if (finalAns.length === 0) {
      console.log("陣列中無符合條件的兩數字，請檢查陣列");
    } else {
      console.log(finalAns);
    }
  }
}

twoSum([1], 10);
twoSum([2, 7, 11, 15], 9);
twoSum([2, 3, 5], 9);
