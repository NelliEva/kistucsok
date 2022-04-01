import React from "react";
import CardList from "../../../modules/rendelheto/CardList";
import teddy from '../../../img/teddy.png';
import csorgo from '../../../img/csorgo.png';
import telefon from '../../../img/telefon.png';
import szutyo from '../../../img/szutyo.png';
import szutyo2 from '../../../img/szutyo2.png';
import kisagy from '../../../img/kisagy.png';
import kisagy2 from '../../../img/kisagy2.png';
import szundi from '../../../img/szundi.png';
import szundi2 from '../../../img/szundi2.png';
import polip from '../../../img/polip.png';
import maci from '../../../img/maci.png';
import cica from '../../../img/cica.png';
import cica2 from '../../../img/cica2.png';
import zebra from '../../../img/zebra.png';
import zebra2 from '../../../img/zebra2.png';
import taska from '../../../img/taska.png';
import taska2 from '../../../img/taska2.png';
import zacsko from '../../../img/zacsko.png';
import zacsko2 from '../../../img/zacsko2.png';
import baba from '../../../img/baba.png';
import roka from '../../../img/roka.png';
import roka1 from '../../../img/roka1.png';
import konyv from '../../../img/konyv.png';
import zsiraf from '../../../img/zsiraf.png';
import zsiraf2 from '../../../img/zsiraf2.png';


const AllCards = () => {

    let datas= [
        {
            id:'1',
            img: teddy,
            img2: teddy,
            info:'A horgolt mackó a legkisebbeknek szóló ajándék. ',
            title:'Horgolt mackó',
            link:'',
            price:'4.100',
            color:'none',
            color2:''
        },
        {
            id:'4',
            img:roka1,
            img2:roka1,
            info:'A kis horgolt róka ideális ajándék akár kisgyerekeknek, akár nagyobbaknak is.',
            title:'Horgolt róka',
            link:'',
            price:'5.900',
            color:'none',
            color2:''
            
        },
        {
            id:'2',
            img:zsiraf,
            img2:zsiraf2,
            info:'A kis csíkos zsiráf ideális ajándék akár kicsiknek, akár nagyobbaknak.',
            title:'Horgolt zsiráf',
            link:'',
            price:'6.900',
            color:'#11ACD8',
            color2:'#fdfd96'
            
        },
        {
            id:'3',
            img:szundi,
            img2:szundi2,
            info:'A horgolt szundikendő ideális ajándék akár babának, akár kisgyermeknek. ',
            title:'Horgolt szundikendő',
            link:'',
            price:'4.600',
            color:'#F382F1',
            color2:'#11ACD8'
            
        },
        {
            id:'10',
            img:cica,
            img2:cica2,
            info:'A kis horgolt cica ideális ajándék akár kicsiknek, akár nagyobbaknak.',
            title:'Horgolt cica',
            link:'',
            price:'6.200',
            color:'#11ACD8',
            color2:'#E8BBF2'
        },
        {
            id:'11',
            img:zebra,
            img2:zebra2,
            info:'A kis csíkos zebu ideális ajándék akár kicsiknek, akár nagyobbaknak.',
            title:'Horgolt zebra',
            link:'',
            price:'6.700',
            color:'#C6EF4D',
            color2:'#4DEFE1',
            color3:'#F382F1'
        },
        {
            id:'14',
            img:roka,
            info:'A horgolt rókapár ideális ajándék akár esküvőre, akár évfordulóra, de még születésnapra is.',
            title:'Horgolt rókapár',
            link:'',
            price:'12.000',
            color:'',
            color2:''
        },
        {
            id:'7',
            img:polip,
            info:'Ez a picuri polipka a legkisebbek kedvence. ',
            title:'Horgolt polip',
            link:'',
            price:'2.800',
            color:'',
            color2:''
        },
        
        {
            id:'8',
            img:maci,
            info:'A horgolt maci ideális ajándék akár babának, akár kisgyermeknek. ',
            title:'Horgolt maci',
            link:'',
            price:'4.400',
            color:'',
            color2:''
        },
        {
            id:'13',
            img:baba,
            info:'A horgolt babaváró ajándék ideális ajándék akár újszülötteknek, akár babáknak.',
            title:'Horgolt babaváró ajándék',
            link:'',
            price:'11.100',
            color:'',
            color2:''
        },
        
        {
            id:'15',
            img:kisagy2,
            img2:kisagy,
            info:'A horgolt kiságyforgó a legkisebbeknek szóló ajándék. ',
            title:'Horgolt kiságyforgó',
            link:'',
            price:'11.900',
            color:'#FFE0FE',
            color2:'#5DEF4D'
        },
        {
            id:'17',
            img:csorgo,
            info:'A horgolt csörgő ideális ajándék akár babának, akár kisgyermeknek. ',
            title:'Horgolt csörgő',
            link:'',
            price:'4.200',
            color:'',
            color2:''
        },
        
        {
            id:'12',
            img:zacsko,
            img2:zacsko2,
            info:'Ideális a boltból hazakerülő különböző zacskók tárolására. ',
            title:'Horgolt zacskótartó',
            link:'',
            price:'2.600',
            color:'#fdfd96',
            color2:'#F9CDE2'
        },
        {
            id:'5',
            img:szutyo,
            img2:szutyo2,
            info:'Ezekben a horgolt tasakokban mindenféle dolgot egyszerűen tudsz tárolni.',
            title:'Horgolt tasak',
            link:'',
            price:'1.000',
            color:'#FF8D05',
            color2:'#11ACD8'
        },
        {
            id:'6',
            img:telefon,
            info:'A horgolt telefontartó azok számára, akik csak a mobiljukat viszik magukkal.',
            title:'Horgolt telefontartó',
            link:'',
            price:'2.900',
            color:'',
            color2:''
        },
        {
            id:'9',
            img:taska,
            img2:taska2,
            info:'A bevásárlótáska ideális piaci, kisbolti bevásárlásokhoz. ',
            title:'Horgolt bevásárlótáska',
            link:'',
            price:'4.900',
            color:'#E8BBF2',
            color2:'#11ACD8'
        },
        
        {
            id:'16',
            img:konyv,
            info:'Ideális ajándék gyerekeknek az olvasás megkedveltetésére, de a felnőttek arcára is mosolyt csalnak.',
            title:'Mókás könyvjelzők',
            link:'',
            price:'3.100',
            color:'',
            color2:''
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