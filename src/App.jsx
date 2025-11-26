import React from 'react'
import CardSet from '../views/CardSet'
import Button from '../views/Button'
import Form from '../views/Form'
import Counter from '../views/Counter'
import LikeButton from '../views/LikeButton'
import Ludo from '../views/Ludo'
import ToDo from '../views/ToDo'
import Lottery from '../views/Lottery'
import Ticket from '../views/Ticket'
import "./App.css"
import TicketNum from '../views/TicketNum'
import FormImp from '../views/FormImp'
import CommentForm from '../views/CommentForm'

let winCondition=(ticket)=>{
//   return ticket.every((num)=>num===ticket[0]);
  return ticket[0]===0;
 }


function App() {
 

  return (
    <div>
      <CardSet/><hr/>
      <Button/><hr/>
      <Form/><hr/>
      <Counter/><hr/>
      <LikeButton/><hr></hr><hr/><hr/>
      <Ludo/><hr/>
      <ToDo/><hr/>
      <Lottery n={3} winningSum={15} winCondition={winCondition}/><hr></hr>
     <FormImp/><hr/><hr/><hr/>
     <CommentForm/>
    </div>
  )
}

export default App