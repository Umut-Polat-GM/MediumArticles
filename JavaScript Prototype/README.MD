## JavaScript object.prototype nedir?
JavaScript prototype, JavaScript dilinde nesnelere özellikler ve yöntemler eklemenize olanak sağlayan bir özelliktir.Diğer bir deyişle JavaScript nesneleri özelliklerini ve metotlarını prototiplerinden alır.Bu önemli bir kavramdır, çünkü diğer nesnelerden kalıtım alan nesneler oluşturmanıza olanak sağlar.<br>
Derin bir nefes al lütfen daha yeni başladık!!!<br>
new Date() ile nesne oluşturduğumuzda bu nesne özellik ve metotlarını Date.protoype den alır.<br>
Olayı biraz abartıp bir noktaya dikkat çekmek istiyorum.<br>
JavaScript'teki her nesnenin bir prototipi vardır.Javascript nesne tabanlı bir dil olması bu noktaya dikkat çekmemin en önemli nedenidir. Çok fazla uzatmadan bu noktanın derinliğinin araştırılmasını okuyucuya bırakıyorum.<br>

Bir örnek ile devam edelim.

```javascript
//Boş bir nesne oluşturalım.
let obj = {};
console.log(obj.toString());
// Çıktı: "[object Object]"
```
Bu kodda "obj" adında boş bir nesne oluşturduk ve ardından onun üzerinde toString() methodunu çağırdık. toString() yöntemi, obj nesnesinin kendisinde tanımlanmamıştır, ancak Object.prototype öğesinden devralındığı için kullanılabilir. Bu kodu çalıştırdığımızda, JavaScript'te bir nesnenin varsayılan dize temsili olan "[object Object]" ifadesini çıktı olarak gördük.

JavaScript prototype kullanarak bir nesne oluşturalım:

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log('Merhaba, benim adim ' + this.name);
}

const dog = new Animal('Max');
dog.speak(); // Çıktı: Merhaba, benim adım Max
```

Yukarıdaki örnekte, "name" özelliği ve "speak" yöntemi olan bir "Animal" nesnesi oluşturuyoruz. "speak" yöntemi, prototype kullanarak "Animal" nesnesine eklenir. Daha sonra "Max" isimli bir "Animal" nesnesi oluşturur ve "speak" yöntemini çağırırız, bu da "Merhaba, benim adım Max" mesajını çıktı olarak verir.<br>

### Object.create()

object.prototype anlatırken Object.create() anmasak olmaz çünkü Object.create() ile kendi nesne prototiplerimizi oluşturabiliriz.<br>

Acill örnek!!!
```javascript
// Object.create() kullanalim
let myPrototype = {
  sayHello: function() {
    console.log('Merhaba!');
  }
};

let obj = Object.create(myPrototype);
obj.sayHello(); // Çıktı: "Merhaba!"
```
```javascript
// Constructor function
function MyObject() {
}

MyObject.prototype.sayHello = function() {
  console.log('Merhaba!');
};

let obj = new MyObject();
obj.sayHello(); // Çıktı: "Merhaba!"

```
İlk örnekte, prototipi myPrototype olan bir nesne obj oluşturmak için Object.create() yöntemini kullandık. Bu, obj'nin myPrototype'ın özelliklerini ve yöntemlerini devralacağı anlamına gelir. Obj'de sayHello() yöntemini çağırdığınızda, yönteme myPrototype'tan erişecek ve "Merhaba!" yazdıracaktır.<br>

İkinci örnekte, MyObject yapıcı işlevini tanımlıyor ve prototipine sayHello() yöntemini atadık. Ardından, MyObject yapıcısını çağıran ve MyObject.prototype öğesinden miras alan yeni bir nesne oluşturan new anahtar sözcüğünü kullanarak bir nesne nesnesi oluştuduk. Obj'de sayHello() yöntemini çağırdığınızda, yönteme MyObject.prototype'tan erişecek ve "Merhaba!" yazdıracaktır.<br>

Görüldüğü gibi her iki örnek de aynı sonuca ulaştık. Peki aradaki fark ne? Object.create ve Object.prototype biçimindedir. Object.create(), bir yapıcı işlevi kullanırken doğrudan bir nesnenin prototipini belirtmenize olanak tanır diğer taraftan new anahtar sözcüğüde, nesneleri oluşturmak için bir plan tanımlamanıza ve ardından ondan miras alan birden çok nesne oluşturmanıza olanak tanır.

Konuya ısındığımıza göre biraz daha kapsamlı bir örneğe bakalım. Ve bitirelim.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// `greet` metodunu `Person` nesnesinin prototype'ına ekliyoruz
Person.prototype.greet = function() {
  console.log('Merhaba, benim adım ' + this.name);
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

```
Bu örnekte, "Person", "Student" ve "GraduateStudent" nesnelerini oluşturarak, "Student" nesnesinin "Person" nesnesinden kalıtım aldığını "GraduateStudent" nesnesinin "Student" nesnesinden kalıtım aldığını gösterdik.

```javascript
// `Person` nesnesinden kalıtım alan `Student` nesnesini oluşturuyoruz
function Student(name, age, major) {
  // `Student` nesnesinin `Person` nesnesinden kalıtım aldığını belirtiyoruz
  Person.call(this, name, age);

  this.major = major;
}
```
Bu işlemi yapmak için "Person.call" metodunu kullanıyoruz. Bu metot, bir nesne üzerinde bir fonksiyonu çağırarak, bu fonksiyonun "this" anahtar kelimesini belirtilen nesneye bağlar. Böylece "Student" nesnesi, "Person" nesnesinin "name" ve "age" özelliklerini kalıtım alır.Sonra "Student" nesnesine "major" özelliğini ekliyoruz.
Daha detaylı öğrenmek istersen Javascripte de Call, Apply ve Bind yazımı olumanı tavsiye ederim.

Umarım bu açıklamalar yardımcı olmuştur.