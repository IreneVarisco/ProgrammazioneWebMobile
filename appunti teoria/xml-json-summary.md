# XML e JSON: Riassunto Completo

## 1. Programmable Web
- Simile al web tradizionale ma usa documenti XML o simili (non HTML + banner + loghi)
- Non necessariamente orientato agli utenti umani
- Può fornire input a software
- Si basa su HTTP e XML
- Alternative a XML: HTML, JSON, plain text, binary
- Senza HTTP non si può parlare di programmable web

### Building blocks di Programmable Web
- HTTP è il punto comune di tutti
- **Method information**: Come il client comunica i suoi bisogni al server
  - HTTP method vs application-specific method name
- **Scoping information**: Come il client indica al server su quale parte dei dati agire
  - Nel percorso dell'URI vs nell'entity-body

## 2. XML (Extensible Markup Language)

### Perché XML?
- Necessità di regole semplici e comuni comprensibili a persone con background diversi
- Capacità di descrivere risorse Internet e loro relazioni
- Capacità di definire struttura delle informazioni per diversi domini di business
- Formato abbastanza formale per computer ma leggibile da umani
- Regole semplici per uno sviluppo software semplice
- Supporto per diversi linguaggi naturali

### Definizione di XML
- XML = Extensible Markup Language
- Set di regole per definire e rappresentare informazioni come documenti strutturati
- Versione semplificata di SGML

### Caratteristiche di XML
- Linguaggio di marcatura (markup) come HTML
- Progettato per descrivere dati
- Tag non predefiniti
- Usa DTD e/o Schemi per descrivere i dati
- Auto-descrittivo se usato con DTD o Schema

### Regole principali
1. Informazioni rappresentate in unità chiamate documento XML
2. Un documento XML contiene uno o più elementi
3. Un elemento ha un nome, è denotato con markup esplicito, contiene altri elementi e può avere attributi

### XML non fa niente!
- Progettato solo per strutturare, memorizzare e trasmettere dati
- È necessario del software per utilizzare i dati XML

### Vantaggi di XML
- **Gratis ed estensibile**: tag non predefiniti, inventabili secondo le necessità
- **Complementare a HTML**: XML per rappresentare i dati, HTML per mostrarli
- **Separazione dei dati da HTML**: dati memorizzati separatamente dai documenti HTML
- **Scambio di dati**: permette scambio tra sistemi incompatibili
- **Condivisione**: formati di testo semplici per condividere dati
- **Memorizzazione**: dati disponibili a più utilizzatori

### Sintassi di XML
- Regole sintattiche semplici ma rigide
- **Dichiarazione XML**: `<?xml version="1.0" encoding="ISO-8859-1"?>`
- **Tutti i tag devono essere chiusi**
- **Nomi dei tag case-sensitive**
- **Annidamento corretto dei tag**
- **Nodo radice obbligatorio**
- **Attributi con valori tra apici**
- **Spazi bianchi preservati**
- **Ritorno a capo**: CR/LF convertito in LF
- **Commenti**: `<!-- Questo è un commento -->`

### Elementi XML
- Possono essere estesi per rappresentare più informazioni
- Relazioni gerarchiche padre-figlio
- L'elemento radice deve essere unico
- Elementi che nascono dall'elemento radice sono detti nodi figli
- Nodi con lo stesso padre sono detti fratelli (sibling)

### Contenuto degli elementi
Un elemento XML può contenere:
- Altri elementi
- Contenuto semplice
- Contenuto misto
- Nessun contenuto

### Nomi degli elementi
- Può contenere lettere, cifre ed altri caratteri
- Non può iniziare con un numero o carattere di punteggiatura
- Non può iniziare con le lettere "XML"
- Non può contenere spazi

### Attributi XML
- Gli elementi possono avere attributi nel tag iniziale
- Forniscono maggiori informazioni sul tag
- Valori compresi tra doppi o singoli apici

