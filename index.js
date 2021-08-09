
/*1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.*/

const tripleorSum = function(n1,n2){
    if(n1 != n2)
    {
        console.log(n1+n2)
    }
    else{
        console.log((n1+n2)*3)
    }
}
tripleorSum(22,4)
tripleorSum(33,33)

/*2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkfor50 = function(a,b){
    let result = a+b
    if(result === 50 || a ===50 || b === 50)
    {
        console.log(Boolean(50))
    }
    else 
    {
        console.log('num 50 not found')
    }
}
checkfor50(23,27)
checkfor50(26,45)
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeChar = function(str,n){
    str = str.slice(0, n) + str.slice(n+1,str.length);
    console.log(str)
}
removeChar("helloworld", 7)
removeChar("magnificient", 1)
removeChar("fun to code", 0)
/*
4)
 Create a function to find the largest of three given integers.
*/
const largestOf3 = function(l,m,n){
    if(l>m && l>n)
    {
        console.log(l)
    }
    else if(m>n && m>l)
    {
        console.log(m)
    }
    else if(n>l && n>m){
        console.log(n)
    }
    else{
        console.log(`${l}, ${m}, ${n}  may be first two parameters are equal as you see`, ` so largest is ${l}` )
    }
}
largestOf3(9,9,310)
largestOf3(45,45,6)
largestOf3(36,3,99)
    

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const rangefor = function(k,l){

        if((k>=40 && k<=60) || (k>=70 && k<=100))
        {
            if(k>=40 && k<=60)
            console.log(`${k} is in range 40 to 60`)
            else
            console.log(`${k} is in range 70 to 100`)
        }
        else
            console.log(`${k} is out of inclusives`)
        if((l>=40 && l<=60) || (l>=70 && l<=100))
        {
            if(l>=40 && l<=60)
            console.log(`${l} is in range 40 to 60`)
            else
            console.log(`${l} is in range 70 to 100`)  
        }
        else
        console.log(`${l} is out of inclusives`)
        }
rangefor(43,44)
rangefor(23,78)


/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
const specialCopies = function(strng, n)
{
    let repeatResult = " "
    i=0
    while(i<n)
    {
        repeatResult += strng
        i++
    }
    console.log(repeatResult)
}
specialCopies("hello", 4)

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const beginString = function(s)
{
    let ch = s.slice(0,3)
    if((ch === 'Los') || (ch === 'New'))
    {
        console.log(s)
    }
    else
    console.log(' ')
}
beginString('Los Angels')
beginString('NewJersy')
beginString('selena Gomez')
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumOfArr = function(arr)
{
    if(arr.length === 3)
    {
        let sum=0
    for(let i=0; i<arr.length; i++)
    {
        sum+=arr[i]
    }
    console.log(sum)
    }
}
sumOfArr([2,4,5])
sumOfArr([3,4,5,6])
sumOfArr([1])
/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const contains1or3 = function(a)
{
    if(a.length === 2)
    {
        if(a.includes(1) || a.includes(3) === true)
        console.log(`array of ${a} contains 1 or 3`)
        else
        console.log(`array of ${a} doesnt contain 1 or 3`)
    }
    else
    console.log(`sorry!! we deal with only arrays of length 2 as asked`)
}
contains1or3([2,3])
contains1or3([2,4])
contains1or3([1,3])
contains1or3([1,2,3,4])

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */
const doesntcontains1or3 = function(a)
{
    if(a.length === 2)
    {
        if(a.includes(1) || a.includes(3) === false)
        console.log(`array of ${a} doesnt contains 1 or 3`)
        else
        console.log(`array of ${a} contain 1 or 3`)
    }
    else
    console.log(`sorry!! we deal with only arrays of length 2, as asked`)
}
doesntcontains1or3([2,3])
doesntcontains1or3([2,4])
doesntcontains1or3([1,2,3,4])

/*11)
Create a function to find the longest string from a given array of strings.*/
const longestString = function(array1){
    let lengths = []
    for (let i=0;i<array1.length;i++)
    {
        lengths.push(array1[i].length)
    }
    let k = (Math.max(...lengths))
    for(let j=0; j<array1.length;j++)
    {
        if(array1[j].length === k)
        console.log(array1[j])
    }
}
longestString(['sai','krishna','reddy','goka','2'])

