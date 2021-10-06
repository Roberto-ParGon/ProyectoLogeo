var btn_sub = document.getElementById("btn_sub");

btn_sub.addEventListener('click', function () {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    var parametros = new URLSearchParams();
    parametros.append('email', email);
    parametros.append('password', pass);

    axios.get('ruta', parametros)

    .then(function (response) {
        console.log(response);
        console.log("verdad: " + response.data);
        alert(response.data)
    })
    .catch(function (error) {
        console.log("error: " + error);
    })

});
