export async function fetchProduct() {
  try {
    const res = await fetch("http://localhost:6001/products");
    if (!res.ok) throw new Error("not fiane fetch");
    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.massage);
  }
}
export async function fetchProductOne(id) {
  try {
    const res = await fetch(`http://localhost:6001/products/?id=${id}`);
    if (!res.ok) throw new Error("not fiane fetch");
    const data = res.json();

    return data;
  } catch (err) {
    console.log(err.massage);
  }
}

export async function fetchProductCategory(typeProduct) {
  try {
    const res = await fetch(
      `http://localhost:6001/products${
        typeProduct == "all" ? "" : "?Category=" + typeProduct
      }`
    );
    if (!res.ok) throw new Error("not fiane fetch");

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.massage);
  }
}