### Elementi vs Attributi
- Non esistono regole rigide su quando usare tag e quando attributi
- **Tendenza**: evitare gli attributi il più possibile
- **Problemi con gli attributi**:
  - Possono contenere un solo valore
  - Non sono facilmente estendibili
  - Non possono descrivere strutture
  - Più difficili da manipolare

### Validazione di documenti XML
- **Schema e DTD**: documenti che definiscono la struttura di un documento XML
- **XML Schema**: standard per la validazione dei file XML, scritto in XML
- **Documento ben formato**: sintatticamente corretto
- **Documento valido**: rispetta uno schema (o DTD)

### Visualizzazione di XML
- XML non ha informazioni di visualizzazione integrate
- Si usa:
  - CSS (Cascading Style Sheets)
  - XSL (eXtensible Stylesheet Language)

### Parser XML
- Necessario per leggere, modificare o creare un documento XML
- Il parser fornisce un modello che supporta vari linguaggi (JavaScript, VBScript, Perl, VB, Java, C++ etc.)

### XML e JavaScript
- I browser moderni hanno un parser XML integrato
- **XML DOM** (Document Object Model): definisce un modo standard per accedere e manipolare documenti XML
- Rappresenta un documento XML come struttura ad albero
- Tutti gli elementi accessibili tramite l'albero DOM

#### XML Parser - Sincrono
```javascript
txt="<bookstore><book>";
txt=txt+"<title>Everyday Italian</title>";
txt=txt+"<author>Giada De Laurentiis</author>";
txt=txt+"<year>2005</year>";
txt=txt+"</book></bookstore>";

if (window.DOMParser) {
  parser=new DOMParser();
  xmlDoc=parser.parseFromString(txt,"text/xml");
}
else { // Internet Explorer
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async=false;
  xmlDoc.loadXML(txt);
}
```

#### Accesso ai dati XML
```javascript
document.getElementById("to").innerHTML=xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
document.getElementById("from").innerHTML=xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
document.getElementById("message").innerHTML=xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;
```

## 3. JSON (JavaScript Object Notation)

### Overview
- Format leggero text-based open standard per lo scambio di dati human-readable
- Convenzioni conosciute ai programmatori C, C++, Java, Python, Perl etc.
- Specificato da Douglas Crockford
- Definito per scambio di dati human-readable
- Esteso da JavaScript scripting language
- Facile da analizzare e generare per le macchine
- Estensione dei file .json
- Internet Media type: application/json

### Utilizzo di JSON
- Applicazioni basate su JavaScript (estensioni browser e siti web)
- Serializzazione e trasmissione di dati strutturati su rete
- Trasmissione dati tra server e applicazioni web
- Web Service e API usano JSON per fornire dati pubblici
- Compatibile con linguaggi moderni

### Caratteristiche di JSON
- Facile da leggere e scrivere
- Formato di scambio basato su testo e molto leggero
- Indipendente dal linguaggio

### Sintassi JSON
- Sottoinsieme della sintassi JavaScript
- Dati rappresentati come coppie nome/valore
- Parentesi graffe `{}` contengono oggetti, coppie nome/valore separate da virgole
- Parentesi quadre `[]` definiscono array, valori separati da virgole

### Esempio JSON
```json
{
  "book": [
    {
      "id":"01",
      "language": "Java",
      "edition": "third",
      "author": "Herbert Schildt"
    },
    {
      "id":"07",
      "language": "C++",
      "edition": "second"
      "author": "E.Balagurusamy"
    }
  ]
}
```

### Strutture dati supportate
- **Insieme di coppie nome/valore**: struttura dati supportata da diversi linguaggi
- **Lista ordinata di valori**: array, liste, vettori, sequenze...

### Tipi di dati in JSON

| Tipo | Descrizione |
|------|-------------|
| Number | Formato JavaScript floating-point double-precision |
| String | Unicode double-quoted con backslash escaping |
| Boolean | True o false |
| Array | Sequenza ordinata di valori |
| Value | String, number, true o false, null... |
| Object | Collezione non ordinata di coppie nome:valore |
| Whitespace | Usato tra ogni coppia di token |
| null | Vuoto |

