import { useState } from "react";

const HookObject = () => {
    const [user,setUser]=useState({firstName:"",lastName:""})


    const changeHandler =(e)=>{
setUser({firstName:e.target.value})
    }
    return ( 
<form>
    <input type="text" value={user.firstName} onChange={changeHandler} />
    <h2>my name is -{user.firstName}</h2>
    <h2>my lastName is -{user.lastName}</h2>

</form>
     );
}
 
export default HookObject;