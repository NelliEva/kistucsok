import React from "react";
import CardsSectionList from "../../../modules/home/CardsSectionList";




const CardsSection = () => {

    const data = [
        {
            id:"1",
            img: 'https://images.unsplash.com/photo-1576860525375-4e7b4e00155c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80',
            title:"EGYEDI HORGOLT AJÁNDÉKOK",
            description: "Ajándékozás előtt állsz? És nincs semmi ötleted?",
            btn:"Ime a segitseg!",
            link:''
        },
        {
            id:"2",
            img: "https://images.unsplash.com/photo-1576861048192-fa56cf0a8161?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            title:'HORGOLMÁNYAIM',
            description: 'Eddigi horgolt munkáimból itt találsz egy kis ízelítőt.',
            btn:'Megnezem oket',
            link:'/horgolmanyaim'
        },
        {
            id:"3",
            img: 'https://images.unsplash.com/photo-1620633437938-be73c35eb77e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title:'HORGOLO TANFOLYAM',
            description: 'Nem tudsz horgolni?Mégis szeretnél magadnak egy-egy horgolt csodát?',
            btn:'Megnezem oket',
            link:''
        }
    ]

    return(
       <CardsSectionList item={data}/> 
    )
}

export default CardsSection;