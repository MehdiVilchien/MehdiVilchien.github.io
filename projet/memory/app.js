//Le jeu comporte 10 motifs différents qui sont numérotés de 1 à 10.

//Le tableau est initialisé avec les numéros de motifs qui se suivent
var cardPatterns=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10];

// Le codage utilisé pour l'état des cartes est le suivant :
// 0 : face cachée
// 1 : face visible
// -1 : enlevée

// Au départ toutes les cartes sont présentées de dos
var cardStatus=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

// Tableau contenant les numéros des cartes retournées à un moment donné du jeu
var returnedCards=[];

// Cette variable contient le nombre de paires de cartes qui ont déjà été trouvées
var pairsFound=0;

// On récupère tous les éléments img dans un tableau
var Cards=document.querySelectorAll("img");

// On parcourt le tableau des éléments img pour placer un écouteur d'évenement
for(var i=0;i<Cards.length;i++){
	Cards[i].card=i; //Ajout de la propriété noCarte à l'objet img
	Cards[i].onclick=function(){
		handleClickCard(this.card);
	}                      
}

initialiseJeu();

function majAffichage(card){

	switch(cardStatus[card]){
		case 0:
			Cards[card].src="img/back-card.png";
			break;
		case 1:
			Cards[card].src="img/card"+cardPatterns[card]+".png";
			break;
		case -1:
			Cards[card].style.visibility="hidden";
			break;
	}
}

function rejouer(){
    function display_image(src, width, height, alt) {
        var a = document.createElement("img");
        a.src = src;
        a.width = width;
        a.height = height;
        a.alt = alt;
        document.body.appendChild(a);
    }
    display_image('img_echo.jpeg', 
                     600, 
                     600, 
                     'JavaScriptImage'); 
    }
    
function initialiseJeu(){
    for(var position=cardPatterns.length-1; position>=1; position--){
        var hasard=Math.floor(Math.random()*(position+1));
        var save=cardPatterns[position];
        cardPatterns[position]=cardPatterns[hasard];
        cardPatterns[hasard]=save;
    }
}

function handleClickCard(card) {
    
    if(returnedCards.length<2){
   
        if(cardStatus[card]==0){
            cardStatus[card]=1;
            returnedCards.push(card);
            majAffichage(card);
        }
        if(returnedCards.length==2){
            var newStatus=0;
            if(cardPatterns[returnedCards[0]]==cardPatterns[returnedCards[1]]){
                newStatus=-1;
                pairsFound++;
            }
            cardStatus[returnedCards[0]]=newStatus;
            cardStatus[returnedCards[1]]=newStatus;

            setTimeout(function(){
                majAffichage(returnedCards[0]);
                majAffichage(returnedCards[1]);
                returnedCards=[];
                if(pairsFound==10){
                    rejouer();
                }
            },750);
        }
    }
}



