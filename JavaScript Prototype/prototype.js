function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // `greet` metodunu `Person` nesnesinin prototype'ına ekliyoruz
  Person.prototype.greet = function() {
    console.log('Merhaba, benim adim ' + this.name);
  }
  
  // `Person` nesnesinden kalıtım alan `Student` nesnesini oluşturuyoruz
  function Student(name, age, major) {
    // `Student` nesnesinin `Person` nesnesinden kalıtım aldığını belirtiyoruz
    Person.call(this, name, age);
  
    this.major = major;
  }
  
  // `Student` nesnesinin prototype'ını `Person` nesnesinin prototype'ına bağlıyoruz
  Student.prototype = Object.create(Person.prototype);
  // `Student` nesnesinin prototype'ının constructor özelliğini `Student` nesnesine ayarlıyoruz
  Student.prototype.constructor = Student;
  
  // `Student` nesnesinden kalıtım alan `GraduateStudent` nesnesini oluşturuyoruz
  function GraduateStudent(name, age, major, degree) {
    // `GraduateStudent` nesnesinin `Student` nesnesinden kalıtım aldığını belirtiyoruz
    Student.call(this, name, age, major);
  
    this.degree = degree;
  }
  
  // `GraduateStudent` nesnesinin prototype'ını `Student` nesnesinin prototype'ına bağlıyoruz
  GraduateStudent.prototype = Object.create(Student.prototype);
  // `GraduateStudent` nesnesinin prototype'ının constructor özelliğini `GraduateStudent` nesnesine ayarlıyoruz
  GraduateStudent.prototype.constructor = GraduateStudent;
  
  // Örnek nesneler oluşturuyoruz
  const john = new Person('John', 30);
  const jane = new Student('Jane', 20, 'Computer Science');
  const jim = new GraduateStudent('Jim', 25, 'Physics', 'PhD');
  
  // Örnek nesnelerin metotlarını çağırıyoruz
  john.greet(); // Çıktı: Merhaba, benim adım John
  jane.greet(); // Çıktı: Merhaba, benim adım Jane
  jim.greet(); // Çıktı: Merhaba, benim adım Jim
  