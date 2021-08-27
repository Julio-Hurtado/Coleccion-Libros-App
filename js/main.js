document.addEventListener("DOMContentLoaded", UI.mostrarLibros());

document.querySelector("#form-libro").addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const isbn = document.getElementById("isbn").value;

  if (titulo == "" || autor == "" || isbn == "") {
    UI.mostrarAlerta("Por favor ingrese todos los campos", "danger");
  } else {
    const libro = new Libro(titulo, autor, isbn);
    Datos.agregarLibro(libro);
    UI.agregarLibroLista(libro);
    UI.mostrarAlerta("Libro agregado a la coleccion", "success");
    UI.limpiarCampos();
  }
});
document.querySelector("#listado-libros").addEventListener("click", (e) => {
  const tag = e.target;  
  if (tag.classList.contains("delete")) {
    UI.eliminarLibro(tag);
    const param = tag.parentElement.previousElementSibling.textContent;
    Datos.removerLibro(param);
    UI.mostrarAlerta("Libro eliminado", "success");
  }
});
