module.exports = [
  // Lecture 1
  {
    name: 'React ներածություն',
    byline: 'Առաջին քայլերը React-ում',
    slides: [
      // Lecture0-Slide 1
      {title: 'EcmaScript 6',
       content: [
         `Ժամանակակից վեբ ծրագրավորումը գործածում է JavaScript-ի վերջին հնարավորությունները,
         որոնք պաշտոնապես կոչվում են EcmaScript`,
         `Հունիս 2017-ի տվյալներով, բրաուզերների մեծ մասը հասկանում են ողջ EcmaScript-ը բացի
         ES6 մոդուլային համակարգից`,
         {code: `import React, { Component } from 'react';`},
         `Տեխնիկապես դա անգամ օրինական ES6 չէ, որովհետեւ ES6-ի module loader-ը
         չի թույլատրում &#x27;naked import&#x27;-ների ստեղծումը, դրանք այն import-ներն են, որոնք չեն նշում կոնկրետ path կամ URI: Այնուամենայնիվ գործնականում դա նշանակություն չունի, քանի որ մենք օգտագործում ենք babel եւ webpack JS-ը թարգմանելու այնպիսի կոդի, որ հասկանալի կլինի ժամանակակից բրաուզերների համար:`,
         {link:'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import'},
         `Ուշադրություն դարձրեք, որ այս դասընթացը ՇԱՏ ԱՐԱԳ Է լինելու, հետեւաբար խնդրում եմ կարդալ MDN-ի հղումները`,
         {link:`http://iteratehackerspace.com/backend-bootcamp-english/lecture2.html`},
       ]},
      // Lecture0-Slide 2
      {title: 'Կլասեր (իրականում ֆունկցիաներ)',
       content: [
         `ES6-ը ներկայացրեց կլասերի գաղափարը, բայց այս 'կլասերը' իրականում պարզապես սինտաքսային շաքար են սովորական JS-ի ֆունկցիաների հիման վրա:
 `, {code: `
 class Person {
   constructor(age, name) {this.age = age; this.name = name; }
   speak() { console.log('My name is', this.name); }
 }

 const friend = new Person(27, 'Ruzanna');
 // This is the same as doing:
 function Person(age, name) { this.age = age; this.name = name; }
 Person.prototype.speak = function() { console.log('My name is', this.name); }

 const acquaint = new Person(23, 'Tigran');
 `}, `Կլասերի կիրառման առավելությունը հետեեւյալն է
 1) Առանց 'new'-ի կանչվելը TypeError բացառություն է,
 2) Այլ լեզուների տիրապետող ծրագրավորողի համար կոդն ավելի ծանոթ է թվում`,
         {link: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes'}
       ]
      },
      // Lecture0-Slide3
      {title: 'Պրոտոտիպների կիրառում',
       content: [
         `JavaScript-ը հիմնված է պրոտոտիպների վրա, դա նշանակում է, որ յուրաքանչյուր Object ունի պրոտոտիպ. Երբ մենք սահմանում էինք կլասերը, կլասում սահմանված բոլոր 'method'-ները ֆունկցիաներ են՝ ստեղծված պրոտոտիպների համար, եւ պրոտոտիպի property-ները (այն ամենր, որ հասանելի է . օպերատորի միջոցով) հասանելի է պրոտոտիպի շղթայի վրա գտնվող ցանկացած Object-ի համար.
           Պրոտոտիպի վրա սահմանված ֆունկցիան ավելի լավ է հիշողության համար, քանի որ այդ դեպքում կլասի հիման վրա սահմանված Object-ներում չի ստեղծվում ֆունկցիայի նոր օրինակ:`,
         {code: `
 class F {
   constructor() {
     this.speak = () => console.log('Hello world');
   }
   alternative_speak() { console.log('Hello world'); }
 };
 // Both a1, a2 have methods .speak and .alternative_speak
 const a1 = new F;
 const a2 = new F;
 `}, `Այս օրնակում վերծանիչը ստեղծել է միայն 1 alternative_speak  ֆունկցիա, որը F պրոտոտիպի վրա է,
   Բայց վերծանիչը ստիպված է ստեղծել 2 speak ֆունկցիաներ, քանի որ ֆունկցիան սահմանված է որպես property: `,
         {link: `https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes`}
       ]},
      // Lecture0-Slide4
      {title: 'Binding կոնտեքստ',
       content: [
         'JS-ի կլասերը իրենց կոնտեքստները autobind չեն անում, `this` object',
         'Սա նշանակում է, որ դուք հաճախ կտեսնեք React-ի կոդ, որը bind է անում իր ֆունկցիաները:',
         {code: `
 class F {
   constructor() {
     this.handler = this.handler.bind(this);
   }
   handler(e) {
     console.log(e.target.value);
   }
 }
 `}, `Դասարանում մենք տեսանք կոնտեքստի կարեւոչության 1 օրինակ, նույն խնդիրը առաջանում է React-ի հետ:`,
         {link: `https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this`}
       ]},
      // Lecture0-Slide5
      {title: 'static-ը JavaScript-ում',
       content: [
         `static բառը նույնպես կա JS-ում, Նա ստեղծում է property հենց Object-ի վրա, ոչ թե պրոտոտիպի.
         react-native-navigation գրադարանը օգտագործում է դա:`,
         {code: `
 class HomeScreen extends Component {
   static navigationOptions = ({navigation}) => ({
     title: 'Home Screen',
   });
   // the render function
 }
 `}, `TnavigationOptions-ը HomeScreen օբյեկտի վրա է,
 ոչ թե նրա պրոտոտիպի վրա`,
         {link:`https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static`}
       ]},
      // Lecture0-Slide6
      {title: 'Object destructuring',
       content: [
         'Նախորդ օրինակում, սա ',
         {code: `static navigationOptions = ({navigation}) => ({`},
         `հնարավոր է տարօրինակ թվացած լինի, հատկապես '({navigation})' մասը։
         Սա կոչվում է օբյեկտ destructuring, որը օբյեկտից արժեք ստանալու միջոց է, օգտագործելով նույն անունը։ Ահա մի քանի օրինակ
 `, {code: `
 const foreman = {
   name: 'Gor', age: 28,
   location: 'Yerevan', profession(){ console.log(this.age, this.name); }
 };
 // We only pulled out name and age as variable names based on keys
 const { name, age } = foreman;
 console.log(name, age);
 const { not_found } = foreman;
 `}
       ]},
      // Show example of the profession blowing up
      // Lecture0-Slide6.5
      {title: 'Object destructuring-ը ֆունկցիաներում',
       content:[
         'Նախորդ օրինակը',
         {code: `static navigationOptions = ({navigation}) => ({`},
         `Իրականում object destrcturing-ի օրինակ է ֆունկցիաի պարամետրերում, սա արվում է որովհետեւ սովորաբար մենք ֆունկցիային օբյեկտ ենք փոխանցում։
         Հետեւաբար մենք կարող ենք ունենալ մեզ պետք եղած արժեքները հենց սկզբում։`,
         {code: `
 const person = {name: 'Lilit', profession: 'programmer'};
 const say_profession = ({profession}) => {
   console.log('I am a ', profession);
 }
 say_profession(person);
 `}, `Ուշադիր եղեք, որ մենք մեր ստացած փոփոխականին անուն չտվեցինք, այլ ուղղակի վերցրեցինք մեզ պետք եղած property-ները։`,
         {link: `https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment`}
       ]},
      // Lecture0-Slide7
      {title: 'Class properties',
       content: [
         `Հունիս 2017-ի տվյալներով կլաների property-ները TC39-ի 2րդ փուլում են։ Դա նշանակում է, որ պաշտոնապես դեռ JS-ի մաս չեն կազմում:
         Մենք կարող ենք օգտագործել այդ հնարավորությունը օգտագօործելով babel, որը կարող ենք ձեռք բերել օգտագործելով create-react-app։`,
         {code: `
 class F {
   state = { items: []};
   open_dropdown = () => {
      console.log('Some logic here');
   };
 }
 `}, `And that is really the same as`,
         {code: `
 class F {
   constructor() {
     this.open_dropdown = () => {
       console.log('Some logic here');
     }
     this.state = { items: []};
   }
 }
 `}
       ]},
      // Lecture0-Slide8
      {title: 'Object-ի տարածում',
       content: [
         `Object-ի տարածումը մեկ այլ հնարավորություն է, որը նույնպես JS-ի պաշտոնական մաս չէ, բայց babel-ը իրականում դա թարգմանելու է Object spread կանչերին։`,
         {code: `
 const professional = {name: 'Artur', langs: ['C#', 'JavaScript', 'Armenian']};
 const with_more = {...professional, background: ['WebDevelopment']};

 `}, `Մենք ստեղծում ենք նոր օբյեկտ with_more անունով, որը professional օբյեկտի կրկնօրինակն է, բայց ունի 1 ավել արժեք, background անունով։`,
         {link: 'https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator'}
       ]},
      // Lecture0-Slide9
      {title: 'import/export-ը ES6-ում',
       content: [
         `ES6-ը համալրեց JS-ը մոդուլային համակարգով։`,
         {code: `
 // Assume this file is named funcs.js
 export const f = () => console.log('Hello');
 `}, `Սա նշանակում է, որ մոդուլը export է անելու f անունով ինչ որ բան, որը մենք կարող ենք import անել եւ օգտագործել։`,
         {code: `
 // Assume this file is called main.js
 import { f } from './funcs';
 f();
 `}, `Մենք արեցինք մի բան, որը նման է, բայց ամբողջությամբ object destructuring չէ։
Նաեւ ուշադիր եղեք, որ մենք չենք ավելացրել .js-ը imort լինող file-ի անվանումից հետո։ ES6 մոդուլները
singleton են, որը նշանակում է, պրոյեկտում մի քանի տեղ մոդուլը  import անելուց, այդ մոդուլի նոր օրինակ չի ստեղծվում։`
       ]},
      // Lecture0-Slide9.5
      {title: 'import/export-ը ES6-ում',
       content: [
         `Մենք export արեցինք f ֆունկցիան. Երբեմն անհրաժեշտ է լինում export անել միայն 1 արժեք։ Այդ դեպքում օգտագործում ենք 'export default'`,
         {code: `
 // assume this is called header.js
 // Notice that it was not necessary to give the class a name
 export default class extends Component {
   render() {
     return <h2>Hello World</h2>;
   }
 }
 `}, 'Այն օգտագորխվում է այսպես',
         {code: `
 import call_it_anything_you_want from './header';
 // Can also rename it
 import * as Whatever from './header';
 // renaming also works with named exports, this is usual in react-router
 import { BrowserRouter as Router } from 'react-router-dom';
 `}, {link: `https://developer.mozilla.org/en/docs/web/javascript/reference/statements/export`}
       ]},
      // Lecture0-slide10
      {title: 'Promises (խոստումներ)',
       content: [
         `JS ծրագրավորումը կենտրոնանում է ասինխրոն երեւույթների վրա։
           Դա նշանակում է, որ մենք պետք է ասենք թե ինչ է կատարվելու ապագայում, JS-ում դա կատարվում է խոստումների միջոցով։
           Խոստումը ապագայի գործողություն նկարագրելու ձեւ է։`,
         {code: `
 const promise_example = (success=true) => {
   return new Promise((accept, reject) => {
     const func = () => success
       ? accept('You waited 3 seconds, here is the data')
       // Always use an Error object, it preserves the stack
       : reject(new Error('failure'));
     setTimeout(func, 3 * 1000);
   })
 }
 promise_example().then(msg => console.log('Given', msg));
 // Be sure to handle the errors with the .catch method
 promise_example(false)
 .then(msg => console.log('Given', msg));
 .catch(error_handle => console.log(error_handle.message))
 `},

         {link: 'https://developers.google.com/web/fundamentals/getting-started/primers/promises'}
       ]},
      // Lecture0-slide11
      {title: 'async/await',
       content: [
         `Խոստումներով աշխատելը որոշ դժվարություններ կարող է առաջացնել .then .catch-երի հետ կապված։ ES7-ը, ներմուծում է նոր հնարավորթյուններ։ async, await-ը կարող են օգտագործվել ֆունկցիաներում,
         եւ այն ֆունկցիաները որ օգտագօրծում են await բառը, պետք է հայտարարված լինեն օգտագործելով async բառը։ Նորից՝ async/await-ը հնարավոր է օգտագործել babel-ի շնորհիվ, որը թարգմանում է async/await ֆունկցիաները գեներատոր ֆումնկցիաների, օգտագործելով yield-ի սինտաքսը։ Գեներատոր ֆունկցիաներն էլ վեռրադարձնում են խոստում։`,
         {code: `
 const load_data = async path => {
   // get a request object, fetch by default does a HTTP GET request
   const req = await fetch(path);
   // Get the HTTP body as JSON, no need to use JSON.parse
   const results = await req.json();
   return results;
 }`}, `fetch ֆունկցիան DOM API-ի տրամադրած ֆունկցիաներից է, որը հնարավորություն է տալիս ներբեռնելու նոր տվյալներ։
 fetch-ը վերադարձնում է խոստում, որի վերադարձրած տվյալը կարող ենք օգտագործել .then-ի կամ async/await-ի միջոցով։`,
         {link: 'https://developer.mozilla.org/en/docs/Web/API/Fetch_API'}
       ]},
      // Lecture0-slide11.5
      {title: 'async/await սխալի կարգավորում',
       content: [
         `async, await-ը ասինխրոն կոդը ցույց են տալիս սինխրոն կոդի տեսքով, դա .catch error-ը դարձնում են բացառություն`,
         {code: `
 const promise_example = (success=true) => {
   return new Promise((accept, reject) => {
     const func = () => success
       ? accept('You waited 3 seconds, here is the data')
       : reject(new Error('failure'));
     setTimeout(func, 3 * 1000);
   })
 }
 (async () => {
   try { await promise_example(false); }
   catch (e) { console.log(e.message); }
 })()
 `}, `Ուշադրություն դարձրեք հետաքրքիր ձեւին, որով կարող եք անել ամենաբարձր մակարդակի async/await կանչ։`,
         {link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await'}
       ]}
    ]
   },
  // Lecture 2
  // Lecture 3
  // Lecture 3
];
