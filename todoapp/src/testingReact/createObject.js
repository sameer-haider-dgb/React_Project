//Object Literal Notation 
    // const person = {
    //     name: "Sameer",
    //     address: "Dbg",
    //     age: 27,
    //     greet:function(){console.log('Hello');
    //     }
    // }
    // console.log(person);

//Using the Object Constructor
    // const person = new Object();
    // person.name="sameer";
    // person.address="Dbg";
    // person.age=27;
    // person.greet=function () {
    //     console.log('Hello'); 
    // }
    // console.log(person);
    
//Using a Constructor Function
    // function Person(name, age, address) {
    //     this.n=name;
    //     this.ad=address;
    //     this.a=age;
    //     this.greet=function(){console.log('Hello')};  
    // }
    // // console.log(Person("Sameer",27,"Dbg"));
    // let value = new Person("Sameer","Dbg",27);
    // console.log(value);

//Object Destructuring
    const user= {name:"Sameer",age:27,address:"Dbg"};    
    // const user2 = user;
    // console.log(user2);
    const {name,age,address} = user;
    console.log(age);
    
    
    
