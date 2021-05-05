function PrimeFactor(num) 
{
    if (num <= 1) 
    {
        console.log("Invalid"); 
        exit;
    }
    
    for (let i=2; i <= num; i++)
    { 
        if ((num % i) === 0)
        { 
        let factor = i; 
            for (let j=2; j < factor; j++ )
            {  
                    if ((factor % j) === 0)
                    { 
                        flag=1 
                        break;
                    }
            }
            if (flag === 0)
            {
                array[k] = factor; 
                k++;
                count = 1;
            }
        }
    }
}
    let count = 0; 
    let flag = 0;
    let k=0; 
    let array = new Array();

    import readLine from "readLine-sync";
    let num = readline.question("Enter the number: ");
    
    PrimeFactor(num);
    
    if (count === 0) 
        console.log("No prime factors found."); 
    else 
        console.log("The prime factors of the number: " + array); 