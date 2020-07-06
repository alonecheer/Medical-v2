import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Input  } from 'antd';
import styled from "styled-components";
const StyledWrapper = styled.div`

`;

const Index = () => {
    useEffect(() => {
        setPeoples(people)
      }, []);
  const [peoples,setPeoples] = useState([])
  const [term,setTerm] = useState('')
const searchHandler  = (e) =>{
    setTerm(e)
}   
  const searchingFor = term =>{
      return function(x){
          return x.toLoweCase().includes(term.toLoweCase()) || !term;
      }
        
  }
  const people = [{
      id: 1,
      first: "Sarah",
      last: "Johnson",
      age: 25
  },
  {
    id: 2,
    first: "tom",
    last: "eiei",
    age: 30
  },
  {
    id: 3,
    first: "cheer",
    last: "meen",
    age: 18
  },
]
  return (
    <StyledWrapper>
        <form>
            <input type="text" onChange={(e)=>{searchHandler(e.target.value)}} value={term}></input>
        </form>
    {
        peoples.filter(searchingFor(x)).map(person => {
            return(
                <div key = {person.id}>
                    <h1>{person.first}</h1>
                    <h1>{person.last}</h1>
                    <h3>{person.age}</h3>
                </div>
            )
        })
    }
      
    </StyledWrapper>
  );
};
export default Index;
