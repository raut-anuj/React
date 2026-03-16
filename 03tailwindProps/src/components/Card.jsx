import React from "react";

function Card({username}) {
  console.log(username);
  return (
    <div className="bg-green-700 text-3xl text-black">
      Hello {username}
    </div>
  );
}

export default Card;