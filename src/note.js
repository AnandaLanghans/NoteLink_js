class note {
  constructor(title, text, folderId) {
    this._title = title; // [obbligatorio] titolo
    this._text = text; //[obbligatorio] testo della nota
    this._folderId = folderId; //[opzionale] id della cartella dove verrà caricata la nota.
  }
}
