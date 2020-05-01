
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var docRef = db.collection("membros");

window.onload = function() {
    getData();
}

function getData(){
    docRef.get().then( function (doc) {
        var cont = 1;
        var load = true;
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

            if (load){
                disableLoading();
            }

            $("#ranking").append(membro);
            console.log(cont + "  " + data.data().nome);
            cont++;
        });
    });

}