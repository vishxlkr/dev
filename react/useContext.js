// 4 STEPS
// 1. Create a context using createContext().
const UserContext = createContext();

// 2. Wrap the required components inside Context.Provider.
<UserContext.Provider value={data}>{children}</UserContext.Provider>;

// 3. Pass the data using the value prop of the Provider.
<UserContext.Provider value={{ user, setUser }}>
   {children}
</UserContext.Provider>;

// 4. Access the data in child components using useContext(ContextName).
const { user } = useContext(UserContext);

// __________________________________________________________________________________________
// first createContext which acts as pipeline
// then use this pipile in the return to send data (also use .Provider)
// then whatever will be the name of the export function -> use it is as a wrapper
// while consuming/using the context -> use the pipeline again (useContext(pipeline));

//11111111111
// create context

// src/context/UserContext.jsx
import { createContext, useState } from "react";

// 1. Create context
export const UserContext = createContext();

// 2. Create provider
export const UserProvider = ({ children }) => {
   const [user, setUser] = useState("Vishal");

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};

//22222222222
// wrap context

// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
   <UserProvider>
      <App />
   </UserProvider>
);

// 3333333333

// src/components/Profile.jsx
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
   const { user, setUser } = useContext(UserContext);

   return (
      <div>
         <h2>Hello, {user} 👋</h2>
         <button onClick={() => setUser("Kumar")}>Change Name</button>
      </div>
   );
};

export default Profile;
