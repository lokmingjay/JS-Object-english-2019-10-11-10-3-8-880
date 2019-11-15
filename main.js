var user = {
    name : 'John',
    surname : 'Mike'
    
    }
    
    user.name = 'Peter';
    console.log(user['name']);
    delete user.name;
    console.log(user.name);
    
    var fruit = {
        apple: 20,
        pear: 20,
        peach: 10
        };
    
    var sum=0;
    for(var it in fruit){
    sum= sum+fruit[it];
    
    }
    
    console.log(sum);
    
    