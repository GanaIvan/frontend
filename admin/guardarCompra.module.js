import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

export async function guardarCompraDesdeHTML() {

  const nombre =
    document.getElementById("nombreComprador")?.value || "";

  const tickets =
    Number(document.getElementById("ticketsSeleccionados")?.innerText || 0);

  const referencia =
    document.getElementById("nroReferencia")?.value || "";

  const numeros = [];
  document
    .querySelectorAll("#resultNumbersContainer span")
    .forEach(el => numeros.push(el.innerText));

  if (!nombre || !tickets || !referencia || numeros.length === 0) {
    console.warn("⛔ Compra incompleta, no guardada");
    return;
  }

  await addDoc(collection(window.db, "compras"), {
    nombre,
    tickets,
    referencia,
    numeros,
    fecha: serverTimestamp()
  });

  console.log("✅ Compra guardada en Firestore");
}
