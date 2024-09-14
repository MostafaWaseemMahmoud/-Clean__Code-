class Node  {
    constructor(data , next=null) {
        this.data = data
        this.next = next
        
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    addFisrt(data) {
        this.head = new Node(data , this.head);
        this.size++
    }

        addLast(data) {
        let node = new Node(data , null);
        let current;
        
        if (!this.head){
            this.head = node;
        } else {
            current = this.head
            while (this.head.next) {
                current = this.head
                current = current.next;
            }

            current.next = node;
        }
        this.size++ 
    }


    AddAtIndex(data , index) {
        if (index < 0 || index > this.size) return;


        if (index == 0) {
            this.addFisrt(data)
        }
        
        if (index == size - 1) {
            this.addLast(data)
        }
            
    }


    getdata() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
} 


const Li = new LinkedList()

Li.addFisrt(10)
Li.addLast(100)
Li.getdata()
console.log(Li)