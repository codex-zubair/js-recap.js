obj = [

    {
        price: 106,
    },

    {
        price: 150,
    },

    {
        price: 104,
    },

    {
        price: 130,
    }
]

sum = 0;
obj.forEach(element => {

    sum += element.price;
    

});


console.log(sum);