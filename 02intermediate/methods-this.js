
// Trello v3

let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        this.meetings = this.meetings + num

    },

    summary: function(){
        return `You have ${this.meetings} meetings today!`
    }
}

// let myTodosTwo = {
//     day: 'Tuesday',
//     meetings: 8,
//     meetDone: 5,

//     addMeeting: function(){
        // console.log('Heyyy, I am a function');
//         console.log(this)
//     }
// }


myTodos.addMeeting(4)
console.log(myTodos.summary());
// myTodosTwo.addMeeting()

// Assignment
// Handle meeting done
// Create a fn that can reset entire day
