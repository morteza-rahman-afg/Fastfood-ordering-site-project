export async function fetchProduct() {
  try {
    const res = await fetch("http://localhost:6001/products");
    if (!res.ok) throw new Error("not fiane fetch");
    const data = res.json();

    return data;
  } catch (err) {
    console.log(err.massage);
  }
}
