# Appunti su HTML

## Linguaggio di Markup

HTML (HyperText Markup Language) è un linguaggio di markup utilizzato per creare pagine web. Non è un linguaggio di programmazione, ma serve a descrivere la struttura della pagina e a definirne i contenuti.

HTML è il linguaggio standard per la creazione di pagine web. Supporta strutturazione avanzata, tabelle, form e link ipertestuali.

### Caratteristiche

- Struttura la pagina web tramite tag
- Supporta ipertesto, multimedia e ipermedia
- Sintassi semplice e basata su file di testo

## Browser e Rendering

Un browser web interpreta e visualizza i documenti HTML, CSS e JavaScript. Principali componenti:

- **Layout Engine**: gestisce l'interazione dell'utente
- **Rendering Engine**: interpreta e visualizza il codice HTML
- **JavaScript Engine**: esegue codice JavaScript
- **Network Layer**: gestisce le richieste HTTP e la rete
- **Storage**: memorizza cookie e dati di sessione
- **Operating System Interface**: interagisce con il sistema operativo

## Struttura di una Pagina HTML

1. **Dichiarazione DOCTYPE**

   ```html
   <!DOCTYPE HTML>
   ```

   Indica la versione HTML usata.

2. **Tag HTML**

   ```html
   <html>
   ...
   </html>
   ```

   Contiene tutto il codice HTML.

3. **Sezione `<head>`**

   - Contiene metadati, titoli e riferimenti a file CSS o script.
   - Il titolo si definisce con `<title>`.

4. **Sezione `<body>`**

   - Contiene il contenuto visibile della pagina.
   - Utilizza tag come `<h1>` a `<h6>` per i titoli, `<p>` per i paragrafi e `<div>` per suddividere sezioni.

## Elementi HTML

### Tag di Base

- **Titoli**: `<h1>`, `<h2>`, ..., `<h6>`
- **Paragrafi**: `<p>`
- **Liste**:
  - Ordinata: `<ol><li>Elemento</li></ol>`
  - Non ordinata: `<ul><li>Elemento</li></ul>`
  - Di definizione: `<dl><dt>Termine</dt><dd>Definizione</dd></dl>`

### Link e Immagini

- **Link**: `<a href="url">Testo</a>`
- **Immagini**: `<img src="immagine.jpg" alt="Descrizione">`

### Tabelle

```html
<table>
  <tr>
    <th>Intestazione</th>
    <th>Intestazione</th>
  </tr>
  <tr>
    <td>Dato</td>
    <td>Dato</td>
  </tr>
</table>
```

### Form

```html
<form action="submit.php" method="post">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">
  <input type="submit" value="Invia">
</form>
```

- **Campi input**: testo, password, checkbox, radio, textarea
- **Bottoni**: submit, reset
- **Selezioni**: `<select>` con `<option>`

## XHTML

 Con XHTML si introduce maggiore rigorosità sintattica per migliorare la compatibilità tra dispositivi.

- Versione XML di HTML
- Struttura più rigida (elementi sempre chiusi, tag in minuscolo, valori degli attributi tra virgolette)
- Viene validato tramite il W3C Validator