/*
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Abtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.*/

    const findAngles = function(ang){
         ang = (ang>=0 && ang<90) ? console.log('Acute Angle') :
                    (ang === 90) ? console.log('Right Angle') : 
                    (ang>=90 && ang<180) ? console.log('Abtuse Angle') :
                    (ang === 180) ? console.log('Straight Angle') : console.log('Angle greater than 180 degrees')
    }
    findAngles(45)
    findAngles(91)
    findAngles(181)
    findAngles(90)
    findAngles(180)



/*13)
Create a function to find the index of the greatest element of a given array of integers*/

const indexOfLargest = function(ar){
    let reqIndex = ar.indexOf(Math.max(...ar))
    console.log(reqIndex)
}
indexOfLargest([23,45,67])
indexOfLargest([12,34,56,79,89,56,4,53,43])

/*14)
Create a function to get the largest even number from an array of integers.*/

const largestEvenNumber = function(ray){
    evenArray = []
    for(let i=0; i<ray.length; i++)
    {
        if(ray[i]%2 === 0)
        {
            evenArray.push(ray[i])
        }
    }
    largesteven = evenArray[evenArray.indexOf(Math.max(...evenArray))]
    console.log(largesteven)
    
}
largestEvenNumber([2,34,5,6,78,35,45,68,28])

/*15)
Create a function to check from two given integers, whether one is positive and another one is negative.*/

const negAndPos = function(nums){
    if(nums.length === 2)
    {
    if((nums[0] > 0 && nums[1] < 0) || (nums[0] < 0 && nums[1] > 0))
    console.log('yes one is positive and one is negative')
    else
    console.log('not as expected')
    }
    else
    console.log('as asked!! we deal only arrays with length 2')
    
}
negAndPos([23,-46])
negAndPos([-23,23])
negAndPos([-46,-46])
negAndPos([23,0])
negAndPos([23,46,45,67])

/*16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.*/ 

const upperthree = function(stg)
{
    if(stg.length <= 3)
    {
    let c = stg.slice(0,stg.length)
    //let n = c.join()
    //let r = n.replace(/,/g , '')
    //console.log(typeof c)
    let fi = c.toUpperCase()
    console.log(fi)
    
    }
    else
    {
        let c= stg.slice(0,3)
        let fi = c.toLowerCase()
        let rem = stg.slice(3,stg.length)
        let newrem = rem.toUpperCase()
        console.log(fi+newrem)
    }

}
upperthree("saikrishna")

/*17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/

const funforSum = function(c,d){
    let sum=c+d
    let res = sum>50 && sum<80 ? console.log('65') : console.log('80')
}
funforSum(45,23)
funforSum(2,3)

/*18)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".*/

const intresting = function(inte){
    let collect = []
    for (let i=0; i<=inte;i++)
    {
        if(inte%i === 0)
        collect.push(i)
    }
    if(collect.includes(3) && collect.includes(5) && collect.includes(7))
    console.log('DiegoRicardoMiceli')
    else if(collect.includes(3) && collect.includes(5))
    console.log('DiegoRicardo')
    else if(collect.includes(3) && collect.includes(7))
    console.log('DiegoMiceli')
    else if(collect.includes(5) && collect.includes(7))
    console.log('RicardoMiceli')

    else if(collect.includes(3))
    console.log('Diego')
    else if(collect.includes(5))
    console.log('Ricardo')
    else if(collect.includes(7))
    console.log('Miceli')
    else
    console.log(`${inte}`)
}
intresting(45)
intresting(28)
intresting(120)
intresting(14)
intresting(10)

/*19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

const acronym = function(str){
    let splitted = str.split(' ')
    let acr = ''
    for (let i=0; i<splitted.length; i++)
    {
        nacr = splitted[i].slice(0,1)
        acr += nacr
    }
        fin = acr.toUpperCase()
        console.log(fin)
    

}
acronym('British Broadcasting Corporation')
acronym('Multi National Company')