#### Number
- Floating-point double-precision come in JavaScript
- No formati ottali o esadecimali
- No supporto per NaN o Infinity
- Sintassi: `var json-object-name = { string : number_value, ...}`
- Esempio: `var obj = {"marks": 97}`

#### String
- Sequenza di caratteri Unicode double quoted con backslash escaping
- Sintassi: `var json-object-name = { string : "string value", ...}`
- Esempio: `var obj = {"name": "Claudio"}`

#### Boolean
- True o false
- Sintassi: `var json-object-name = { string : true/false, ...}`
- Esempio: `var obj = {"name": "Claudio", "marks": 97, "distinction": true}`

#### Array
- Collezione ordinata di valori
- Racchiusi tra parentesi quadre `[]`
- Valori separati da virgole
- Indice dell'array parte da 0 o 1
- Usare quando le chiavi sono interi sequenziali
- Esempio:
```json
{
  "books": [
    { "language":"Java" , "edition":"second" },
    { "language":"C++" , "edition":"fifth" },
    { "language":"C" , "edition":"third" }
  ]
}
```

#### Object
- Insieme non ordinato di coppie nome/valore
- Racchiusi tra parentesi graffe `{}`
- Ogni nome seguito da `:` (colon), coppie separate da `,` (virgola)
- Le chiavi devono essere stringhe diverse tra loro
- Usare quando le chiavi sono stringhe arbitrarie
- Esempio:
```json
{
  "id": "011A",
  "language": "JAVA",
  "price": 500
}
```

#### Whitespace
- Può essere inserito tra ogni coppia di token
- Rende il codice più leggibile
- Esempio:
```json
var i = " sachin";
var j = " saurav"
```

#### Null
- Tipo vuoto
- Sintassi: `null`
- Esempio:
```javascript
var i = null;
if(i==1) {
  document.write("<h1>value is 1</h1>");
}
else {
  document.write("<h1>value is null</h1>");
}
```

### JSON Schema
- Specifica per la definizione dei dati JSON
- Descrive il formato dei dati
- Documentazione semplice, human-readable e machine-readable
- Validazione strutturale completa
- Utile per testing automatico e validazione dati client

#### JSON Schema: Esempio
```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Product",
  "description": "A product from Acme's catalog",
  "type": "object",
  "properties": {
    "id": {
      "description": "The unique identifier for a product",
      "type": "integer"
    },
    "name": {
      "description": "Name of the product",
      "type": "string"
    },
    "price": {
      "type": "number",
      "minimum": 0,
      "exclusiveMinimum": true
    }
  },
  "required": ["id", "name", "price"]
}
```

#### Keywords di JSON Schema

| Keywords | Description |
|----------|-------------|
| $schema | Indica che lo schema è scritto secondo la specifica draft v4 |
| title | Titolo dello schema |
| description | Descrizione dello schema |
| type | Definisce il vincolo: deve essere un JSON Object |
| properties | Definisce chiavi, tipi di valori, minimi e massimi |
| required | Lista di proprietà obbligatorie |
| minimum | Valore minimo accettabile |
| exclusiveMinimum | Se true, il valore deve essere strettamente maggiore del minimo |
| maximum | Valore massimo accettabile |
| exclusiveMaximum | Se true, il valore deve essere strettamente minore del massimo |
| multipleOf | Il valore deve essere divisibile per questo numero |
| maxLength | Lunghezza massima della stringa |
| minLength | Lunghezza minima della stringa |
| pattern | Espressione regolare per validare la stringa |

### JSON vs XML

#### Somiglianze
- Entrambi sono formati semplici e aperti
- Entrambi supportano unicode
- Entrambi rappresentano dati auto-descrittivi
- Entrambi sono interoperabili e indipendenti dalla lingua

#### Differenze

| JSON | XML |
|------|-----|
| Più leggero e semplice da leggere/scrivere | Più verboso |
| Supporta gli array nativamente | Non supporta gli array |
| File più leggibili dall'uomo | File meno leggibili |
| Non ha capacità di visualizzazione | Capacità di visualizzazione (linguaggio di markup) |
| Fornisce tipi di dati scalari | Non fornisce nozione di tipi di dati (serve XML Schema) |
| Supporto per oggetti nativi | Gli oggetti vanno espressi per convenzioni |

