
// DECLA VARIABLE
let $form = document.querySelector('form')

let game = document.querySelector('.play');

let rem = document.querySelector('.rem');

let $papier = document.querySelector('.papier');

let $ciseaux = document.querySelector('.ciseaux');

let $pierre = document.querySelector('.pierre');

let $h1 = document.querySelector('h1');

let $display = document.querySelector('.display');

let jeux = ""

let vic = ""

let def = ""

// CHECK PLURIEL
let pluriel = function pluriel(){
    if (count > 1){
        jeux = " Jouées";
    } else {
        jeux = " Jouée";
    }
}

//CHECK VICT PLUR 
let pluri = function pluri(){
    if (victoire > 1){
        vic = " Gagnées";
    } else {
        vic = " Gagnée";
    }
}

// CHECK DEF PLUR 
let plu = function plu(){
    if (defaite > 1){
        def = " Défaites"
    } else {
        def = " Défaite"
    }
}

// COMPTEUR PR DELETE
let click = 0;

// VARIABLE TIRAGE ORDI
let random;

//COMPTEUR VICTOIR/DEFAITE/NBR MATCH
let victoire = 0;

let defaite = 0;

let count = 0;

// POURCENTAGE
let perc = Math.floor((victoire * 100) / count);

// VARIABLE POS
let pos;

// FUNCTION DRAW
let draw = function draw(){
    let $item = document.createElement('h2');
    $item.classList.add('result');
    $item.textContent = 'Égalité !';
    $display.appendChild($item);
    return $item;
    }

// FUNCTION WIN 
let win = function win(){
    let $item = document.createElement('h2');
    $item.classList.add('result');
    $item.textContent = 'Gagné !';
    $display.appendChild($item);
    return $item;
    }

// FUNCTION LOOSE
let loose = function loose(){
    let $item = document.createElement('h2');
    $item.classList.add('result');
    $item.textContent = 'Perdu !';
    $display.appendChild($item);
    return $item;
    }

// FUNCTION DISPLAY WIN
let dispW = function dispW(){
    let $w = document.createElement('h3');
    $w.classList.add('h3');
    $w.textContent = victoire + vic;
    $display.appendChild($w);
    return $w;
};

// FUNCTION DISPLAY LOOSE 
let dispL = function dispL(){
    let $l = document.createElement('h4');
    $l.classList.add('h4');
    $l.textContent = defaite + def;
    $display.appendChild($l);
    return $l
};

// FUNCTION DISPLAY PERCENTAGE
let dispP = function dispP(){
    let $p = document.createElement('h5');
    $p.classList.add('h5');
    $p.textContent = (Math.floor((victoire * 100) / count) + ' %' + vic);
    $display.appendChild($p);
    return $p;
};
// FUNCTION DISPLAY COUNT
let dispC = function dispC(){
    let $c = document.createElement('h6');
    $c.classList.add('h6');
    $c.textContent = count + jeux;
    $display.appendChild($c);
    return $c;
};

// FUNCTION REMOVE 

    let deL = function deL(){
    if (click >= 2){
        //  SUPR SCORE
        let supr_a = document.querySelector("h2");
        supr_a.parentNode.removeChild(supr_a);
        //SUPR VICTOIRE
        let supr_b = document.querySelector("h3");
        supr_b.parentNode.removeChild(supr_b);
        //SUPR DEFAITE
        let supr_c = document.querySelector("h4");
        supr_c.parentNode.removeChild(supr_c);
        // SUPR PERCENT
        let supr_d = document.querySelector("h5");
        supr_d.parentNode.removeChild(supr_d);
        // SUPR COUNT
        let supr_e = document.querySelector("h6");
        supr_e.parentNode.removeChild(supr_e);
    
    }
}

// ONCLICK SELECT + POS 
$papier.addEventListener('click', function(){
    pos = 1;
    
    $ciseaux.classList.remove('select');
    $papier.classList.add('select');
    $pierre.classList.remove('select');
})
$ciseaux.addEventListener('click', function(){
    pos = 2;
    
    $ciseaux.classList.add('select');
    $papier.classList.remove('select');
    $pierre.classList.remove('select');
})
$pierre.addEventListener('click', function(){
        pos = 3;
        
        $ciseaux.classList.remove('select');
        $papier.classList.remove('select');
        $pierre.classList.add('select');
})

// FUNCTION RANDOMIZE
let lancer = function thro(){
        let random = Math.floor(Math.random() * 3) + 1; 
        return random
    };     

// GO LEFT
let goL = true;

//GO RIGHT
let goR = true;

// DEPLACEMENT FLECHES
window.addEventListener('keyup', function(event){

    if (event.keyCode === 37 && goL === true){

        pos -= 1;

        if (pos === 1){
            $papier.classList.add('select');
            $pierre.classList.remove('select');
            $ciseaux.classList.remove('select');
            
            goL = false;
            goR = true;
        }
    }

    else if (event.keyCode === 39 && goR === true){

        pos +=1;

        if (pos === 3){
            $pierre.classList.add('select');
            $papier.classList.remove('select');
            $ciseaux.classList.remove('select');

            goR  = false;
            goL = true;
        }
    } 
})

// JEU ORDINATEUR 
$form.addEventListener('submit', function thro(e){

    e.preventDefault();

    count +=1;

    pluriel();

    click +=1;

    deL();

    let $random = lancer();

    // DRAW 
    if (pos === $random){

        draw();
        plu();
        pluri();

        pos == 0;
        $random == 0;

        dispW();
        dispL();
        dispP();
        dispC();

        return;

         
    }

    if ($random === 1 && pos === 2){

        win()

        pos == 0;
        $random == 0;
        victoire += 1;

        pluri();
        plu();

        dispW();
        dispL();
        dispP();
        dispC();
        
        return;

    } else if ($random === 2 && pos === 3){

        win()

        pos == 0;
        $random === 0;
        victoire += 1;

        plu();
        pluri();

        dispW();
        dispL();
        dispP();
        dispC();

        return;

        
    } else if ($random === 3 && pos === 1){

        win()

        pos == 0;
        $random == 0;
        victoire += 1;

        plu();
        pluri();

        dispW();
        dispL();
        dispP();
        dispC();

        return;
    }

    else {

        loose();

        defaite += 1

        plu();
        pluri();

        dispW();
        dispL();
        dispP();
        dispC();

        return;
    }

});