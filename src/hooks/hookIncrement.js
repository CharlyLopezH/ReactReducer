import { useState } from "react";

export const hookIncrement=()=>
{
console.log('Incrementar');

const [contador, setContador]=useState(0);

const Incrementar = ()=> {
setContador(contador+1);
}

return {contador, Incrementar};

}
export default hookIncrement;