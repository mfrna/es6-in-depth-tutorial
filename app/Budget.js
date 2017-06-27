const Budget = () => {
    let balance = 0;
    let modifyBal = (amount) => {
        return balance += amount;
    }

    let add10 = () => modifyBal(10);
    let withdraw10 = () => modifyBal(-10);
    let showBal = () => balance;

    return {add10,withdraw10,showBal}
}

export default Budget