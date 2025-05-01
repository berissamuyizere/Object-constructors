//Question1
function User(name){
    this.name = name;
    this.stepsWalked = function (steps){
        return steps.reduce((step, currentStep) => step + currentStep, 0)
 
    }
    this.averageSteps = function (steps){
        const sum = this.stepsWalked(steps);
        const average = sum/ steps.length;
        return average
    }
}

const user = new User("Belize");
console.log({user});

console.log(user.stepsWalked([2,3,4,5,67]));
console.log(user.averageSteps([1,2,3,4,5,6]));

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

function Car(model, mileage, serviceHistory){
    this.model = model;
    this.mileage = mileage;
    this.serviceHistory = serviceHistory
    this.addService = function(date){
        console.log(`this is a ${this.model} ${mileage} ${date}`)
        serviceHistory = serviceHistory.push(date)
    }

    this.lastService = function(){
        return this.serviceHistory.at(-1)
    }
}
const newCar = new Car("mercede", "30km/hr", ["june 4th 2026", "September 23rd 2026"])
console.log(newCar)

newCar.addService("November 4th 2026")
console.log(newCar.lastService())

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
