import inquirer from "inquirer";

let mybalance = 640000;
let pinCode=7000;
console.log(mybalance);
let pinAnswer=await inquirer.prompt(
    [
        {
            name:"pin",
            type:"number",
            message:"Enter your pin code"
        }
    ]
);
if(pinAnswer.pin===pinCode){
    console.log("correct pin entered");
    let operationAns=await inquirer.prompt(
        [
            {
                name:"option",
                type:"list",
                message:"select opertion to perform",
                choices:["Withdraw","current balance"]
            }
        ]
    )
    if(operationAns.option==="Withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name:"amount",
                    type:"number",
                    message:"enter a amount to wihdraw"
                }
            ]
        )
        
        mybalance-= amountAns.amount;
        
        if(amountAns.amount<mybalance){
            console.log(`your withdraw amount is ${mybalance}`);


        }
        else{
            console.log("Insufficent balance ");
        }
        }
        
       
    
    else if(operationAns.option==="current balance"){
        console.log(`your  balance is  ${mybalance}`);
    }
    
}
else{
    console.log("Incorrect pin code");
}
