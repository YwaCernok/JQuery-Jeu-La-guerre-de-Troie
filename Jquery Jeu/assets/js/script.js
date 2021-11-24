$ (function(){
    var buttons = $('.btnGame');
    var result = $('#resultat');
    var score = $('#score')
    var clickCompter = 0;
    var computerVictory = 0;
    var playerVictory = 0;
    var computerChoice = $('#computerChoice');
    var playerChoice = $('#playerChoice');

    function changeImg (answer, img){
        if (answer === "Hélène") {
            img.attr('src','assets/img/Helene.png');
        }else if (answer === "Pâris") {
            img.attr('src','assets/img/Paris.png');
        }else if (answer === "Ménélas") {
            img.attr('src','assets/img/Menelas.png');
        }
    };

for ( i = 0; i < buttons.length; i++) {
    $(buttons[i]).on( "click", function(){
        clickCompter++
            if (clickCompter < 4)  {
                var player = $(this).text();
                var rand = Math.floor(Math.random() * buttons.length);
                var computer = $(buttons[rand]).text();
                console.log(player)
                console.log(computer)
                if (player === computer) {
                    swal({
                        title: "Egalité !",
                        text: "Vous avez le même resultat !",
                        icon: "warning"
                      });
                } else if ((player === "Hélène" && computer === "Ménélas") || (player === "Pâris" && computer === "Hélène") || (player === "Ménélas") && (computer === "Pâris")) {
                    playerVictory++
                    swal({
                        title: "Bien joué !",
                        text: "Vous avez gagné cette manche !",
                        icon: "success"
                      });
                } else {
                    computerVictory++
                    swal({
                        title: "Dommage !",
                        text: "Vous avez perdu cette manche !",
                        icon: "error"
                      });
                };
            } else {
                
                if(playerVictory > computerVictory){
                    swal({
                        title: "Fin de la partie ! Vous avez Gagné Bravo !",
                        text: "Nombre de victoire : " + playerVictory + '\n Nombre de défaite : ' + computerVictory,
                      });
                } else if (playerVictory === computerVictory){
                    swal({
                        title: "Fin de la partie ! Egalité !",
                        text: "Nombre de victoire : " + playerVictory + '\n Nombre de défaite : ' + computerVictory,
                      });
                } else {
                    swal({
                        title: "Fin de la partie ! Vous avez Perdu Dommage !",
                        text: "Nombre de victoire : " + playerVictory + '\n Nombre de défaite : ' + computerVictory,
                      });
                }
                computerChoice.attr('src', 'assets/img/questionMark.png');
                playerChoice.attr('src', 'assets/img/questionMark.png');
                clickCompter = 0;
                result.html('0');
                score.html('0');
                computerVictory = 0;
                playerVictory = 0;
            };

            result.html(playerVictory + ' / ' + computerVictory);
            score.html(clickCompter + ' / 3 ')

        changeImg(computer, computerChoice);
        changeImg(player, playerChoice);
        

    });
};

$('#btn_reset').on('click', function () {
    computerChoice.attr('src', 'assets/img/questionMark.png');
    playerChoice.attr('src', 'assets/img/questionMark.png');
    clickCompter = 0;
    result.html('0');
    score.html('0');
    computerVictory = 0;
    playerVictory = 0;
});

});
