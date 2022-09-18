// Please Remove the duplicated name from this Array.
array = ['abul','kalam','azad','abul','rohim','kalam','azad','jobbar','jobbar'];


// First Looping for the name...
for(i=0; i< array.length; i++)
{
    // second looping for checking the all name...
    for(j= (1+i); j < array.length ; j++)
    {
        if(array[i] === array[j])
        {   
            array.splice(j,1);
        }
    }
}

console.log(array);