import { createContext, useState, useMemo, ReactNode } from 'react';

interface FilterStateContextProps {
  genreId: string;
  year: string;
  language: string;
  sortBy: string;
  company: string;
  provider: string;
  network: string;
}
interface FilterSetStateContextProps {
  setGenreId: (genreId: string) => void;
  setYear: (year: string) => void;
  setLanguage: (language: string) => void;
  setSortBy: (sortBy: string) => void;
  setCompany: (company: string) => void;
  setProvider: (provider: string) => void;
  setNetwork: (network: string) => void;
}

export const FilterStateContext = createContext<FilterStateContextProps>(
  {} as FilterStateContextProps,
);
export const FilterSetStateContext = createContext<FilterSetStateContextProps>(
  {} as FilterSetStateContextProps,
);

interface FilterProviderProps {
  children: ReactNode;
}

export const FilterContextProvider = ({ children }: FilterProviderProps) => {
  const [genreId, setGenreId] = useState('');
  const [year, setYear] = useState('');
  const [language, setLanguage] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');
  const [company, setCompany] = useState('');
  const [provider, setProvider] = useState('');
  const [network, setNetwork] = useState('');

  const store = useMemo(
    () => ({
      genreId,
      setGenreId,
      year,
      setYear,
      language,
      setLanguage,
      sortBy,
      setSortBy,
      company,
      setCompany,
      provider,
      setProvider,
      network,
      setNetwork,
    }),
    [genreId, year, language, sortBy, company, provider, network],
  );
  const setters = useMemo(
    () => ({
      setGenreId,
      setYear,
      setLanguage,
      setSortBy,
      setCompany,
      setProvider,
      setNetwork,
    }),
    [],
  );

  return (
    <FilterStateContext.Provider value={store}>
      <FilterSetStateContext.Provider value={setters}>{children}</FilterSetStateContext.Provider>
    </FilterStateContext.Provider>
  );
};
