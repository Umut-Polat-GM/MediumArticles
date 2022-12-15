# Javascript de Call,Apply ve Bind Fonksiyonları
Bu yazımda Javascripdeki "call", "apply" ve "bind" fonksiyonlarını açıklamaya çalışacağım.Açıklamaya başlamadan önce çok karmaşık gibi görünsede aynı amaç için kullanılan farklı syntax yapısındaki fonsiyonlar olduklarını belirmek isterim. <br>
Javascript dilinde "call", "apply" ve "bind" fonksiyonları, bir fonksiyona farklı bir nesne için çağırmak için kullanılır. Bu fonksiyonlar sayesinde bir fonksiyonun "this" anahtar kelimesini belirli bir nesneye bağlayabilir ve fonksiyonu çağırırken ilk parametre olarak bu nesneyi geçirebiliriz.<br>

Bu fonksiyonların kullanımı aşağıdaki gibidir:

## call()

```javascript
// `person` nesnesini oluşturuyoruz
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Merhaba, benim adım ' + this.name);
  }
};

// `anotherPerson` nesnesini oluşturuyoruz
const anotherPerson = {
  name: 'Jane',
  age: 25
};

// `person` nesnesinin `greet` metodunu `anotherPerson` nesnesi için çağırıyoruz
person.greet.call(anotherPerson); //"call" Çıktı=> Merhaba, benim adım Jane
```
Bu örnekte, "person" nesnesinin "greet" metodunu "anotherPerson" nesnesi için çağırmış oluyoruz. "call" fonksiyonunu kullanarak, "person.greet" fonksiyonunun "this" anahtar kelimesini "anotherPerson" nesnesine bağlamış oluyoruz. Bu sayede, fonksiyon çalıştığında "this.name" değeri "Jane" olacaktır.
## apply()
"apply" fonksiyonu ile aynı işlemi yapabiliriz, ancak apply fonksiyonu ikinci parametre olarak fonksiyona gönderilecek argümanlar için bir array alır.

```javascript
// `person` nesnesinin `greet` metodunu `anotherPerson` nesnesi için çağırıyoruz
person.greet.apply(anotherPerson, []); //"apply" Çıktı=> Merhaba, benim adım Jane
```
Şu alınan array mantıgını bir örnek ile açıklayalım.

```javascript
function sayHello(greeting) {
  console.log(greeting + ', ' + this.name);
}

const person = {
  name: 'John Doe'
};

sayHello.apply(person, ['Hello']); // çıktı: "Hello, John Doe"

```
Burada, "sayHello()" fonksiyonu "apply()" fonksiyonu kullanarak "person" nesnesinin "this" değerini kullanır ve ayrıca "greeting" argümanına "'Hello'" değerini geçirir. Böylece, "sayHello()" fonksiyonu çağrıldığında ekrana "Hello, John Doe" yazdırılır.

## bind()

"bind" fonksiyonu ise "call" ve "apply" fonksiyonlarına benzer bir şekilde çalışır, ancak "bind" fonksiyonu bir fonksiyonu değiştirmez, aksine yeni fonksiyon döndürür.<br>
Örneğin, aşağıdaki kod parçacığında "bind" fonksiyonu kullanılmaktadır:

```javascript
function sayHello(greeting) {
  console.log(greeting + ', ' + this.name);
}

const person = {
  name: 'John Doe'
};

const boundSayHello = sayHello.bind(person, 'Hello');
boundSayHello(); // çıktı: "Hello, John Doe"

```
Bu kod parçacığında, "sayHello()" fonksiyonuna "bind" fonksiyonu ile yeni bir fonksiyon oluşturduk. Bu yeni fonksiyonun "this" değerini "person" nesnesine bağladık ayrıca "greeting" argümanına 'Hello' değerini verdik. Böylece, bu yeni fonksiyon sayHello() fonksiyonunun aynısı olmuş oldu, ancak this değeri ve argümanları önceden belirtilmiştik. Bu yüzden, "boundSayHello()" fonksiyonu çağrıldığında ekrana "Hello, John Doe" yazdırıldı. <br>

Şimdi ilk yaptığımız person nesnesi için de bind fonksiyonunu oluşturalım. Ve aynı amaç uğruna farklı şekilde kullanılabildiklerini ispatlayalım.

```javascript
// `person` nesnesinin `greet` metodunu `anotherPerson` nesnesi için çağırmak için bir fonksiyon oluşturuyoruz
const greetAnotherPerson = person.greet.bind(anotherPerson);

// Oluşturduğumuz fonksiyonu çağırıyoruz
greetAnotherPerson(); //"bind" Çıktı=> Merhaba, benim adım Jane
```
"bind" fonksiyonu ile "greetAnotherPerson" isimli bir fonksiyon oluşturmuş olduk. Bu fonksiyon "person.greet" fonksiyonunu "anotherPerson" nesnesi için çağırır. Böylece, fonksiyon çalıştığında "this.name" değeri "Jane" olacaktır.

### Kısacası

```javascript
// `call` ve `apply` fonksiyonları fonksiyonu direkt olarak çalıştırır
person.greet.call(anotherPerson);
person.greet.apply(anotherPerson, []);

// `bind` fonksiyonu ise fonksiyonu çalıştırmak için döndürdüğü yeni bir fonksiyonu çağırmamızı gerektirir
const greetAnotherPerson = person.greet.bind(anotherPerson);
greetAnotherPerson();
```

Bu farklılık, "call" ve "apply" fonksiyonlarının daha esnek kullanılabileceğini gösterir. Örneğin, bir fonksiyonu çağırırken daha fazla parametre göndermek istersek, "apply" fonksiyonunu kullanarak bu parametreleri bir dizi olarak gönderebiliriz.

```javascript
function add(x, y) {
  return x + y;
}

console.log(add.call(this, 1, 2)); // Çıktı: 3
console.log(add.apply(this, [1, 2])); // Çıktı: 3
```
Ayrıca, "call" ve "apply" fonksiyonlarının bir değeri döndürmezken, bind fonksiyonu döndürdüğü yeni fonksiyonun değerini döndürebilir. Böylece, "bind" fonksiyonu ile bir fonksiyonu bir değişkene atayarak daha sonra bu değişken üzerinden çağırabiliriz.

```javascript
const addOne = add.bind(this, 1);
console.log(addOne(2)); // Çıktı: 3
```
Umarım bu açıklamalar yardımcı olmuştur.