import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Bool "mo:base/Bool";

actor { 
  type Todo = {
    index : Nat; 
    value : Text;
    done : Bool;
  };

  stable var people : [Todo] = [
    {index = 1; value = "learn react"; done = false},
    {index = 2; value = "Go shopping"; done = true},
    {index = 3; value = "buy flowers"; done = true}
  ];

  let concatenatedArr : [Todo] = [];

  public query func getArrayData() : async [Todo] {
    return people;
  };

  // public func storeArray(arr: [Todo]) : async [Todo]{
  //   // let concatenatedArr = Array.append(people, arr);
  //   return concatenatedArr;
  // }; 

  public query func updateObject(index : Nat, newName : Bool) : async [Todo] {
    let updatedPeople = Array.map(
      people,
      func(todo : Todo) : Todo {
        if (todo.index == index) {
          return {index = todo.index; value = todo.value; done = newName};
        } else {
          return todo;
        }
      }
    );    
    people := updatedPeople;
    return people;
  }


};
