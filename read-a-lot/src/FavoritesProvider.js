import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext(null);

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(favorite) {
    setFavorites([...favorites, favorite]);
    console.log('Favorite added!')
  }


  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesProvider};
