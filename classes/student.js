const Person = require("./person");

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    if (student1.GPA === student2.GPA) {
      return "Both students have the same GPA.";
    } else {
      return Math.max(student1.GPA, student2.GPA) === student1.GPA
        ? `${student1.firstName} ${student1.lastName} has the higher GPA.`
        : `${student2.firstName} ${student2.lastName} has the higher GPA.`;
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
