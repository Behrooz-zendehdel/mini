import { useState } from "react";

const HookObject = () => {
    const [user,setUser]=useState({firstName:"",lastName:""})


    const changeHandler =()=>{

    }
    return ( 
<form>
    <input type="text" value={user.firstName} onChange={changeHandler} />
</form>
     );
}
 
export default HookObject;