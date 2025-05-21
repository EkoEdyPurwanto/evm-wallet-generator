const fs = require("fs");
const { Wallet } = require("ethers");

const totalWallets = 100; // total evm wallet yang ingin di generate
const outputFile = "wallets.csv";

let csvContent = "Index,Address,PrivateKey,Mnemonic\n";

for (let i = 0; i < totalWallets; i++) {
  const wallet = Wallet.createRandom(); // Otomatis generate mnemonic
  const address = wallet.address;
  const privateKey = wallet.privateKey;
  const mnemonic = wallet.mnemonic.phrase;

  csvContent += `${i + 1},${address},${privateKey},"${mnemonic}"\n`;
}

fs.writeFileSync(outputFile, csvContent);
console.log(`✅ Generated ${totalWallets} wallets and saved to ${outputFile}`);
