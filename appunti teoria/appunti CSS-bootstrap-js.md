# Tecnologie Web: CSS, Bootstrap e JavaScript

## CSS (Cascading Style Sheets)

### Storia degli Standard Web
- CSS è un linguaggio fondamentale per il web, creato per separare contenuto e formattazione.
- Evoluzione:
  - **CSS1 (1996)**: Prima specifica W3C.
  - **CSS2 (1998)**: Introduzione di nuove funzionalità.
  - **CSS2.1 (2011)**: Correzione di errori e miglior supporto.
  - **CSS3 (dal 1999)**: Suddiviso in oltre 50 moduli per flessibilità.

### A Cosa Servono i CSS
- Permettono di stilizzare HTML definendo colori, margini, layout e altro.
- Consentono di separare lo stile dal contenuto, rendendo il codice più pulito e mantenibile.
- Sono fondamentali per la creazione di siti accessibili e responsivi.

### Meccanismi e Selettori CSS
#### Struttura di una Regola CSS
```css
h1 {
  color: blue;
  font-size: 20px;
}
```
- **Selettori**: Indicano a quali elementi HTML applicare lo stile.
- **Dichiarazioni**: Racchiuse tra `{}`, specificano le proprietà e i valori.

#### Tipologie di Selettori
- **Selettore di tipo**: `p { color: red; }`
- **Selettori combinati**:
  - **Discendente**: `div p { color: green; }`
  - **Figlio diretto**: `div > p { color: blue; }`
  - **Fratelli adiacenti**: `h1 + p { color: purple; }`
- **Selettori di attributo**:
  ```css
  input[type="text"] {
    border: 1px solid black;
  }
  ```

### Inserimento CSS in un Documento HTML
- **CSS Esterno**: `<link rel="stylesheet" href="stile.css">`
- **CSS Interno**: `<style> p { color: red; } </style>`
- **CSS Inline**: `<p style="color: red;">Testo</p>`

### Box Model
- Ogni elemento HTML è formato da:
  - **Content**: Il contenuto effettivo.
  - **Padding**: Spazio tra contenuto e bordo.
  - **Border**: Il bordo dell'elemento.
  - **Margin**: Spazio tra elementi.

### Posizionamento CSS
- **Static**: Predefinito.
- **Relative**: Spostato rispetto alla sua posizione originale.
- **Absolute**: Posizionato rispetto all'elemento padre.
- **Fixed**: Fissato rispetto alla finestra del browser.
- **Sticky**: Scorre con la pagina finché non incontra un limite.

### Float e Clear
- `float: left/right;` permette di allineare elementi a sinistra o destra.
- `clear: both;` evita che elementi successivi si affianchino.

---

## Bootstrap 4

### Introduzione
- **Framework front-end** per la creazione di siti responsivi e mobile-first.
- Include componenti HTML, CSS e JavaScript predefiniti.

### Struttura e Griglie di Bootstrap
- Il **sistema a griglia** è basato su 12 colonne.
- **Classi di griglia**:
  - `.col-xs-*` (smartphone)
  - `.col-sm-*` (tablet)
  - `.col-md-*` (desktop)
  - `.col-lg-*` (desktop larghi)
  - `.col-xl-*` (extra-large)
- Possibilità di **nesting**, offset e gestione della visibilità con `hidden-*`.

### Componenti Principali di Bootstrap
- **Bottoni**: `.btn-primary`, `.btn-success`, `.btn-danger`.
- **Tabelle**: `.table`, `.table-striped`, `.table-hover`.
- **Immagini**: `.img-fluid`, `.img-thumbnail`.
- **Navbar**, **Cards**, **Modali**, **Form**.

### Personalizzazione con SASS
- **Variabili**, **Mixin**, **Funzioni**, **Cicli** (`@for`, `@each`, `@while`).
- **Importazione**: `@import 'file.scss'` per organizzare codice.

---

## JavaScript

## JavaScript: Fondamenti e Applicazioni Web

