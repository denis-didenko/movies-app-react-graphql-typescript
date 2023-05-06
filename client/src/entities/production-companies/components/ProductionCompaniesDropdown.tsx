import FormSelect from '@shared/components/Form/select';
import { useFilterSetState } from '@shared/hooks/useFilter';

const companies = [
  { id: '', value: 'Всi' },
  { id: '114676', value: 'Start' },
  { id: '42877', value: 'Yellow, Black & White' },
  { id: '420', value: 'Marvel Studios' },
  { id: '7505', value: 'Marvel Entertainment' },
  { id: '5374', value: 'Marv Films' },
  { id: '9993', value: 'DC Entertainment' },
  { id: '10576', value: 'DC Films' },
  { id: '3', value: 'Pixar' },
  { id: '2', value: 'Walt Disney Pictures' },
  { id: '6626', value: 'Voltage Pictures' },
  { id: '12', value: 'New Line Cinema' },
  { id: '25', value: '20th Century Fox' },
  { id: '127928', value: '20th Century Studios' },
  { id: '33', value: 'Universal Pictures' },
  { id: '5', value: 'Columbia Pictures' },
  { id: '174', value: 'Warner Bros. Pictures' },
  { id: '17', value: 'Warner Bros. Entertainment' },
  { id: '4', value: 'Paramount' },
  { id: '7', value: 'DreamWorks Pictures' },
  { id: '521', value: 'DreamWorks Animation' },
  { id: '14', value: 'Miramax' },
  { id: '21', value: 'Metro-Goldwyn-Mayer' },
  { id: '35', value: 'Lions Gate Films' },
];

export const ProductionCompanies = () => {
  const { setCompany } = useFilterSetState();

  return <FormSelect options={companies} onChangeHandler={setCompany} />;
};
