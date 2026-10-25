function twoSum(nums, target) {
  const seen = new Map();

  for (let index = 0; index < nums.length; index += 1) {
    const needed = target - nums[index];

    if (seen.has(needed)) {
      return [seen.get(needed), index];
    }

    seen.set(nums[index], index);
  }

  return [];
}

console.log(twoSum([2, 7, 11,15], 9));
