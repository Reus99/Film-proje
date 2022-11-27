const xhr = new XMLHttpRequest ();
const girisYap = document.getElementById('girisYap');

const giris = () => {
    xhr.open('GET','http://localhost:8085/v1/kullaniciLogin/getAllKullanici%27')
    console.log(xhr.response);
    xhr.send();
};

girisYap.addEventListener('click',()=>{
    giris();
});