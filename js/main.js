/* Rifare il live coding delle icone visto insieme a lezione. Di seguito le fasi:
Milestone 1
Partendo dalla seguente struttura dati (allegata sotto) , mostriamo in pagina tutte le icone disponibili
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

// ARRAY COLORS

const colors = [
    "#001858",
    "#8bd3dd",
    "#f582ae",
]

//REFERENZE
const container = document.querySelector(".icons");
const select = document.querySelector("#type")

// ANDIAMO ADESSO A CAMBIARE IL COLORE PER TYPE
const colorIconsType = colorIcons(icons, colors);
//TRAMITE LA FUNZIONE printICons VADO A INIETTARE GLI OGGETTI NELL HTML
printIcons(colorIconsType, container);
//ANDIAMO AD AGGIUNGERE DELLE OPTION ALLA SELECT
const type = typeUnivoco(icons);
addOption(type, select)

/** 
* UTILITIES FUNCTION
*/

/** 
* FUNCTION PER INSERIRE GLI OGGETTI ICONS NELL HTML
*/
function printIcons(icons, container, ){
    let html = ""; 

    icons.forEach((icon) => {
        const {family, prefix, name, color} = icon;

        html += 
        `<div class="icon p-20">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="title">${name}</div>
        </div>`
    });
    
    container.innerHTML = html;
}

/**
* FUNCTION PER CAMBIARE COLORE ALLE ICONE BY TYPE
*/

function colorIcons(icons, colors){
    const type = typeUnivoco(icons);

    //ASSEGNARE UN COLORE BY TIPE AD OGNI ICONA
    const coloreIcon = icons.map((icon) => {
        const indexType = type.indexOf(icon.type);
        
        return {
            ...icon,
            color: colors[indexType], // QUESTO COLOR ADESSO è POSSIBILE ANDARE AD AGGIUNGERLO ALLO STYLE CHE
                                     //AVEVAMO PRIMA NELLA FUNZIONE printIcons.
        }
    }); 
    return coloreIcon
};

/**
* FUNCTION PER CAPIRE QUANTI TYPE DIVERSI ABBIAMO NEL NOSTRO ARRAY
*/

function typeUnivoco(icons){
    const type = [];

    icons.forEach((icon) => {
        if(! type.includes(icon.type)){
            type.push(icon.type);
        }
    })
    
    return type;
}

/** 
* FUNCTION PER AGGIUNGERE OPTION A SELECT
*/

function addOption(type, select){
    let option = "";

}