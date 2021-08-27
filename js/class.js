class Libro {
  constructor(titulo, autor, isbn) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn;
  }
}

class UI {
  static mostrarLibros() {
    const libros = Datos.traerLibros();
    libros.forEach((libro) => UI.agregarLibroLista(libro));
  }

  static agregarLibroLista(libro) {
    const lista = document.querySelector("#listado-libros");

    const fila = document.createElement("tr");
    fila.innerHTML = `
                         <td>${libro.titulo}</td>
                         <td>${libro.autor}</td>
                         <td>${libro.isbn}</td>
                         <td><a href="#" class="btn btn-danger btn-small delete">x</></td>
                         `;

    lista.appendChild(fila);
  }

  static eliminarLibro(el) {
    el.parentElement.parentElement.remove();
  }

  static mostrarAlerta(mensaje, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className} `;
    div.appendChild(document.createTextNode(mensaje));

    const container = document.querySelector(".container");
    const form = document.querySelector("#form-libro");
    container.insertBefore(div, form);
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  static limpiarCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("isbn").value = "";
  }
}
class Datos {
  static keyLibros = "libros";

  static traerLibros() {
    let libros;
    if (localStorage.getItem(Datos.keyLibros) === null) {
      libros = [];
    } else {
      libros = JSON.parse(localStorage.getItem(Datos.keyLibros));
    }
    return libros;
  }

  static agregarLibro(libro) {
    const libros = Datos.traerLibros();
    libros.push(libro);
    localStorage.setItem(Datos.keyLibros, JSON.stringify(libros));
  }

  static removerLibro(isbn) {
    const libros = Datos.traerLibros();

    libros.forEach((libro, index) => {
      if (libro.isbn === isbn) {
        libros.splice(index, 1);
      }
    });
    localStorage.setItem(Datos.keyLibros, JSON.stringify(libros));
  }
}
