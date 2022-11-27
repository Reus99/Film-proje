const girisBtn = document.getElementById('girisYap');
const api_url_CE = "http://localhost:8085/";


girisBtn.addEventListener('click',()=>{
    axios.get(`${api_url_CE} + v1/kullaniciLogin/getAllKullanici`)
    .then(response => {
     const users = response.data;
     console.log(`GET users`, users);
   })
    .catch(error => console.error(error));
});
