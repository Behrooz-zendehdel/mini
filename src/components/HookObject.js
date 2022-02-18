import { useState } from "react";

const HookObject = () => {
    const [user, setUser] = useState({ firstName: "", lastName: "" })
    // dar sorati k state object bod bayad az setUser yek clone begiri ta az pak shodane 
    // data jologiri beshe.

    const changeHandler = (e) => {
        setUser({ ...user, firstName: e.target.value })
        //clone
    }
    const changeLastNameHandler = (e) => {
        setUser({ ...user, lastName: e.target.value })
    }

    return (
        <form>
            <h2>my name is -{user.firstName}</h2>
            <input type="text" value={user.firstName} onChange={changeHandler} />
            <h2>my lastName is -{user.lastName}</h2>
            <input type="text" value={user.lastName} onChange={changeLastNameHandler} />

        </form>
    );
}

export default HookObject;