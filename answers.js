// ============================================
// JavaScript Assessment — Code Answers
// Fill in your solutions below each comment.
// Do NOT delete the comments.
// ============================================


// --------------------------------------------------
// Q4 — gradeScore function (Part B, 5 pts)
// Write a function that takes a score and returns
// "A", "B", "C", or "F" based on the grading table.
// --------------------------------------------------

// your code here
function getGrade(score) {
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else {
      return "F";
    }
  }
  
  // Testing it
  console.log(getGrade(95));  // A
  console.log(getGrade(85));  // B
  console.log(getGrade(72));  // C
  console.log(getGrade(50));  // F


// --------------------------------------------------
// Q6 — Print even numbers 2 to 20 (Part C, 4 pts)
// Use a for loop. Do not just write them out manually.
// --------------------------------------------------

// your code here
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }

  Output:
2
4
6
8
10
12
14
16
18
20


// --------------------------------------------------
// Q7 — Find the largest number (Part C, 6 pts)
// Use a loop. Do NOT use Math.max().
// --------------------------------------------------

const nums = [3, 17, 8, 42, 5, 29, 11];

// your code here

const nums = [3, 17, 8, 42, 5, 29, 11];

let largest = nums[0]; // assume first number is largest

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i]; // update largest if we find a bigger number
  }
}

console.log("Largest number:", largest); // 42