const splitBill = (amount , numPeople) => (`Each person needs to pay ${amount / numPeople}`)


function countdown(startingNumber ,step){
    let countFromNum = startingNumber + step
    return function decrease(){
    countFromNum -=step;
    return countFromNum;
    }
}
const countingDown =countdown(20,2);
