1. values added: 20
2. Code returns an error because var is declared within the if statement. This is a scoping issue which will cause an error.
3. I should not use var because it can cause naming and scoping issues within my program so when I want to use a variable defined in my file but I have another variable already defined with that name in another file, var would use that variable instead of the one I want.
4. values added: 20
5. Reference error because result is not defined because the let is defined within the if statement block so we cannot use the variable result outside of the if statement block
6. An error occurs because we are attempting to reassign a value to a constant variable so it causes a type error 
7. An error occurs because of the previous type error caused by reassigning a value to a const so the line is never reached but even if it made it to line 13, it would still cause a reference error because we defined result in an if statement block but calling on result outside the block. 