// 2-hbtn_course.js

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateName(name);
    this._length = this.validateLength(length);
    this._students = this.validateStudents(students);
  }

  // Getter and setter for the name attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateName(newName);
  }

  // Getter and setter for the length attribute
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateLength(newLength);
  }

  // Getter and setter for the students attribute
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateStudents(newStudents);
  }

  // Validation functions
  validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  validateLength(length) {
    const parsedLength = parseInt(length, 10);
    if (isNaN(parsedLength) || typeof parsedLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return parsedLength;
  }

  validateStudents(students) {
    if (!Array.isArray(students) || students.some(student => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }
}
