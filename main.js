const calculateButton = document.getElementById('calculate-button');
const sleepHoursInputs = document.querySelectorAll('.sleep-hours');

calculateButton.addEventListener('click', calculateSleepDebt);

function calculateSleepDebt() {
    let totalActualSleepHours = 0;
    const idealHours = 8;

    sleepHoursInputs.forEach(input => {
        if (input.value) {
            totalActualSleepHours += parseInt(input.value);
        }
    });

    const idealSleepHours = idealHours * 7;

    let resultMessage;
    if (totalActualSleepHours === idealSleepHours) {
        resultMessage = 'Congratulations, you actually slept ' + idealSleepHours + ' hours, just as you wanted to.';
    } else if (totalActualSleepHours > idealSleepHours) {
        resultMessage = 'You got more sleep than needed. You slept ' + (totalActualSleepHours - idealSleepHours) + ' hours extra.';
    } else if (totalActualSleepHours===0) {
        resultMessage='You did not get any sleep at all'
    }
    else {
        resultMessage = 'You should get some rest. You slept ' + (idealSleepHours - totalActualSleepHours) + ' hours less than needed.';
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = resultMessage;
}
