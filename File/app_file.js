let imageParent = document.getElementById("view-img");
document.getElementById("input").addEventListener("input", (e) => {
  document.getElementById("view-img").innerHTML = "";
  let type = e.target.files[0].type;
  let size = e.target.files[0].size;
  let src = URL.createObjectURL(e.target.files[0]);
  size = size / 1000 / 1024;
  if (size <= 1) {
    size = size + "KB";
  } else {
    size = size + "MB";
  }
  if (type.includes("image")) {
    let img = `<img src="${src}" alt="image" width="100"/>`;
    imageParent.innerHTML = `
    <p>نمایش نتیجه:</p>
    ${img}
    <h3 class="alert">size: ${size}</h3>
    <h3 class="alert">type: ${type}</h3>
    `;
  } else {
    imageParent.innerHTML = `
    <p>نمایش نتیجه :</p>
    <h3 class="alert">فایل مورد نظر شما عکس نیست</h3>
    <h3 class="alert">size: ${size}</h3>
    <h3 class="alert">type: ${type}</h3>
    `;
  }
});
