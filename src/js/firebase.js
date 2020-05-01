
var firebaseConfig = {
    apiKey: "AIzaSyCEwShUPChSSAbGPwZvP5eSoSuXARZrO8s",
    authDomain: "rankingnb-f3366.firebaseapp.com",
    databaseURL: "https://rankingnb-f3366.firebaseio.com",
    projectId: "rankingnb-f3366",
    storageBucket: "rankingnb-f3366.appspot.com",
    messagingSenderId: "977103040130",
    appId: "1:977103040130:web:3594c44b1ef44057f20e9b",
    measurementId: "G-X7FKR7F6HH"
};


firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
var docRef = db.collection("membros");

const nome = document.getElementById("nome");
const load = document.getElementById("button");

window.onload = function() {
    getData();
}

function getData(){
    docRef.get().then( function (doc) {
        var cont = 1;
        doc.forEach(data => {
            var membro = 
                '<div class="Membro">' + 
                '    <div class="CaixaColocacaoRanking">' +
                '        <span class="colocacao-ranking">'+ cont +'</span>' +
                '        <span class="colocacao-ranking-indicador">#</span>' +
                '    </div>' +
                '    <div class="CaixaMembro">' +
                '        <img class="membro-foto" src="assests/img/Proibido_Azul@0.5x.png">' +
                '        <span class="membro-nome" id="nome" >'+ data.data().nome +'</span>' +
                '        <span class="tag is-success is-rounded membro-departamento">'+ data.data().departamento +'</span>' +
                '        <span class="membro-pontos">1290</span>' +
                '        <span class="icon has-text-grey-light is-medium avancar-icon">' +
                '            <i class="fas fa-angle-right"></i>' +
                '        </span>' +
                '    </div>' +
                '</div>';

            $("#ranking").append(membro);

            console.log(cont + "  " + data.data().name);
            cont++;
        });
    });

}