### Introduzione
- **JavaScript** è un linguaggio di scripting, tipicamente utilizzato lato client.
- È interpretato direttamente dal browser e non necessita di compilazione.
- Standardizzato secondo **ECMAScript 262**.

### Applicazioni Web e Linguaggi
#### Tipologie di Pagine Web
- **Statiche** (HTML) → Contenuto fisso, definito in fase di scrittura.
- **Dinamiche** (PHP, JSP, ASP) → Contenuto generato al momento della richiesta.
- **Applicazioni Web** → Software sviluppato e utilizzato tramite tecnologie web.

#### Tecnologie Client-Side vs Server-Side
- **Client-side**: Eseguito dal browser (JavaScript, AJAX).
- **Server-side**: Elaborato dal server (PHP, JSP, Python).

### Fondamenti di JavaScript
#### Caratteristiche principali
- Case-sensitive (`nome` e `Nome` sono diversi).
- Interpretabile direttamente dal browser.
- Debolmente tipato (le variabili non necessitano di dichiarazione esplicita).

#### Tipi di dati principali
- **Number**: Interi e decimali (es. `7`, `3.14`).
- **Boolean**: `true` e `false`.
- **String**: Testo delimitato da apici o virgolette.
- **Object**: Collezioni di dati con proprietà e metodi.

#### Dichiarazione e Scope delle Variabili
```js
var globale = "Sono globale"; // Variabile globale
function esempio() {
  var locale = "Sono locale"; // Variabile locale
}
```
- **Globali**: Dichiarate fuori dalle funzioni.
- **Locali**: Dichiarate dentro una funzione con `var`, `let` o `const`.

### Operatori e Strutture di Controllo
#### Operatori
- **Aritmetici**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
- **Confronto**: `==`, `===`, `!=`, `!==`, `>`, `<`
- **Logici**: `&&`, `||`, `!`

#### Condizioni e Cicli
```js
if (x > 10) {
  console.log("Maggiore di 10");
} else {
  console.log("Minore o uguale a 10");
}

for (var i = 0; i < 5; i++) {
  console.log("Iterazione numero " + i);
}
```
- **Ciclo For**: Iterazione con contatore.
- **Ciclo While**: Ripetizione finché una condizione è vera.

### Funzioni in JavaScript
#### Dichiarazione e Chiamata di una Funzione
```js
function somma(a, b) {
  return a + b;
}
console.log(somma(5, 3)); // Output: 8
```
- **Function Declaration**: `function nomeFunzione() {}`
- **Function Expression**: `var miaFunzione = function() {};`

#### Funzioni Anonime e Arrow Functions
```js
const moltiplica = (a, b) => a * b;
console.log(moltiplica(2, 3)); // Output: 6
```

### Il Modello a Oggetti e il DOM
#### Document Object Model (DOM)
- Modello a oggetti che rappresenta la struttura di una pagina HTML.
- Gli elementi della pagina possono essere modificati tramite JavaScript.

#### Selezione ed Interazione con il DOM
```js
document.getElementById("titolo").innerHTML = "Nuovo Titolo";
document.querySelector(".classe").style.color = "red";
```
- **Metodi principali**:
  - `getElementById("id")` → Seleziona un elemento per ID.
  - `querySelector(".classe")` → Seleziona il primo elemento con una classe.
  - `createElement("div")` → Crea un nuovo elemento.

#### Eventi in JavaScript
- **Ascolto eventi con `addEventListener`**
```js
document.getElementById("bottone").addEventListener("click", function() {
  alert("Bottone cliccato!");
});
```

### Programmazione a Oggetti in JavaScript
#### Creazione di Oggetti
```js
var persona = {
  nome: "Mario",
  eta: 25,
  saluta: function() {
    console.log("Ciao, sono " + this.nome);
  }
};
persona.saluta(); // Output: Ciao, sono Mario
```

#### Uso di Costruttori
```js
function Persona(nome, eta) {
  this.nome = nome;
  this.eta = eta;
}
var utente = new Persona("Anna", 30);
console.log(utente.nome); // Output: Anna
```




