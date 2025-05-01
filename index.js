


//Question1
// Create a User object with properties like name, stepsWalked (an array of daily steps), and a method totalSteps() that calculates and
//  returns the total number of steps walked. Add another method averageSteps() that returns the average steps per day.

//Pseudocode
//step1. Created an object User with ptoperties name, stepsWalked which is an aray of daily steps walked 
//step2 Added a method to the user object totalSteps() 
//step3 Added a method averageSteps() to the user object
//Step 4 Calculated the steps walked inside the total stepsWalked() method by first creating a variable sume that will hold the current sum in the array of stepsWalked
//step5 Used a reduce method to calculate the total sume of the steps walked and returned the total steps walked.
//step 6 calculated the average steps walked by taking taking the result I got from the totalStepsWalked() method and divide by the length of the stepsWalked array
// step6 returned the average
//step 7 printed the output

const User = {
    name: "Belise",
    stepsWalked: function (steps) {
        return steps.reduce((step, currentStep) => step + currentStep, 0)
    },
    averageSteps: function (steps) {
        const sum = this.stepsWalked(steps);
        const average = sum / steps.length;
        return average
    }
}

console.log(User.name);

console.log(User.stepsWalked([2, 3, 4, 5, 67]));
console.log(User.averageSteps([1, 2, 3, 4, 5, 67]));



//question2

//Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. Add a method displayRecipe() that logs the name and all 
// ingredients in a readable list, and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.

//Pseudocode
// step1 Created a recipe constructor with properties name, ingredients array and cookTime in minutes
//step2  Added a method displayRecipe() and isQuickMeal()
//step3 Logged the name and all ingredients in a readable list inside the displayRecipe() method
//step4  Used an if condition to check if the cookTime is 30 minutes or less 
//step5 the isQuickMeal() returns true when the condition is true
//step6 Printed the output
function Recipe(name, ingredients, cookTime) {
    this.name = name;
    this.ingredients = ingredients;
    this.cookTime = cookTime;
    this.displayRecipe = function () {
        console.log(`${this.name}  and its ingredients are: ${this.ingredients}`)
    }
    this.isQuickMeal = function () {
        if (this.cookTime <= 30) {
            return true
        }
    }
}

const recipe = new Recipe("pasta", ["salt", "sugar", "greens", "egges"], 30)
console.log(recipe)
recipe.displayRecipe()
console.log(recipe.isQuickMeal())


//question3
// Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates). Add a method addService(date)
//  to add a new service record, and lastServiceDate() to return the most recent service date.




//pseudo code
// step1 Created car object and added the it's properties model,mileage,and serviceHistory which is an array of service dates
//step2  created the object methods addService method that takes in date and lastService method()
//steps3 Added new date to the addService method that stores the new date in the service history using push() array method
//step4 Returned the most recent service in the lastServiceDate() method using pop() to remove the last item
// step5 Invoked the the methods using the object name 
// step6 Printed the output


const car = {
    model: "mercede",
    mileage: "30km/hr",
    serviceHistory: ["june 4th 2026", "September 23rd 2026"],
    addService: function (date) {
        console.log(`this is a ${this.model} ${this.mileage} ${date}`)
        serviceHistory = this.serviceHistory.push(date)
    },

    lastService: function () {
        for (let i = 0; i < this.serviceHistory.length; i++) {
            return `The latest service was on ${car.serviceHistory.at(-1)}`;
        }
    }

}
car.addService("November 4th 2026")
console.log(car.lastService())




//question4


// Create a Playlist object with a property songs (an array of song titles). Add methods addSong(title) 
// to add a song, removeSong(title) to delete one, and listSongs() to log all songs currently in the playlist.


//pseudocode
//step1 Create an object playlist with properties array of songs
//step2 Add array of songs to the songs property of the playlist object
//step3 Created addSong(title) method that will add new song titles in playlist songs
//step4 Added the new songs using the push() aray method
//step6 Created removeSong() that removes a specified song title from the songs array
//step5 Printed the list of songs
//step6 Added a new song by passing it to the addSong method
//step7 removed a song by passing it in the removeSong method


const playlist = {
    songs: ["2002", "flaws", "someone", "Evil"],
    addSong: function (title) {
        console.log(`added a new song title ${title}`)
        this.songs.push(title)
        console.log(this.songs)

    },
    removeSong: function (title) {
        for (let i = 0; i < this.songs.length; i++) {
            if (this.songs[i] === title) {
                this.songs.splice(i, 1)
            }
        }
        console.log(this.songs);
        return this.songs;
    }
}
console.log(playlist.songs);
playlist.addSong("Bumm");
playlist.removeSong("someone");

//question5


// Create a Course constructor with title, lessons (an array), and completedLessons (array). Add a method markComplete(lesson) that adds the lesson to 
// completedLessons, and a method getProgress() that returns a string like "3 out of 5 lessons completed".

//pseudocode

//step1 create  course constructor with properties ; title, an array of lessons and an array of completed lessons
//step2 create a method markComplete that addds lessons to the completed lessons 
//step3 create a method getProgress that returns the number of completed lessons out of all lessons
//step4 create a course object that will utilize the constructors properties
//step5 pass the markComplete() method for passing lessons that are completed
//step6 call the getProgress method that will return the progress of the completion of the lessons

function Course(title, lessons, completeLessons) {
    this.title = title;
    this.lessons = lessons;
    this.completeLessons = completeLessons
    this.markComplete = function (lesson) {
        completeLessons = completeLessons.push(lesson)
    }
    this.getProgress = function () {
        console.log(`${completeLessons} out of ${lessons.length} lessons completed`)
    }
}

const course = new Course("Software", ["Java", "Kotlin", "Python", "QA", "NYJ", "PM"], ["Java", "QA", "PM"])
console.log(course)
course.markComplete(["Kotlin"])
course.getProgress()
