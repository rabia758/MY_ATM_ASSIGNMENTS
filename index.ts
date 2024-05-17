#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.redBright ("\t\n\t!!!-----------WELCOM TO MY ATM-MACHINE----------!!!\t\t\n"));

let mybalance = 50000;
let mypin = 1234;

let pinanswer = await inquirer.prompt(
    [
        {
            name:"pin",
            message:chalk.magenta("please enter your pin!"),
            type:"number",
        }
    ]
)
            
if(pinanswer.pin === mypin){
    console.log(chalk.red("you enter correct pincode!!!"));

let operationans = await inquirer.prompt(
    [
        {
            name:"operation",
            message:chalk.magenta("\nplease select option!\n"),
            type: "list",
            choices:["withdraw", "check balance","deposite"],
        }
    ]
)
if (operationans.operation === "withdraw"){
    let withdrawAns =await inquirer.prompt(
        [
          {
            name:"withdraw_method",
            type:"list",
            message:chalk.magenta("\n Select an operation!!\n "),
            choices:["Fast Cash", "Enter Amount"]
          },
        ]
      );
      if(withdrawAns.withdraw_method === "Enter Amount"){
      let amountAns = await inquirer.prompt([
          {
            name: "amount",
            message: chalk.magenta("\nEnter your amount to Withdraw:\n"),
            type: "number",
          },
        ]);
        mybalance -= amountAns.amount
        if(amountAns.amount <=50000 ){
          console.log(chalk.red(`\n ${amountAns.amount}$ withdraw successfully!\n`))
        console.log(chalk.green(`\nyour remaining amount is ${mybalance}$\n`));
        }else{
          console.log(chalk.red("\nPlease enter a valid amount you have only 50000\n"));
          
        }
      } else if(withdrawAns.withdraw_method === "Fast Cash"){
        let fastcashAns = await inquirer. prompt(
          [
            {
              name:"Fast_Cash",
              type:"list",
              message:chalk.magenta("\nSelect Amount:\n"),
              choices:["10000","2500","30000","60000"],
            }
          ]
        );
        if(fastcashAns.Fast_Cash > mybalance){
          console.log(chalk.red("\nInsufficient Balance\n"))
        }else{
          mybalance -= fastcashAns.Fast_Cash
          console.log(chalk.green(`\n ${fastcashAns.Fast_Cash} withdraw successfully!\n`))
          console.log(chalk.green(`\nyour remaining amount is ${mybalance}$\n`));
        }
      }
      
    }
    else if(operationans.operation === "check balance"){
      console.log(chalk.red(" your balance is " + mybalance !!!!) );
      
    }
    else if(operationans.operation === "deposite"){
      let cashAns = await inquirer.prompt(
      [
        {name:"cash",
         message:chalk.magenta("\nwhich amount you want to deposite?\n"),
         type:"list",
         choices:[5000,10000,15000,20000],
        }   
      ]
      )
      console.log(chalk.green(`\ntoday you deposite ${cashAns.cash} cash in your bank account so now your total amount is ${mybalance + cashAns.cash}\n`));
      
    }
  
   
}
else{
      console.log(chalk.green("INcorrect Pin!!"));
}

    console.log("~".repeat(50));
    console.log(chalk.redBright(".............!!!!!THANKYOU FOR USE MY ATM!!!!............"))
