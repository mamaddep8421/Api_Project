function testString(string) {
  const regex1 = /^(09)\d{9}$/;
  const regex2 = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  const regex3 =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regex1.test(string)) {
    return "ورودی شما شماره موبایل است";
  } else if (regex2.test(string)) {
    return "ورودی شما ایمیل است";
  } else if (regex3.test(string)) {
    return "ورودی شما پسورد است";
  } else {
    return "ورودی شما قابل شناسایی نیست و یا اشتباه است";
  }
}
document.getElementById("input").addEventListener("input", (e) => {
  let result = testString(e.target.value);
  document.getElementById("result").innerHTML = result;
});
