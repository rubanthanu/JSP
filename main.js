class pizaa{
    constructor(name, price, size){
        this.name = name;
        this.price = price;
        this.size = size;
    }
    print() {
        console.log(`Name: ${this.name}, Price: $${this.price}, Size: ${this.size}`);
    }
}


let p1= new pizaa("Margherita", 8, "Medium");
let p2= new pizaa("Pepperoni", 10, "Large");
let p3= new pizaa("Veggie", 9, "Small");    
p1.print();
p2.print();
p3.print();