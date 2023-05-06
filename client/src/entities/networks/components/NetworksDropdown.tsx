import FormSelect from '@shared/components/Form/select';
import { useFilterSetState } from '@shared/hooks/useFilter';

const networks = [
  { id: '', value: 'Всi' },
  { id: '213', value: 'Netflix' },
  { id: '49', value: 'HBO' },
  { id: '2552', value: 'Apple TV+' },
  { id: '2739', value: 'Disney+' },
  { id: '1024', value: 'Amazon' },
  { id: '2493', value: 'Start' },
  { id: '806', value: 'STS' },
  { id: '1191', value: 'TNT' },
  { id: '19', value: 'FOX' },
  { id: '67', value: 'Showtime' },
  { id: '4330', value: 'Paramount+' },
  { id: '2', value: 'ABC' },
  { id: '174', value: 'AMC' },
  { id: '453', value: 'Hulu' },
  { id: '43', value: 'National Geographic' },
  { id: '64', value: 'Discovery' },
  { id: '41', value: 'TNT' },
];

export const Networks = () => {
  const { setNetwork } = useFilterSetState();

  return <FormSelect options={networks} onChangeHandler={setNetwork} />;
};
