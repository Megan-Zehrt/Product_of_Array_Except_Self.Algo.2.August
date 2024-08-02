// 238. Product of Array Excepty Self



Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.





/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
        
    let result = []
    let leftSum = 1
    let rightSum = 1

    for(let i = 0; i < nums.length; i++){
        result[i] = leftSum

        leftSum *= nums[i]
    }

    for(let i = nums.length-2; i >= 0; i--){
        rightSum *= nums[i+1]

        result[i] *= rightSum
    }

    return result
}