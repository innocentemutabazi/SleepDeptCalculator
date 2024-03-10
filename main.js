
const getSleepHours = day => {
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 4;
    } else if (day === 'thursday') {
        return 8;
    } else if (day === 'friday') {
        return 6;
    } else if (day === 'saturday') {
        return 6;
    } else if (day === 'sunday') {
        return 9;
    }
};
console.log(getSleepHours('monday'));
console.log(getSleepHours('saturday'));

const getActualSleepHours = () => {
    return getSleepHours('monday') +
     getSleepHours('tuesday') + 
     getSleepHours('wednesday') + 
     getSleepHours('thursday') + 
     getSleepHours('friday') + 
     getSleepHours('saturday') + 
     getSleepHours('sunday');
};

console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
        console.log('Congratulations, you actually slept' + (idealSleepHours) + 'just as you wanted to');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed. You slept ' + (actualSleepHours - idealSleepHours) + ' hours extra.');
    } else {
        console.log('You should get some rest. You slept ' + (idealSleepHours - actualSleepHours) + ' hours less than needed.');
    }
};
calculateSleepDebt();
