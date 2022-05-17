function Student(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.courses = []
}
Student.prototype.name = function() {
    console.log(this.firstName + " "+ this.lastName)
}
Student.prototype.enroll = function(course) {
    if (!this.courses.includes(course)) {
        this.courses.push(course)
        course.students.push(this)
    }
}

Student.prototype.courseLoad = function() {
    map = new Map()
    this.courses.forEach(course => {
        if (map[course.department]) {
            map[course.department] +=course.numCredits
        }
            else{
                map[course.department] = course.numCredits
            }
        
    })
}

function Course(courseName, department, numCredits) {
    this.courseName = courseName
    this.department = department
    this.numCredits = numCredits
    this.students = []
}
Course.prototype.addStudent = function(student) {
    student.enroll();
}