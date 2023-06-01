// This single-cell calculator defines one calculator instruction per
// public entry poNat (add, sub, mul, div).

// Create a simple Calc actor.
actor Calc {
  var cell : Nat = 0;

  // Define functions to add, subtract, multiply, and divide
  public func add(n:Nat) : async Nat { cell += n; cell };
  public func sub(n:Nat) : async Nat { cell -= n; cell };
  public func mul(n:Nat) : async Nat { cell *= n; cell };
  public func div(n:Nat) : async ?Nat {
    if ( n == 0 ) {
      return null // null indicates div-by-zero error
    } else {
      cell /= n; ?cell
    }
  };

  // Clear the calculator and reset to zero
  public func clearall() : async Nat {
    if (cell : Nat != 0)
      cell -= cell;
    return cell
  };
 };
