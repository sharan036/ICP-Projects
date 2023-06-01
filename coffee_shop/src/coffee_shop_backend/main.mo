actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
  
  public func processPayment(coffeeType: Text) : async Text {
    // Perform the necessary logic for processing the payment
    // Example: return a success message
    return coffeeType ;
  };
};
