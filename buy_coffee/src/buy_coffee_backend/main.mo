import Text "mo:base/Text";

actor {
  public func processPayment(coffeeType: Text) : async Text {
    // Perform the necessary logic for processing the payment
    // Example: return a success message
    return "Payment for " # coffeeType # " successful!";
  };
};