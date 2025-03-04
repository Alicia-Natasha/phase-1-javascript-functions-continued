// code your solution here

function saturdayFun(rollerSkate = "roller-skate") {
    return `This Saturday, I want to ${rollerSkate}!`;
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*") {
    return function(adjective = "stupendous") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
