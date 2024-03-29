// class File {
//   // Write your code here :D
//   _fullName;
//   _extension;

//   constructor (fullName, content = '') {

//     this._fullName = fullName;
//     this._extension = this.setExtension(fullName);
//     this._fileName = this.setfileName(fullName);

//     this._content = content.split('\n');
//     this._line = 0;
//     this._char = 0;
//   }

//   get fullName() {

//     if(this._extension !== undefined) {
//       return this._fullName;
//     }

//   }

//   get extension() {
//     return this._extension;
//   }

//   get filename() {
//     if(this._extension !== undefined) {
//     return this._fileName;
//     }
//   }

//   setExtension(fullName) {
//     const extensionIndex = fullName.search(/\.[a-z]+$/);
//     if(extensionIndex !== -1) {
//       return this._extension = fullName.slice(extensionIndex + 1);
//     }
//   }

//   setfileName(fullName) {
//     const extensionIndex = fullName.search(/\.[a-z]+$/);
//     return this._fileName = fullName.slice(0, extensionIndex);
//   }

//   getContents() {
//     return this._content;
//   }

//   write(content) {
//     this._line = 0;
//     this._char = 0;
//     return this._content = this._content.length > 0 ? this._content + '\\n' + content :  content;
//   }

//   gets() {
//     const answer = this._content.split('\\n')[this._line];
//     this._line += 1;

//     return answer
//   }

//   getc() {
//     const answer = this._content[this._char];
//     this._char += 1;

//     return answer
//   }

// }
class File {
  // Write your code here :D
  _fullName;
  _extension;

  constructor (fullName, content = '') {

    this._fullName = fullName;
    this._extension = this.setExtension(fullName);
    this._fileName = this.setfileName(fullName);

    this._content = content ? content.split('\n') : [];
    this._line = 0;
    this._char = 0;
  }

  get fullName() {

    if(this._extension !== undefined) {
      return this._fullName;
    }

  }

  get extension() {
    return this._extension;
  }

  get filename() {
    if(this._extension !== undefined) {
    return this._fileName;
    }
  }

  setExtension(fullName) {
    const extensionIndex = fullName.search(/\.[a-zA-Z0-9]+$/);
    if(extensionIndex !== -1) {
      return fullName.slice(extensionIndex + 1);
    }
  }

  setfileName(fullName) {
    const extensionIndex = fullName.search(/\.[a-zA-Z0-9]+$/);
    return this._fileName = fullName.slice(0, extensionIndex);
  }

  getContents() {
    return this._content.join('\n');
  }

  write(content) {
    this._line = 0;
    this._char = 0;
    return this._content.push(content);
  }

  gets() {
    const answer = this._content[this._line];
    this._line += 1;

    return answer
  }

  getc() {
    const answer = this._content.join('\n')[this._char];
    this._char += 1;

    return answer
  }

}

const example = new File('1n67r3pr2nbwufxpcnd5p.u8jduqkqp1lqjx3cdliim.frb8vmexpr0eh7x9xw2cpt.wzbiuwo82ojrcs3482z6n', "");

console.log(example.filename)








































// `Fun with ES6 Classes #6 - Fake Files (Basic)
// Kata and Series Overview
// In Kata #1-4 in this series, we learned the fundamentals and features of ES6 classes including ES6 class syntax, classical inheritance in ES6 (as opposed to prototypal inheritance in all previous versions of ECMAScript/Javascript), getters and setters. In Kata #5 of this Series we began to apply our knowledge of ES6 classes to solve the challenge, but the challenge was still a bit Codecademy-like (traning level code) and did not resemble a real world application. Therefore, in this Kata of the series, we are going to apply our knowledge of ES6 class syntax and features in a semi-real world application.

// Task
// You will be defining a class File (ES6 syntax please :) ) with the following properties and methods:

// Properties
// fullName
// fileName
// extension
// Methods
// getContents()
// write(str)
// gets()
// getc()
// Your File class should exhibit the following behaviour:

// Constructor
// Your constructor should accept two arguments in the following order: fullName and contents, where fullName is the full name of the file (including file extension) and contents is the file contents.

// An instance of your File class should exhibit the following behaviour:

// fullName (property)
// Should contain the full name of the file, including the file extension. Please note that the fullName property should be read-only, which means that attempts to reassign fullName a new value should fail and it should retain its original value. 

// fileName (property)
// Should contain the name of the file, excluding the file extension. Should also be read-only which means reassignment attempts should fail. E.g.

// extension (property)
// Should contain the file extension. Read-only. E.g.

// getContents (method)
// Should return the contents of the file every time. E.g.

// write (method)
// Should accept exactly 1 argument str, the new content to be written to the file. The new content should be written on a new line on the file.

// gets (method)
// Returns a line on the file, starting on Line 1. Successive calls to the method should return successive lines on the file. If the number of calls exceeds the number of lines on the file, simple return undefined

// getc (method)
// Should return a character on the file, starting from the first character. Successive calls should return successive characters on the file. If the number of calls exceeds the number of characters on the file, it should simply return undefined.

// Note regarding fileNames
// For the purposes of this Kata, all fileNames used in this Kata will be valid fileNames. Valid fileNames are summarized as follows:

// Contains a fileName and extension (e.g. LICENSE.txt is a valid fileName, LICENSE is not)
// fileName contains only alphanumeric characters (both uppercase and lowercase), underscores, spaces and/or dots (e.g. index.php, class.phptester.php, alpha beta.gamma_delta01.complicatedExample.txt are all valid fileNames). Edge cases will not be considered (e.g. successive dots - Hello World..txt - will not appear in the test cases)
// Extension contains only lowercase alphanumeric characters (e.g. txt, php, php3 are all valid)
// Note regarding file content
// All file content will be valid. In this Kata, valid file content may include alphanumeric characters (uppercase or lowercase), underscores, ordinary whitespace, punctuation or mathematical symbols, in which each line will be separated from the next by a newline character ("\n"). There will not be tabs or other whitespace/newline characters other than "\s" (spacebar) or "\n" and the contents of any file will not start or end with a newline. You may also assume that when the tests use the write(str) method, the string str will not contain newline characters itself.

// `