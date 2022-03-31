import React from "react";
import CardList from "../../../modules/blog/CardList";

const AllBlogCards = () => {

    let data=[
        {
            id:'1',
            img:'https://www.kistucsokhorgoldaja.hu/wp-content/uploads/2021/11/christmas-tree-g12577c32e_1920-400x250.jpg',
            title:'5 +1 érv amellett, hogy horgolt dolgot ajándékozz karácsonyra',
            info:'Vészesen közeleg a karácsony… A te fejedben is megfordult már, hogy mit is ajándékozz karácsonyra? Mi a legjobb, legmegfelelőbb meglepetés, amivel örömöt tudsz szerezni? A horgolt ajándékok egyik legeslegjobb jellemzője: az EGYEDISÉG!   Bármilyen horgolt dologról...',
            date:'nov 23, 2021'
        },
        {
            id:'2',
            img:'https://www.kistucsokhorgoldaja.hu/wp-content/uploads/2021/09/20210921_121058-400x250.jpg',
            title:'Horgolt telefontartó',
            info:'A horgolt telefontartó kiötlése és ebben a formában való megjelenése nem egyszerre történt.Az első telefontokot még évekkel ezelőtt készítettem a férjemnek. Aztán szépen lassan a családunk minden tagja kapott egyet.Aztán a tavalyi év őszén eljött az én telefondobálós...',
            date:' szept 21, 2021'
        },
        {
            id:'3',
            img:'https://www.kistucsokhorgoldaja.hu/wp-content/uploads/2021/09/20210906_151425-400x250.jpg',
            title:'Kornélia, a kis horgolt cica, aki ráadásul csíkos is',
            info:'Nemrég végre elkészítettem ezt horgolt cicát. Már hónapok óta bennem volt. Csak valahogy sohasem volt rá időm. Persze ez csak a kifogás része, merthogy azt vallom, hogy mindig arra van időnk, amire akarjuk, hogy legyen. :)Na, de a lényeg, hogy elkészült. És a Kornélia...',
            date:'szept 8, 2021'
        }
    ]
    return(
        <>
        <CardList data={data}/>
        </>
    )
}

export default AllBlogCards;