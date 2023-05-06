import FormSelect from '@shared/components/Form/select';
import { useFilterSetState } from '@shared/hooks/useFilter';

const countries = [
  { id: '', value: 'Всi' },
  { id: 'en', value: 'США' },
  { id: 'tr', value: 'Туреччина' },
  { id: 'ru', value: 'Росiя' },
  { id: 'uk', value: 'Украiна' },
  { id: 'fr', value: 'Францiя' },
  { id: 'de', value: 'Нiмеччина' },
  { id: 'it', value: 'Італія' },
  { id: 'es', value: 'Іспанія' },
  { id: 'no', value: 'Норвегія' },
  { id: 'ko', value: 'Корея' },
  { id: 'ca', value: 'Канада' },
  { id: 'pl', value: 'Польща' },
  { id: 'nl', value: 'Нідерланди' },
  { id: 'jp', value: 'Японія' },
  { id: 'cn', value: 'Китай' },
  { id: 'in', value: 'Індія' },
  { id: 'br', value: 'Бразилія' },
  { id: 'mx', value: 'Мексика' },
];

const Countries = () => {
  const { setLanguage } = useFilterSetState();

  return <FormSelect options={countries} onChangeHandler={setLanguage} />;
};

export default Countries;
