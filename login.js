const girisBtn = document.getElementById('girisYap');
const apiUrl = "http://localhost:8085/v1/kullanici";
const getAllKullaniciUrl = `${apiUrl}/all`;
const kullaniciSilUrl = `${apiUrl}/delete`;
const loginUrl = `${apiUrl}/login`;
const loginUsername = document.getElementById("login_user");
const loginPassword = document.getElementById("login_pass");

girisBtn.addEventListener('click', () => {
  // axios.METHOD(url, data)
  // method => GET, POST, PUT, 
  // data = {a: "a", b: "b"}
  const data = {
    kullaniciAdi: loginUsername.value,
    sifre:loginPassword.value
  };
  axios.post(loginUrl, data)
    .then(response => {
      const users = response.data;
      console.log(`GET users`, users);
    });
});
