type EnergyOffer = {
  seller: Text;
  energyAmount: Nat;
  price: Nat;
};

type EnergyTrade = {
  buyer: Text;
  seller: Text;
  energyAmount: Nat;
  totalPrice: Nat;
};

actor class EnergyTradingPlatform {
  var offers: [EnergyOffer] = [];
  var trades: [EnergyTrade] = [];
  var offer: [EnergyOffer] = [];

  public func createOffer(seller: Text, energyAmount: Nat, price: Nat) : async {
    offer : EnergyOffer -> { seller : seller; energyAmount : energyAmount; price : price };
    offers := Array.append(offers, [offer]);
  }

  public func executeTrade(buyer: Text, offerIndex: Nat) : async {
    if (offerIndex >= offers.length) {
      // Handle invalid offer index
      return;
    }

    let offer = offers[offerIndex];
    if (buyer == offer.seller) {
      // Handle self-trading
      return;
    }

    let totalPrice = offer.price * offer.energyAmount;

    trades := Array.append(trades, [{ buyer = buyer; seller = offer.seller; energyAmount = offer.energyAmount; totalPrice = totalPrice }]);

    // Remove the offer after the trade is executed
    offers := Array.remove(offers, offerIndex);
  }

  public query func getOffers() : async [EnergyOffer] {
    return offers;
  }

  public query func getTrades() : async [EnergyTrade] {
    return trades;
  }
}

public actor func createEnergyTradingPlatform() : async EnergyTradingPlatform {
  return await EnergyTradingPlatform();
}
