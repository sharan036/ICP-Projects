import RBTree "mo:base/RBTree";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
  
  var question: Text = "enter your question";

    public query func getQuestion() : async Text { 
      question 
    };
    
    public func setQuestion(q: Text) { 
      question := q 
    };

        // OPTIONS
    var options: RBTree.RBTree<Nat, Text> = RBTree.RBTree(Nat.compare);
    var optionCounter = 0;

    public func addOption(newOption : Text) : async Nat {
      optionCounter += 1;
      options.put(optionCounter, newOption);
      optionCounter
    };

    public func deleteOption(oid : Nat) {
      options.delete(oid);
    };

    public func updateOption(oid : Nat, option : Text) {
      options.put(oid, option);
    };

    public query func getOptions() : async [(Nat, Text)] {
        Iter.toArray(options.entries())
    };    
}