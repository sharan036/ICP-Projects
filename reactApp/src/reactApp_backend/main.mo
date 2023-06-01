// import Stable "mo:stable";
import Text "mo:base/Text";

actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
  // public shared(msg) func writeToDatabase(key: Text, value: Text) : async Text {
  //   // let db = await Stable.load();
  //   // let result = await db.put(key, value);
  //   // // handle result
  //   // return "key:" # key # " value:" # value # "";
  // };
};