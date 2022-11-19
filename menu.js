import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Banking Record System");
console.log("\n Please choose one of the following points");
console.log("\n 1.Create a new account");
console.log("\n 2.Check the balance of the already existing bank account");
console.log("\n 3.Add money to the account");
console.log(
  "\n 4.Transfer money from one account to another existing accounts"
);
console.log("\n 5.Sort and show the accounts by balance decrease");
console.log("\n 6.Close (delete) an account");

const ip = async () => {
  return new Promise((resolve, reject) => {
    rl.question(`\n Please choose one of the above options : `, (ch) => {
      resolve(ch);
    });
  });
};

const start = async () => {
  while (true) {
    const choice = await ip();
    if (choice == 1) {
      console.log("Account created");
    } else if (choice == 2) {
      console.log("Check the balance");
    } else if (choice == 3) {
      console.log("Please add money");
    } else if (choice == 4) {
      console.log("TRanfer money");
    } else if (choice == 5) {
      console.log("Sort");
    } else if (choice == 6) {
      console.log("Close the account");
    } else {
      console.log("There is no such option, \n Thank you!");
      process.exit();
    }
  }
};

start();

// rl.question(`\n Please choose one of the above options : `, (ch) => {
//   console.log(`\n You have chosen ${ch}`);
//   rl.close();
// });

// rl.on("close", () => {
//   console.log("\n Thank You");
//   process.exit(0);
// });
