import React from "react";
import CardsList from "../../../modules/horgolmanyaim/CardsList";

const AllCards = () => {

    const data= [
        {
            id: '1',
            img:'https://images.unsplash.com/photo-1576859000633-11e9f0cc75d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
            des:'',
            title:'Baba- és gyermekvilág'
        },
        {
            id: '2',
            img:'https://images.unsplash.com/photo-1608033087328-f282cc17a27f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=473&q=80',
            des:'',
            title:'Horgolt háztartás'
        },
        {
            id: '3',
            img:'https://images.unsplash.com/photo-1470049384172-927891aad5e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            des:'',
            title:'Horgolt kiegészítők'
        },
        {
            id: '4',
            img:'https://images.unsplash.com/photo-1622648147611-e817249f3b73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80',
            des:'',
            title:'Horgolt ruhák'
        },
        {
            id: '5',
            img:'https://images.unsplash.com/photo-1520899981500-21af7ff24c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=777&q=80',
            des:'',
            title:'Horgolt dekoráció'
        }
    ]

    return (
        <CardsList item={data}/>
    )
}
export default AllCards;