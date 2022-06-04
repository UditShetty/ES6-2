// class
// stack: pop, peek, push, Length
class Stack{
    constructor(){
        this.length=0
        this.stack=[]
    }
    push(el){
        this.stack[this.length]=el
        this.length++
    }
    pop(){
        this.stack.pop()
        this.length--

    }
    peek(){
        return this.stack[this.length-1]
    }
    // print(){
    //     console.log(this.length)

    // }
        
    

}

let s1= new Stack()
Stack.prototype.print=function(){
    console.log(this.length)
}
s1.push(1)
s1.push(2)
s1.push(3)
console.log(s1)
// console.log(s1.length)
// console.log(s1.peek())
// s1.pop()
// console.log(s1)
