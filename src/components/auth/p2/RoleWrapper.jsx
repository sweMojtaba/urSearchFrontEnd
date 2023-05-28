import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoleContext from "./RoleContext";

function RoleWrapper(props) {
    const params = useParams(); // {role: xxx}
    const [role, setRole] = useState(params.role);
    useEffect(() => {
        setRole(params.role);
        console.log("role:", params.role);
    }, [params.role]);

    return <RoleContext.Provider value={[role, setRole]}>
        {props.children}
    </RoleContext.Provider>
}

export default RoleWrapper;