import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "fbase";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUse);
  return (
    <>
      <AppRouter isLoggedI={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
