import { createContext, useState, useMemo, ReactNode } from 'react';

interface FilterContextProps {
  genreId: string;
  setGenreId: (genreId: string) => void;
  year: string;
  setYear: (year: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  company: string;
  setCompany: (company: string) => void;
  provider: string;
  setProvider: (provider: string) => void;
  network: string;
  setNetwork: (network: string) => void;
}

const FilterContext = createContext<FilterContextProps>({} as FilterContextProps);

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

  return <FilterContext.Provider value={store}>{children}</FilterContext.Provider>;
};

export default FilterContext;
