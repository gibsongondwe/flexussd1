// // const { balance, createNewAccount, deposit, withdraw, transfer } = require('./firebase');

// const createNewAccount = async (rl, promptInput) => {
//   console.log('\nCreate account');
//   const acId = parseInt(await promptInput('Enter account Id'), 10);
//   const acNm = await promptInput('Enter account name');
//   const balance = 0;
//   createNewAccount({ acId, acNm, balance });
//   // ... rest of the code to handle account creation
// };

// const deposit = async (rl, promptInput) => {
//   console.log('\nPlease deposit money');
//   const acId = parseInt(await promptInput('Enter account Id'), 10);
//   const amount = parseFloat(await promptInput('Enter amount'));
//   deposit({ acId, amount });
//   // ... rest of the code to handle deposit
// };

// // ... Define other operations similarly ...

// module.exports = { createNewAccount, deposit, withdraw, checkBalance, transfer };




case 1:
            console.log(
              `\nYour current balance is Kw.${usr.balance.toFixed(2)}`
            );
            break;
          case 2:
            amount = parseFloat(await prompt("\nEnter the amount:\t"));
            usr.balance += amount;
            fs.writeFileSync(filename, JSON.stringify(usr));
            console.log("\nSuccessfully deposited.");
            break;
          case 3:
            amount = parseFloat(await prompt("\nEnter the amount:\t"));
            usr.balance -= amount;
            fs.writeFileSync(filename, JSON.stringify(usr));
            console.log("\nSuccessfully withdraw.");
            break;

          case 4:
            const transferPhone = await prompt(
              "\nPlease enter the phone number to transfer to: "
            );
            const transferAmount = parseFloat(
              await prompt("\nPlease enter amount to transfer: ")
            );
            const transferFilename = path.join(
              __dirname,
              `${transferPhone}.dat`
            );

            if (!fs.existsSync(transferFilename)) {
              console.log("\nAccount number not registered");
            } else {
              const usr1 = JSON.parse(
                fs.readFileSync(transferFilename, "utf8")
              );
              if (transferAmount > usr.balance) {
                console.log("\nInsufficient balance");
              } else {
                usr1.balance += transferAmount;
                fs.writeFileSync(transferFilename, JSON.stringify(usr1));
                console.log(
                  `\nYou have successfully transferred Kw.${transferAmount.toFixed(
                    2
                  )} to ${transferPhone}`
                );
                usr.balance -= transferAmount;
                const userFilename = path.join(__dirname, `${usr.phone}.dat`);
                fs.writeFileSync(userFilename, JSON.stringify(usr));
              }
            }
            break;
          case 5:
            const paymentPhone = await prompt("\nPlease enter the phone number to pay to: ");
            const paymentAmount = parseFloat(await prompt("\nPlease enter amount to pay: "));
            const paymentFilename = path.join(__dirname, `${paymentPhone}.dat`);
              
            if (!fs.existsSync(paymentFilename)) {
              console.log("\nAccount number not registered");
            } else {
              const usr1 = JSON.parse(fs.readFileSync(paymentFilename, "utf8"));
              if (paymentAmount > usr.balance) {
                console.log("\nInsufficient balance");
              } else {
                usr1.balance += paymentAmount;
                fs.writeFileSync(paymentFilename, JSON.stringify(usr1));
                usr.balance -= paymentAmount;
                fs.writeFileSync(filename, JSON.stringify(usr));
                console.log(`\nYou have successfully paid Kw.${paymentAmount.toFixed(2)} to ${paymentPhone}`);
              }
            }
            break;
          case 6:
            const newPassword = await prompt(
              "\nPlease enter your new password: "
            );
            usr.password = newPassword;
            const userFilename = path.join(__dirname, `${usr.phone}.dat`);
            fs.writeFileSync(userFilename, JSON.stringify(usr));
            console.log("\nPassword successfully changed");
            break;

          default:
            console.log("\nInvalid option");
            break;
          // ... Implement other cases similarly ...