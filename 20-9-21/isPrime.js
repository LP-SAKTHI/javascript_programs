function prime(value)
{
    for(let i=2;i<=value/2;i++)
    {
        if(value%i==0)
        {
            console.log(`${value} is not a prime number`);
            break;
        }

    
    else{
        console.log(`${value} is prime number`);
        break;
    }
}
}

prime(7);
prime(8);
prime(35);
prime(21);
prime(12);
prime(121);