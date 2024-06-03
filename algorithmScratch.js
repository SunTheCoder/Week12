//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//BUBBLE SORT aka "sinking sort"---------------------------------------------------------------------------------------------------------------------------------------------

function bubbleSort(arr) {  // Best case: O(n), Worst case: O(n^2)
   
    for (let i = 1; i < arr.length; i++) {                      // Iterate through the array/Perform the operation N times

        for (let j = 0; j < arr.length - 1; j++) {              // Iterate through/compare EACH element of the array
            
            if (arr[j] > arr[j+1]) {                            // If the current value is greater than its neighbor to the right...
                                                                 
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]         // Swap those values                                      
            }
        }
    }                                                              
    return arr                                                  // If you get to the end of the array and no swaps have occurred, return
                                                                // Otherwise, repeat from the beginning
}

console.log('BubbleSort: ', bubbleSort([0,13,99,56,598]), '\n')

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//INSERTION SORT-------------------------------------------------------------------------------------------------------------------------------------------------------------

function insertionSort(arr) {     // Best case: O(n), Worst case: O(n^2)

    for (let i = 1; i < arr.length; i++) {                               // loop to reset the elements/pairs being checked

        let currentElement = arr[i] 
        let divider = i - 1                                              // initialize a currentElement starting at index i; lastIndex is also a good varible name and/or way of thinking about it
    
        while (divider >= 0 && arr[divider] > currentElement) {          // the while loop that will check if divider/index is greater than 0 and if the array is sorted; 
                                                                         // therefore we will continue checking values against the current element

            arr[divider+1] = arr[divider]                                // shifts the element that is greater than currentElement to the right

            divider--                                                    //increment divider

        }
        arr[divider+1] = currentElement                                  // inserts the currentElement at the place of the divider/lastIndex

    }
    return arr
}

let arr = [3,2,0,4,1] // [0,1,2,3,4]
let oArr = [0,13,99,56,598]

console.log('InsertionSort: ', insertionSort(arr))
console.log('InsertionSort: ', insertionSort(oArr), '\n')

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//SELECTION SORT-------------------------------------------------------------------------------------------------------------------------------------------------------------

function selectionSort(arr) {  // O(n^2) time complexity

    // variable i acts as the divider in this solution
    
    for (let i = 0; i < arr.length; i++) {                      // Set a pointer at zero dividing the array into sorted and unsorted halves
                                                                // Repeat while the unsorted half is not empty:

        let min = i                                             // Find the index of the minimum value in the unsorted half
                                                                // Save the min value

        for (let j = i + 1; j < arr.length; j++) {  
          if (arr[j] < arr[min]) {
            min = j
            }
        }     
        if (min !== i) {                                        // Shift every unsorted value to the left of the min value to the right by 1
            // Swap
            [arr[i], arr[min]] = [arr[min], arr[i]]             // Put the min value at the divider
            }

    }
    return arr
}

let arr2 = [3,2,0,4,1] // [0,1,2,3,4]

console.log('SelectionSort: ', selectionSort(arr2), '\n')

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//MERGE SORT-----------------------------------------------------------------------------------------------------------------------------------------------------------------

function mergesort(arr) {  // O(n*Log n)
    
    if (arr.length <= 1) return arr                             // Check if the input is length 1 or less
                                                                // If so, it's already sorted: return
  
    let mid = Math.floor(arr.length / 2)                        // Divide the array in half
    
    let leftHalf = mergesort(arr.slice(0, mid))                 // Recursively sort the left half

    let rightHalf = mergesort(arr.slice(mid))                   // Recursively sort the right half
      
    return merge(leftHalf, rightHalf)                           // Merge the halves together and return
}
      


function merge(left, right) {                                   // Takes in two sorted arrays and returns them merged into one
      
    let sortedArr = []                                          // Create an empty return array
                                                                // the sorted items will go here

    while (left.length && right.length) {                       // While there are still values in each array...
                                                                // Point to the first value of each array
                                                                // Compare the first values of each array
        if (left[0] < right[0]) {
                                                                          
            sortedArr.push(left.shift())                        // Insert the smaller value into sortedArr
        } else {
            sortedArr.push(right.shift())
        }
    }
                                                                // Use spread operators to create a new array, combining the three arrays
        return [...sortedArr, ...left, ...right]                // Return the merged array
}

let arr3 = [3,2,0,4,1] // [0,1,2,3,4]
let oArr2 = [0,13,99,56,598]
    
console.log('MergeSort: ', mergesort(arr3))
console.log('MergeSort: ', mergesort(oArr2), '\n')

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//RECURSIVE SORT-------------------------------------------------------------------------------------------------------------------------------------------------------------

// function recursiveSort(arr) {

//     // Find and remove the largest value in the array
//     let max = arr[0]
//     let index;

//     for (let i = 0; i < arr.length; i++) {
//         let checkedNum = arr[i]
//         if (checkedNum > max) {
//             max = checkedNum
//             index = i
//         }
//     }

//     let removedMax = arr.splice(index, 1)

//     console.log(max)
//     console.log(removedMax)
//     console.log(arr)

//     // Sort the remaining elements
//     recursiveSort(arr)

//     // Put the largest value back at the end of the array
//     arr.push(max)

// }

// console.log(recursiveSort([0,13,99,56,598]))

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//QUICKSORT------------------------------------------------------------------------------------------------------------------------------------------------------------------

function quickSort(arr) {                           // Worst Case: O(1) Best Case: O(n Log n)

    if (arr.length <= 1) return                     // Check if the input is length 1 or less
                                                    // If so, it's already sorted: return
    for (let i = 0; i < arr.length; i++) {

        let pivot = arr[i]                          // Pick a pivot
        // console.log(pivot)
        // console.log(i)
        
        let pivotIndex = i

        for (let j = i; j < arr.length; j++) {      //initialize j as the index of the pivot each time/ start check at pivot. more efficent if done in O(1)
            
        // console.log(shift)
            if (pivot > arr[j]) {                   // Put all values smaller than the pivot to the `left`
                // console.log(arr)
                let temp = arr[j]

                arr[j] = pivot

                arr[pivotIndex] = temp
                pivotIndex = j

                i--
            }             
        }
        pivotIndex++
    } 

return arr

}
console.log('QuickSort: ', quickSort([13,0,99,56,598]))
console.log('QuickSort: ', quickSort([18,5,777,88,186,11]))
console.log('QuickSort: ', quickSort([18,5,11,777,88,186,11], '\n'))

// Put all values larger than the pivot to the `right`

// Sort the left half
// Sort the right half

// Return the array with the left, pivot, and right values



