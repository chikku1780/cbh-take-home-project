# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Notes: 

Refactoring (My View): To refactor any code, we need to understand the existing functionality. It is not something where we change the variable names readable.
What I've done for this particular functionality.

1. Understand existing function.
2. Identify the constants and define at top.
3. Change variable names according to purpose.
4. Handle (empty) errors at the top of function.
5. Identify the code reusable components and isolate them.
6. Identify any extra functionality required, which is available on community (npm - check for author, licence and downloads). If not available/not matching your requirement write yourself.
7. Verify with unit tests.
