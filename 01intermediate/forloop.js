const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

// Get from mon to sat

for (let index = 0; index < days.length; index++) {
    console.log( days[index]);
}

// Get from sat to mon

for (let index = days.length - 1; index >= 0; index--) {
    console.log( days[index]);
}