#### Esempio di confronto
**JSON**
```json
{
  "company": "Volkswagen",
  "name": "Vento",
  "price": 800000
}
```

**XML**
```xml
<car>
  <company>Volkswagen</company>
  <name>Vento</name>
  <price>800000</price>
</car>
```

### Parser JSON
- Numero crescente di web service restituiscono dati serializzati come JSON
- Più semplice per un browser ottenere strutture dati JavaScript da JSON
- Funziona allo stesso modo per ogni browser
- Alternative leggera a XML
- Implementazioni disponibili in molti linguaggi su http://www.json.org

#### Esempio di parsing JSON
```html
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<p id="demo2"></p>
<script type="text/javascript">
var d = [{"count": 1, "id": 2, "message": "ciao"},{"count": 2, "id": 3, "message": "hello"}];
var n = JSON.stringify(d); // trasforma un oggetto JavaScript in una stringa JSON
document.getElementById("demo").innerHTML = n;
var array=JSON.parse(n); // trasforma una stringa JSON in un oggetto JavaScript
document.getElementById("demo2").innerHTML = array[0].count;
</script>
</body>
</html>
```

### Creare oggetti JSON in JavaScript
- **Oggetto vuoto**: `var JSONObj = {};`
- **Nuovo oggetto**: `var JSONObj = new Object();`
- **Oggetto con attributi**: `var JSONObj = { "bookname": "VB BLACK BOOK", "price": 500 };`
- Attributi accessibili usando la notazione dot (.)

#### Esempio creazione oggetto
```html
<html>
<head>
<title>Creating Object JSON with JavaScript</title>
<script language="javascript" >
var JSONObj = { "name" : "tutorialspoint.com", "year" : 2005 };
document.write("<h1>JSON with JavaScript example</h1>");
document.write("<br>");
document.write("<h3>Website Name="+JSONObj.name+"</h3>");
document.write("<h3>Year="+JSONObj.year+"</h3>");
</script>
</head>
<body>
</body>
</html>
```

### Creazione di array di oggetti JSON
```html
<html>
<head>
<title>Creation of array object in javascript using JSON</title>
<script language="javascript" >
document.writeln("<h2>JSON array object</h2>");
var books = { "Pascal" : [
{ "Name" : "Pascal Made Simple", "price" : 700 },
{ "Name" : "Guide to Pascal", "price" : 400 }
],
"Scala" : [
{ "Name" : "Scala for the Impatient", "price" : 1000 },
{ "Name" : "Scala in Depth", "price" : 1300 }
]
}

var i = 0
document.writeln("<table border='2'><tr>");
for(i=0;i<books.Pascal.length;i++)
{
document.writeln("<td>");
document.writeln("<table border='1' width=100 >");
document.writeln("<tr><td><b>Name</b></td><td width=50>"
+ books.Pascal[i].Name+"</td></tr>");
document.writeln("<tr><td><b>Price</b></td><td width=50>"
+ books.Pascal[i].price +"</td></tr>");
document.writeln("</table>");
document.writeln("</td>");
}

for(i=0;i<books.Scala.length;i++)
{
document.writeln("<td>");
document.writeln("<table border='1' width=100 >");
document.writeln("<tr><td><b>Name</b></td><td width=50>"
+ books.Scala[i].Name+"</td></tr>");
document.writeln("<tr><td><b>Price</b></td><td width=50>"
+ books.Scala[i].price+"</td></tr>");
document.writeln("</table>");
document.writeln("</td>");
}
document.writeln("</tr></table>");
</script>
</head>
<body>
</body>
</html>
```

## Conclusioni
- XML e JSON sono linguaggi di definizione e rappresentazione delle informazioni
- Entrambi fungono da sorgenti di dati e informazioni per applicazioni web
- JSON è lo standard più utilizzato nelle applicazioni moderne
