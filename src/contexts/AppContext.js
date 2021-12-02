import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState({});

  const returnValue = {
    loadingState: [loading, setLoading],
    phonesState: [phones, setPhones],
    selectedPhoneState: [selectedPhone, setSelectedPhone],
  };

  return (
    <AppContext.Provider value={returnValue}>{children}</AppContext.Provider>
  );
};
