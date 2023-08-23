import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(favorite) {
    setFavorites([...favorites, favorite]);
  }


  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesProvider, FavoritesContext };
