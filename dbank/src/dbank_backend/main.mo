import Debug "mo:base/Debug";

actor {
  var current = 300;
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
  Debug.print(debug_show(current));
};
