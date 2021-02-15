var Allbuttons = document.querySelectorAll('button');
var withdrawButtons = Array.prototype.filter.call(buttons, function (el) {
    return el.textContent.trim() === 'Withdraw';
});

var withdrawRecursively = (index) => {
    if (index === withdrawButtons.length) {
        alert("All connections withdrawn on the page!");
        checkNextPage();
    } else {
        withdrawButtons[index].click();
        setTimeout(() => clickNewWithdraw(index), 1000);
    }
}

var clickNewWithdraw = (index) => {
    var AllButtons = document.querySelectorAll('button');
    var newWithdrawButtons = Array.prototype.filter.call(AllButtons, function (el) {
        return el.textContent.trim() === 'Withdraw' && !withdrawButtons.includes(el);
    });
    newWithdrawButtons[0].click();
    setTimeout(() => withdrawRecursively(index+1), 1000);
}