import { useState } from "react";

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;

  const [countage , setCountAge]= useState(age)



  return (
    <>
      <h1>
        {firstName} , {lastName}
      </h1>
      <p>age : {countage}</p>
      <p>Hair color : {hairColor}</p>

      <button onClick={()=>setCountAge(countage +1)}> Birthday Button for {firstName} {lastName}</button>
      <button onClick={()=>setCountAge(age)}> Birthday Button for {firstName} {lastName}</button>
    </>
  );
};
export default PersonCard;
