import React from "react";
import CardList from "../../../modules/rendelheto/CardList";
import teddy from '../../../img/teddy.png';
import csorgo from '../../../img/csorgo.png';
import telefon from '../../../img/telefon.png';
import szutyo from '../../../img/szutyo.png';
import kisagy from '../../../img/kisagy.png';
import szundi from '../../../img/szundi.png';
import polip from '../../../img/polip.png';
import maci from '../../../img/maci.png';
import cica from '../../../img/cica.png';
import zebra from '../../../img/zebra.png';
import taska from '../../../img/taska.png';
import zacsko from '../../../img/zacsko.png';
import baba from '../../../img/baba.png';
import roka from '../../../img/roka.png';
import roka1 from '../../../img/roka1.png';
import konyv from '../../../img/konyv.png';
import zsiraf from '../../../img/zsiraf.png';


const AllCards = () => {

    let datas= [
        {
            id:'1',
            img: teddy,
            info:'A horgolt mackó a legkisebbeknek szóló ajándék. A mérete miatt az apró kezek könnyen ölelgethetik.',
            title:'Horgolt mackó',
            link:''
        },
        {
            id:'4',
            img:roka1,
            info:'A kis horgolt róka ideális ajándék akár kisgyerekeknek, akár nagyobbaknak, de bármilyen alkalomra megállja a helyét.',
            title:'Horgolt róka',
            link:''
            
        },
        {
            id:'2',
            img:zsiraf,
            info:'A kis csíkos zsiráf ideális ajándék akár kicsiknek, akár nagyobbaknak.',
            title:'Horgolt zsiráf',
            link:''
            
        },
        {
            id:'3',
            img:szundi,
            info:'A horgolt szundikendő ideális ajándék akár babának, akár kisgyermeknek. Mérete miatt az apró kezek könnyen ölelgethetik.',
            title:'Horgolt szundikendő',
            link:''
            
        },
        {
            id:'10',
            img:cica,
            info:'A kis horgolt cica ideális ajándék akár kicsiknek, akár nagyobbaknak.',
            title:'Horgolt cica',
            link:''
        },
        {
            id:'11',
            img:zebra,
            info:'A kis csíkos zebu ideális ajándék akár kicsiknek, akár nagyobbaknak.',
            title:'Horgolt zebra',
            link:''
        },
        {
            id:'14',
            img:roka,
            info:'A horgolt rókapár ideális ajándék akár esküvőre, akár évfordulóra, de még születésnapra is.',
            title:'Horgolt rókapár',
            link:''
        },
        {
            id:'7',
            img:polip,
            info:'Ez a picuri polipka a legkisebbek kedvence. A mérete miatt könnyen ölelgethetik, a kis csápokat, pedig egyszerűen megmarkolhatják.',
            title:'Horgolt polip',
            link:''
        },
        
        {
            id:'8',
            img:maci,
            info:'A horgolt maci ideális ajándék akár babának, akár kisgyermeknek. Mérete miatt az apró kezek könnyen ölelgethetik.',
            title:'Horgolt maci',
            link:''
        },
        {
            id:'13',
            img:baba,
            info:'A horgolt babaváró ajándék ideális ajándék akár újszülötteknek, akár babáknak.',
            title:'Horgolt babaváró ajándék',
            link:''
        },
        
        {
            id:'15',
            img:kisagy,
            info:'A horgolt kiságyforgó a legkisebbeknek szóló ajándék. ',
            title:'Horgolt kiságyforgó',
            link:''
        },
        {
            id:'17',
            img:csorgo,
            info:'A horgolt csörgő ideális ajándék akár babának, akár kisgyermeknek. Mérete miatt az apró kezek könnyen ölelgethetik.',
            title:'Horgolt csörgő',
            link:''
        },
        
        {
            id:'12',
            img:zacsko,
            info:'Ideális a boltból hazakerülő különböző zacskók tárolására. Felül berakod a zacskókat, alul pedig sorban egyenként ki tudod húzni őket.',
            title:'Horgolt zacskótartó',
            link:''
        },
        {
            id:'5',
            img:szutyo,
            info:'Ezekben a horgolt tasakokban mindenféle dolgot egyszerűen tudsz tárolni.',
            title:'Horgolt tasak',
            link:''
        },
        {
            id:'6',
            img:telefon,
            info:'A horgolt telefontartó kiváló megoldást jelent azok számára, akik sokszor csak a mobiljukat viszik magukkal.',
            title:'Horgolt telefontartó',
            link:''
        },
        {
            id:'9',
            img:taska,
            info:'A bevásárlótáska ideális piaci, kisbolti bevásárlásokhoz. ',
            title:'Horgolt bevásárlótáska',
            link:''
        },
        
        {
            id:'16',
            img:konyv,
            info:'Ideális ajándék gyerekeknek az olvasás megkedveltetésére, de a felnőttek arcára is mosolyt csalnak. ',
            title:'Mókás könyvjelzők',
            link:''
        },
        
        // },
        // {
        //     id:'18',
        //     img:'',
        //     info:'',
        //     title:''
        // },
    ]
    return(
        <CardList datas={datas}/>
    )
}

export default AllCards;