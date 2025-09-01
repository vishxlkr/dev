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
