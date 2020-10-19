'use strict';
class Node{
   constructor(data,next=null){
     this.data=data;
     this.next=next;
   }
}

class LinkedList{
  constructor(){
    this.head= null;
    this.size=0;
  }

   // Insert First Node
   insertFirstNode(data){
      this.head = new Node(data,this.head); // this.head in function
      //is the pointer to the former head node now becoming the next of the new head node
      this.size++;
      return null;
   }
  //Insert Last Node
  insertLastNode(data){
    if(this.head == null){
       insertFirstNode(data);
       return null;
    }
    else{
      let node = new Node(data);
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      // Inserted at Last
      current.next = node;
      this.size++;
    }
    return null;
  }
 //Insert at Index
 insertAtIndex(data,index){
   // If index out of bounds
   if(index > 0 && index > this.size){
     return
   }
   // If index out is 0
   if(index === 0){
      insertFirstNode(data);
      return
   }

   let node = new Node(data);
   let previous,current,count=0;
   // Start from the first
   current = this.head;
   while(count<index){
     previous = current;
     current=current.next;
     count++
   }

   previous.next = node;
   node.next = current;
    this.size++;

 }
 // Print the Nodes
   printList(){
     let current = this.head;
     while(current){
       console.log(current.data);
       current = current.next;
     }
   }

   getTillIndex(index){
     let current = this.head;
     let count =0;

     while(count<=index){
          console.log(current.data);
          current = current.next;
          count++;
     }

     return null;
   }

   removeAtIndex(index){
     let current = this.head;
     let previous;
     let count = 0;
     if(index == 0){
       this.head = current.next;
       return null;
     }
     else{
       while(count<index){
         previous = current;
         current = current.next;
         count++
       }
       previous.next = current.next;
       this.size--;
     }

   }

}


// Running the Code

let ll = new LinkedList();

ll.insertFirstNode(10);
ll.insertFirstNode(100);
ll.insertFirstNode(200);

ll.printList();

console.log("Insert at Index 1");
ll.insertAtIndex(30,2);
ll.printList();

console.log("Print till index 3");
ll.getTillIndex(3);

console.log("Inserting Last Node");
ll.insertLastNode(20);
ll.printList();

console.log("Remove at 3 Index");
ll.removeAtIndex(3);
ll.printList();
