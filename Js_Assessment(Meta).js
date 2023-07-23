// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(_car_name, _car_color, _engne_type, _price) {
  const NFT = {
    _car_name,
    _car_color,
    _engne_type,
    _price,
  };

  NFTs.push(NFT);
  console.log("Minted: " + _car_name);
}

// create a "loop" that will go through an "array" of NFT's
function listNFTs() {
  for (let i = 0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i + 1));
    console.log("Name: \t\t" + NFTs[i]._car_name);
    console.log("Color: \t\t" + NFTs[i]._car_color);
    console.log("EngineType: \t" + NFTs[i]._engne_type);
    console.log("Price: \t\t" + NFTs[i]._price);
  }
}

// print the total number of NFTS we have minted to the console
function getTotalSupply() {
  console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Tesla", "Blue", "Electric", 50000);
mintNFT("Lamborghini", "Red", "Gas", 200000);
mintNFT("Bugatti", "Black", "Hybrid", 300000);
mintNFT("Ferrari", "Yellow", "Gas", 100000);
listNFTs();
getTotalSupply();
