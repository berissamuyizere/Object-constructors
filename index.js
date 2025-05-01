


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
// ste

const User ={
    name: "Belise",
    stepsWalked: function(steps){
        return steps.reduce((step, currentStep) => step + currentStep, 0)
    },
    averageSteps: function(steps){
        const sum = this.stepsWalked(steps);
                const average = sum/ steps.length;
                return average
    }
}

console.log(User.name);

console.log(User.stepsWalked([2,3,4,5,67]));
console.log(User.averageSteps([1,2,3,4,5,67]));



//question2

function Recipe(name, ingredients, cookTime){
    this.name = name;
    this.ingredients = ingredients;
    this.cookTime = cookTime;
    this.displayRecipe = function(){
        console.log(`${this.name}  and its ingredients are: ${this.ingredients}`)
    }
    this.isQuickMeal = function(){
        if(this.cookTime <= 30){
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


const Car = {
    model: "Land cruizer",
    mileage: "30km/hr",
    serviceHistory: ["june 4th 2026", "September 23rd 2026"],
    addService: function (date){
        console.log(`this is a ${this.model} ${this.mileage} ${this.date}`)
        this.serviceHistory = this.serviceHistory.push(date)
    },
    lastService: function(){
      return this.serviceHistory.pop()
    }
    
}
Car.addService("November 4th 2026")
console.log(Car.lastService())





//question4

function Playlist(songs){
    this.songs = songs;
    this.addSong = function(title){
        console.log( `added a new song title ${title}`)
        songs = songs.push(title)
        console.log(this.songs)
    }
    this.removeSong = function(title){
        for(let i = 0; i< this.songs.length; i++){
            if(this.songs[i] === title){
                this.songs.splice(i, 1)
            }
        }
        console.log(this.songs)
    }
    this.listSong = function(){
        console.log(this.songs)
    }

}
const playlist = new Playlist(["2002", "flaws", "someone", "Evil"])
console.log(playlist)

playlist.addSong("Bumm")
playlist.removeSong("2002")
playlist.listSong()


//question5

function Course(title, lessons, completeLessons){
    this.title = title;
    this.lessons = lessons;
    this.completeLessons = completeLessons
    this.markComplete = function(lesson){
        completeLessons = completeLessons.push(lesson)
    }
    this.getProgress = function(){
        console.log(`${completeLessons} out of ${lessons.length} lessons completed`)
    }
}

const course = new Course("Software", ["Java", "Kotlin", "Python", "QA", "NYJ", "PM"], ["Java", "QA", "PM"])
console.log(course)
course.markComplete(["Kotlin"])
course.getProgress()
