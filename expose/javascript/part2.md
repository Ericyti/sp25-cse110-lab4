1. At line 12, the number 3 will be printed because we are incrementing i over the length of prices, which is of length 3 so we iterate 3 times. We then print the iterator, 3.
2. At line 13, the number 150 will be printed. We are printing discountedPrice, which will be last updated by the last number in the array after the for loop finishes, so if we take 300 which is the last number, and multiply it by 0.5 we will get 150. 
3. At line 14, the number 150 will be printed. Again, we are printing finalPrice, which is after the for loop finishes, so we would use the last number in the array of prices as it is the last number to update finalPrice. This number is 300, and after running it through discountedPrice, it will be 150, multiply it by 100 then divide by 100, we get the finalPrice of 150.
4. The function will return [50, 100, 150]. The reason for this is because when we run the array through the for loop, we ultimately just discount the price by the discount that was given with the array and output that. So for example since our input was ([100, 200, 300], 0.5), we just halved the prices giving us [50, 100, 150]. Note that this is just the return of the function and we do not actually print anything as we do not console log it.
5. Line 12 will cause a reference error and this is because we define i with let i in the for loop. This makes i inaccessible in terms of scoping outside of the for loop block, so when we try to access i, it causes a reference error.
6. Same issue with line 12, line 13 will cause a reference error and this happens because when we define discountedPrice with let inside the for loop block, we can only use discountedPrice within the for loop so when we try to reference discountedPrice in the console log outside of the loop, it will throw a reference error
7. At line 14, this will actually work since we defined finalPrice in the function and not in a block so we can call on finalPrice and it would not throw and error, this would console log the number 150 as it uses the last number in the array that was updated in the for loop
8. This function would return [50, 100, 150]. The reason why this works is because there is no scoping issues like the previous questions and the parts where we use discounted and finalPrice are properly referenced as we used let to define them in the entire function. 
9. Again, at line 11, we are trying to console log i, which is defined in a for loop block with let so we can only reference i within that block so it will throw a reference error since we are trying to reference i outside of the for loop block
10. Line 12 will work and we will console log 3. This works because we don't change the constant of length throughout the function and it stays the same
11. The function will return [50, 100, 150]. The reason is because we don't reassign const at any point in the function which is what is supposed to happen. For const discounted, we are only rearranging the data within the const but not reassigning so this works, and for const discountedPrice, we create a new const every time we iterate in the for loop so we are not reassigning the value of const at all so our function works as intended.
    
**12.**  
A. `student.name`  
B. `student["Grad Year"]`  
C. `student.greeting()`  
D. `student["Favorite Teacher"].name`  
E. `student.courseLoad[0]`

**13.**  
A. '32', the reason for this is because javascript used string concatentation since 3 is a string so 2 became a string     
B. 1, this is because it is no longer string concatenation since the operator is a '-' so it forces the string to become an int so 3-2 = 1  
C. 3, 3 + null is 3 because null is forced to be 0 in arithemic as 3 plus nothing is 3  
D. '3null', null no longer has to be forced into an int so it can be concated with string concat to get 3null  
E. 4, true is forced to be an int which is converted into a 1 so 1+3 = 4  
F. 0, false and null are forced to become ints and the conversion for both into int is 0 and 0 so we are saying 0 + 0 which is 0  
G. '3undefined', undefined is forced to be a string so we use string concat again so '3' + undefined is '3undefined'  
H. NaN, we get not a number because we are forced underfined to be an int but there is no conversion for undefined to be an int so we get NaN  

**14.**  
A. true, 2 is forced to be a number so when we do 2 > 1 this returns true  
B. false, this is because when we compare two strings, we go by lexiographic order but 2 comes after 1 in 12 so it is technically false  
C. true, we are comparing the int 2 to the string 2 but this forces the string 2 to be an int so we are saying 2 == 2 which is true  
D. false, '===' uses strict equality and does not use type coercion and does not force a type so when we compare the int 2 to the string 2 this is false because a string is not an int  
E. false, true is turned into an int which its conversion is 1 so we are saying 1==2 which is false  
F. true, Boolean converts any non-zero number into true so we are essentially saying true === true which is true

15. The difference between == and === operators is that == allows for type coercion and is basically a loose equality as it just compares values. While on the other hand, === does not allow for type coercion and is a strict equality as it commapres values and data types 

16. In js file
17. The result of the following function will be [2,4,6]. How to achieve this output is first running the array through the modifyArray function which iterates through each element in the array, on each element we use a callback function, doSomething which takes in a num which is each element for us and multiples it by 2. This is done for each element and after that, we then push the multiplied element to a new array and return that which gives us [2,4,6] from [1,2,3]
18. In js file
19. The output of this code is 1 4 3 2. And this is because we console log 1 first but then set a timeout for 2 to be printed 1 second after running and a timeout for 3 as well for 0 seconds. We then conse log 4 which doesn't have a set timeout so it takes priority over 3 and 2. So we have 1 4 but 2 is on a 1 second timeout so 3 takes a priority before it so we get the output of 1 4 3 2.  