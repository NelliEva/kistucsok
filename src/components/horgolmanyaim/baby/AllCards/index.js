import React from "react";
import csorgo from '../../../../img/csorgo.png';
import kisagy from '../../../../img/kisagy.png';
import szundi from '../../../../img/szundi.png';
import polip from '../../../../img/polip.png';
import nagypolip from '../../../../img/nagypolip.png';
import polipszem from '../../../../img/polipszem.png';
import maci from '../../../../img/maci.png';
import cica from '../../../../img/cica.png';
import zebra from '../../../../img/zebra.png';
import baba from '../../../../img/baba.png';
import roka from '../../../../img/roka.png';
import roka1 from '../../../../img/roka1.png';
import konyv from '../../../../img/konyv.png';
import zsiraf from '../../../../img/zsiraf.png';
import madar from '../../../../img/madar.png';
import teddy from '../../../../img/teddy.png';
import papagaj from '../../../../img/papagaj.png';
import yoda from '../../../../img/yoda.png';
import tukan from '../../../../img/tukan.png';
import kistukan from '../../../../img/kistukan.png';

import CardList from "../../../../modules/horgolmanyaim/baby/CardList";


const AllCards = () => {

    let items = [
        {
            id:'1',
            img:polip,
            title:'Horgolt polipok',
            link:''
        },
        {
            id:'2',
            img:nagypolip,
            title:'Horgolt óriás polipok',
            link:''
        },
        {
            id:'3',
            img:polipszem,
            title:'Horgolt nagyszemű polipok',
            link:''
        },
        {
            id:'4',
            img:konyv,
            title:'Horgolt könyvjelzők',
            link:''
        },{
            id:'5',
            img:baba,
            title:'Horgolt babaváró szett',
            link:''
        },
        {
            id:'6',
            img:szundi,
            title:'Horgolt szundikendő',
            link:''
        },
        {
            id:'7',
            img:csorgo,
            title:'Horgolt csörgő',
            link:''
        },
        {
            id:'8',
            img:maci,
            title:'Horgolt maci',
            link:''
        },
        {
            id:'9',
            img:kisagy,
            title:'Horgolt kiságyforgó',
            link:''
        },{
            id:'10',
            img:roka,
            title:'Horgolt róka',
            link:''
        },
        {
            id:'11',
            img:roka1,
            title:'Horgolt rókapár',
            link:''
        },
        {
            id:'12',
            img:madar,
            title:'Bájos kis madárkák',
            link:''
        },
        {
            id:'13',
            img:papagaj,
            title:'Horgolt papagájok',
            link:''
        },
        {
            id:'14',
            img:zebra,
            title:'Horgolt zebra',
            link:''
        },{
            id:'15',
            img:zsiraf,
            title:'Horgolt zsiráf',
            link:''
        },
        {
            id:'16',
            img:cica,
            title:'Kornélia, a horgolt kiscica',
            link:''
        },
        {
            id:'17',
            img:teddy,
            title:'Horgolt mackó',
            link:''
        },
        {
            id:'18',
            img:yoda,
            title:'Baby Yoda',
            link:''
        },
        {
            id:'19',
            img:tukan,
            title:'Horgolt tukán',
            link:''
        },{
            id:'20',
            img:kistukan,
            title:'Horgolt kistukán',
            link:''
        },
        {
            id:'21',
            img:'',
            title:'Eddie, a bébisas',
            link:''
        },
        {
            id:'22',
            img:'',
            title:'Ping-pong, a pingvin',
            link:''
        },
        {
            id:'23',
            img:'',
            title:'Horgolt bagoly',
            link:''
        },
        {
            id:'24',
            img:'',
            title:'Horgolt panda',
            link:''
        },{
            id:'25',
            img:'',
            title:'Pushi cica',
            link:''
        },
        {
            id:'26',
            img:'',
            title:'Horgolt labda',
            link:''
        },
        {
            id:'27',
            img:'',
            title:'Maroknyi kutyus',
            link:''
        },
        {
            id:'28',
            img:'',
            title:'Horgolt egérke',
            link:''
        },
        {
            id:'29',
            img:'',
            title:'Horgolt kistáska',
            link:''
        },{
            id:'30',
            img:'',
            title:'Porg',
            link:''
        },
    ]
    return(
        <>
        <CardList items={items}/>
            </>
    )
}

export default AllCards;