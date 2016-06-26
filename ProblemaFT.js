//  ===  Project  ===
function Project(){
  this.sprints = [];
}

Project.prototype.addSprint = function(sprint){
  this.sprints.push(sprint);
}

//  ===  Sprint  ===

function Sprint(){
  this.tickets = [];
}

Sprint.prototype.addTicket = function(ticket){
//ticket.id = this.tickets.length;
  this.tickets.push(ticket);
}

Sprint.prototype.filterByStatus = function(value){

   for(var i=0; i < this.tickets.length; i++){

       if(this.tickets[i].status == value){

          console.log(this.tickets[i]);

       }else{

         console.log("Entry not found !!");
       }
   }
}

Sprint.prototype.filterBySprint = function(value){

   for(var i=0; i < this.tickets.length; i++){

       if(this.tickets[i].sprint == value){
          console.log(this.tickets[i]);

       }else{
         console.log("Entry not found !!");
       }
   }
}

Sprint.prototype.updateTicket = function(ticketNr,field,value){

}


//  === Ticket ===
function Ticket(options,type){
      this.id = options.id;
      this.name = options.name;
      this.sprint = options.sprint;
      this.assignee= this.name;
      this.createdBy = options.createdBy;
      this.description = options.description;
      this.status ="New";
      this.messages = options.messages;
      this.updatedAt = "";
      this.createdAt = new Date().toString();

      if(type == "bug" || type == "feature"){
          this.tasks = new Ticket(options);
      }
}

Ticket.prototype.setUpdatedAt = function(){
   this.updatedAt =  new Date().toString();
}

Ticket.prototype.fieldUpdate = function(field,value){

  if(field == "createdBy"){
      this.createdBy = value;
   }else if(field == "status"){
      this.status = value;
   }
//   etc...

}


var sprint1 = new Sprint();
var project1 = new Project();

var entry ={
  id:"",
  name:"Check the bug in elder forest",
  sprint:'',
  createdBy:"Andrei",
  description:"bla bla the lake",
  messages:"NO new messages",
  updatedAt:"dateFunction()",
};


entry.id = sprint1.tickets.length;
entry.sprint = project1.sprints.length;
// console.log(entry);

var ticket = new Ticket(entry,"bug");
var ticket1 = new Ticket(entry);

ticket.fieldUpdate("status","old");

sprint1.addTicket(ticket);
sprint1.addTicket(ticket1);

project1.addSprint(sprint1);
project1.addSprint(sprint1);

console.log(project1);
sprint1.filterBySprint(1);

project1.sprints[0].tickets[0].setUpdatedAt();



