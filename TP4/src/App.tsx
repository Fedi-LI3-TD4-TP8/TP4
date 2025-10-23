import React from 'react';
import './App.css';
import Time from './component/Time';
import { ThemeProvider } from './component/ThemeContext';
import ThemeToggle from './component/ThemeToggle';
import UserList from './component/UserList'; // <-- import du nouveau composant
import { UserProvider } from './context/UserContext';
import UserProfile from './context/UserProfile';
import Notifications from './context/Notifications';
import NotificationCounter from './context/NotificationCounter';
function App() {
  return (
<ThemeProvider>
      <UserProvider>
        <div style={{ padding: 20, fontFamily: 'Arial' }}>
          {/* Thème */}
          <ThemeToggle />
          <hr />

          {/* Horloge */}
          <h1>Bienvenue !</h1>
          <Time />
          <hr />

          {/* Liste d’utilisateurs API */}
          <h3>TP - Appel API avec useEffect</h3>
          <UserList />
          <hr />

          {/* Profil et notifications */}
          <h3>Profil Utilisateur et Notifications</h3>
          <UserProfile />
          <Notifications />
          <NotificationCounter />
        </div>
      </UserProvider>
    </ThemeProvider>
    
  );
}

export default App;
