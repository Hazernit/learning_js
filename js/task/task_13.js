"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let totalPerim3 = 0

    for (let i = 0; i < data["shops"].length; i++) {
        // console.log(data["shops"][i])
        // console.log(data["shops"][i]["width"], data["shops"][i]["length"], data.height)
        const perim3 = data["shops"][i]["width"] * data["shops"][i]["length"] * data.height
        // console.log(perim3)
        totalPerim3 += perim3
        // console.log(totalPerim3)
    }

    const fullCost = totalPerim3 * data.moneyPer1m3
    // console.log(fullCost)
    if (fullCost <= data.budget) {
        return "Бюджета достаточно";
    }
    return "Бюджета недостаточно";
}

console.log(isBudgetEnough(shoppingMallData))



