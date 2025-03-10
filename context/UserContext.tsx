import React, { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
  uid: string | null;
  displayName: string | null;
  photoURL: string | null;
  setUid: (uid: string | null) => void;
  setDisplayName: (displayName: string | null) => void;
  setPhotoURL: (photoURL: string | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [uid, setUid] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [photoURL, setPhotoURL] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ uid, displayName, photoURL, setUid, setDisplayName, setPhotoURL }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};