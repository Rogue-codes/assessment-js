# JavaScript Foundations Assessment

**Total:** 40 pts &nbsp;|&nbsp; **Time:** 45 minutes  
**Topics:** Variables · Types · Conditionals · Loops · Git workflow

---

## Before You Start

1. Clone the repo and check out from `main`
2. Create a new branch named `solution/your-name`
3. You will submit your work as a **Pull Request** into `main`

Full Git instructions are in **Part D** at the bottom.

---

## Part A — Variables & Types &nbsp;`10 pts`

Answer questions 1–3 in the file `written-answers.txt` already in the repo.  
Answer question 4 in `answers.js`.

**Q1 (3 pts)**  
What are the three ways to declare a variable in JavaScript?  
Write a short example using each one.

**Q2 (3 pts)**  
What will the following code print? Write the output next to each line.

```js
console.log(typeof 42);        // ________
console.log(typeof "hello");   // ________
console.log(typeof true);      // ________
```

**Q3 (4 pts)**  
What is the difference between `==` and `===` in JavaScript?  
Give one example that shows the difference.

---

## Part B — Conditionals &nbsp;`10 pts`

Answer question 5 in `written-answers.txt`.  
Answer question 4 in `answers.js`.

**Q4 — Code (5 pts)**  
Write a function called `gradeScore` that takes a number and returns a letter grade:

| Score | Grade |
|-------|-------|
| 70 and above | `"A"` |
| 60 – 69 | `"B"` |
| 50 – 59 | `"C"` |
| Below 50 | `"F"` |

Write your solution in `answers.js` under the `// Q4` comment.

**Q5 (5 pts)**  
What does the following code output? Trace it step by step.

```js
let x = 10;
if (x > 5) {
  console.log("big");
} else if (x === 10) {
  console.log("ten");
} else {
  console.log("small");
}
```

- What is the output?
- Why did the `else if` branch not run even though `x === 10` is true?

Answer in `written-answers.txt`.

---

## Part C — Loops &nbsp;`10 pts`

Write your code solutions in `answers.js` under the matching comments.

**Q6 (4 pts)**  
Use a `for` loop to print every even number from 2 to 20 (inclusive).

**Q7 (6 pts)**  
Given the array below, use a loop to find and print the largest number.  
Do **not** use `Math.max()` — find it yourself with a loop.

```js
const nums = [3, 17, 8, 42, 5, 29, 11];
// expected output: 42
```

---

## Part D — Git Workflow &nbsp;`10 pts`

Complete each step in order. Write the exact commands you used in `written-answers.txt` under the Git section.

| Step | What to do |
|------|------------|
| 1 | Clone this repo to your computer |
| 2 | Confirm you are on `main` and pull the latest changes |
| 3 | Create and switch to a new branch: `solution/your-name` |
| 4 | Write your code solutions in `answers.js` |
| 5 | Write your written answers in `written-answers.txt` |
| 6 | Stage all changes and commit with the message `"Add assessment solutions"` |
| 7 | Push your branch to GitHub |
| 8 | Open a Pull Request from your branch into `main`. Title it: `Assessment – [Your Name]` |

Paste your PR link at the bottom of `written-answers.txt`.

---

## Submission Checklist

- [ ] `answers.js` has solutions for Q4, Q6, and Q7
- [ ] `written-answers.txt` has answers for Q1, Q2, Q3, Q5, and the Git commands
- [ ] Your branch is named `solution/your-name`
- [ ] You have pushed your branch and opened a PR into `main`
- [ ] The PR title is `Assessment – [Your Name]`

Good luck!
