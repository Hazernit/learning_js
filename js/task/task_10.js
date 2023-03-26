"use strict";


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj) {
        const {age} = obj;
        const {languages} = obj.skills;

        let answer = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            answer += `${lang.toUpperCase()} `;
            
        });

        return answer;

        // let line = new String (obj.skills.languages);
        // line = line.replace(",", " ").toUpperCase()
        // let answer = `Мне ${obj.age} и я владею языками: ${line}`;
        // return answer;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan) {
    return plan.skills.exp;
}


function showProgrammingLangs(plan) {
    let answer = ""
    for (let key in plan) {
        if (typeof(plan[key]) === 'object') {
            // console.log(plan[key])
            for (let obj in plan[key]) {
                // console.log(obj)
                if (obj == "programmingLangs") {
                    
                    for (let i in plan[key][obj]) {
                        answer += `Язык ${i} изучен на ${plan[key][obj][i]}\n`
                    }
                }
            }
        } 
    };
    return answer
}

console.log(showProgrammingLangs(personalPlanPeter))


"sdf"