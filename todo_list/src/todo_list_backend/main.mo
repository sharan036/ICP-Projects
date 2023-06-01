import Debug "mo:base/Debug";
import Array "mo:base/Array";

actor { 
  type Todo = {
    value : Text;
    done : Bool;
  };
  let people : [Todo] = [
    {value = "learn react"; done = false},
    {value = "Go shopping"; done = true},
    {value = "buy flowers"; done = true}
  ];

  let concatenatedArr : [Todo] = [];

  public func getArrayData() : async [Todo] {
    return people;
  };

  public func storeArray(arr: [Todo]) : async [Todo]{
    let concatenatedArr = Array.append(people, arr);
    return concatenatedArr;
  }; 
};
