import { createContext } from "react";

const UserContext = createContext(0);
// 0: not logged in
// 1: logged in as an applicant
// 2: logged in as lab

export default UserContext;