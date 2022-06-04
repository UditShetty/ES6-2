class Automobile{
    constructor(e,m,s){
        this.Engine=e
        this.Millage=m 
        this.Speedometer=s
    }
}

class Bike extends Automobile{
    constructor(e,m,s,t,seat){
        super(e,m,s)
        this.tyre=t 
        this.seat=seat
    }
}

class Car extends Automobile{
    constructor(e,m,s,t,seat){
        super(e,m,s)
        this.tyre=t 
        this.seat=seat
    }
}
class Truck extends Automobile{
    constructor(e,m,s,t,seat){
        super(e,m,s)
        this.tyre=t 
        this.seat=seat
    }
}

let A1= new Automobile("Single Cylinder", "30","40km/hr")
console.log(A1)

let bike= new Bike("Double Cylinder", "20","50km/hr" ,"small","designer")
console.log(bike)

let car= new Car("Double Cylinder", "20","50km/hr" ,"small","designer")
console.log(car)

let truck= new Truck("Double Cylinder", "20","50km/hr" ,"small","designer")
console.log(truck)