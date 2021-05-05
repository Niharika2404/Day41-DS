console.log("Welcome to the Data Structure PRoblem");
function findMaxMinNum()
{
    for (let i = 0; i < num.length; i++)
    {
    let random = Math.floor(100 + Math.random() * 900 );
    num [i] = random;
    }
    
    max = num[0]; 
    min = num[0]; 
    for (let j = 0; j < num.length; j++)
    {
        if (num[j] > max)
        {
            max = num[j];
        }
        if  (num[j] < min)
        {
            min = num[j];
        }
    }
}
    
    let max = 0;
    let min = 0;
    let temp = 0;
    let num = new Array(10);
    findMaxMinNum();
    console.log("Maximum number is: " + max + " Minumum num is: " + min);
