class ToDo {
  constructor(title, description = "") {
    this.completed = false;
    this.description = description;
    this.title = title.toUpperCase();
  }
}

it("i nuovi ToDo non sono completati", () => {
  const todo = new ToDo("Ciao");
  expect(todo.completed).toBeFalsy();
});

it("quando si creano ToDo, se non viene passata una descrizione, hanno come descrizione stringa vuota", () => {
  const todo = new ToDo("Ciao");
  expect(todo.description).toBe("");
});

it("il testo del ToDo deve essere tutto maiuscolo", () => {
  const todo = new ToDo("ciao");
  expect(todo.title).toBe("CIAO");
});
