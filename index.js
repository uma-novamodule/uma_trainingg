console.log("umareddy");
let person = {
    name:"john",
    age:20
};
console.log(person.name);   //used dot notation

// changing the name using the bracket notation.
person['name']='harsha';
console.log(person.name);

let i=0;
do{
    if(i%1==0)
    {
        console.log(i);
    }
    i++;

}while(i<5)

person={
    name:'mosh',
    age:20
};
for(let key in person)
{
    console.log(key,person[key]);
}
console.log("---------------------")
let number=max(2,5);
console.log(number);
function max(a,b)
{
       if(a>b)
       {
        return a;
       }
       return b;
}
console.log("-----------------");


let Land=isLandScape(300,100);
console.log(Land);
function isLandScape(width,height)
{
        return (width>height);
}
console.log(" Fizz buzzzz---------------");


console.log(fizzBuzz(45));
function fizzBuzz(value)
{
     
      if(value%5===0 && value%3===0)
      {
             return 'FizzBuzz';
      }
      if(value%3===0)
      {
          return 'Fizz';
      }
      if(value%5===0)
      {
          return 'Buzz';
      }
      else
      {
          return value;
      }
}

console.log("--------------");


checkspeed(77);
function checkspeed(speed)
{
    const speedLimit=70;
    const kmperpoint=5;
     if(speed<speedLimit+kmperpoint)          //until and unless the speed is btwn 75 it prints    'ok' 
     {
           console.log("ok");
     }
     else 
     {
            let points=Math.floor((speed-speedLimit)/kmperpoint);     // if the speed is more than 75 the it calculates the points 
            if(points>=12)                                     // if the speed exceeds 12 then liscense is suspended
            {
                console.log("liscence is suspended");
            }
            else
            {
                 console.log("points",points);               //else prints the points
            }
     }
}


console.log("exercise even and odd numbers:-------------------");
showNumbers(10);
function showNumbers(Limit)
{
     for(let i=0;i<=Limit;i++)
     {
           if(i%2===0)
           {
                console.log(i,"EVEN");
           }
           else
           {
               console.log(i,"ODD");
           }
     }
}
console.log("count truthyyyyy---------------");

const array=[1,2,3,4,"",9];

console.log(countTruthy(array));

function countTruthy(array)
{
    let count=0;
     for(let value of array)
     {
        if(value)
        {
            count++;
        }
     }
     return count;
}   

console.log("String propertiess------------------------------");


const movie={
    name:'pushpa the rise',
    releaseYear:2018,
    rating:4.8,
    director:'sukumar'
};
 
showproperties(movie);

function showproperties(obj)
{
      for(let key in obj)
      {
          if(typeof obj[key]==='string')
          {
              console.log(key,obj[key]);
          }
      }
}

console.log("multiples of 3 and 5----------------");

function multiples(limit)
{
    let sum=0;
    for(let i=1;i<=limit;i++)
    {
        if(i%3===0||i%5===0)
        {
            sum=sum+i;
        }
    }
   return sum;
}
console.log(multiples(10));

console.log("grade----------------------------");

const marks=[80,90,50,100];

console.log(calculateGrade(marks));
function calculateGrade(marks)
{
   let sum=0;
   for(let key of marks)
   {
      sum=sum+key;
   }
   let avg=(sum/(marks.length));
    console.log(avg);
    if(avg>=90 && avg<=100)
    {
        return 'A';
    }
    else if(avg>=0 && avg<=59)
     {
        return 'E';
     }
    else if(avg>=80 && avg<=89)
    {
        return 'B';
    }
    else if(avg>=70 && avg<=79)
    {
       return 'C';
    }
    else if(avg>=60 && avg<=69)
    {
            return 'D';
    }
}

console.log("stars-----------------------------");
showstars(10);
function showstars(n)
{
    for(let i=1;i<=n;i++)
    {  
        let pattern="";
        for(let j=1;j<=i;j++)
        {
             pattern=pattern+'*';
        }
        console.log(pattern);
    }
}

console.log("stars--------------------");

// showstars(5);
// function showstars(n)
// {
//      for(let i=1;i<=n;i++)
//      {
//         for(let j=1;j<=i;j++)
//         {
//             console.log('* ');
//         }
//        console.log('*\n');
//      }
// }
// showstars(5);
// function showstars(n)
// {
//      for(let i=1;i<=n;i++)
//      {
//         for(let j=1;j<=i;j++)
//         {
//             document.write('*');
//         }
//        console.log("\n");
//      }
// }

function showstars(n) {
    for (let i = 1; i <= n; i++) {
        console.log(Array(i).fill('*').join(' '));
    }
}
showstars(5);
