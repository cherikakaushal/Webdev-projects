// Function to remove duplicates from an array without using built-in methods
function removeDuplicates(arr) {
    let uniqueArray = [];

    // Iterate through the input array
    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];
        let isDuplicate = false;

        // Check if currentItem is already in uniqueArray
        for (let j = 0; j < uniqueArray.length; j++) {
            if (currentItem === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }

        // If currentItem is not a duplicate, add it to uniqueArray
        if (!isDuplicate) {
            uniqueArray.push(currentItem);
        }
    }

    return uniqueArray;
}

// Example usage:
let array = [1, 2, 3, 4, 2, 3, 5];
let result = removeDuplicates(array);
console.log("Original Array:", array);
console.log("Array with Duplicates Removed:", result);
