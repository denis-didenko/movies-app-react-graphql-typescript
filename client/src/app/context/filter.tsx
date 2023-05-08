import { createContext, useState, useMemo, ReactNode } from 'react';

interface FilterState {
  genreId: string;
  year: string;
  language: string;
  sortBy: string;
  company: string;
  provider: string;
  network: string;
}

interface FilterSetters {
  setGenreId: (genreId: string) => void;
  setYear: (year: string) => void;
  setLanguage: (language: string) => void;
  setSortBy: (sortBy: string) => void;
  setCompany: (company: string) => void;
  setProvider: (provider: string) => void;
  setNetwork: (network: string) => void;
}

interface FilterContextValue extends FilterState, FilterSetters {}

export const FilterContext = createContext<FilterContextValue>({} as FilterContextValue);

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

  const contextValue = useMemo(
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

  return <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>;
};
