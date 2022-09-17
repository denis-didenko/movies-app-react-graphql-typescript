import FormSelect from '../../../components/Form/select';
import { useFilter } from '../useFilter';

const providers = [
  { id: '', value: 'Всi' },
  { id: '8', value: 'Netflix' },
  { id: '350', value: 'Apple TV Plus' },
];

const Providers = () => {
  const { setProvider } = useFilter();

  return <FormSelect options={providers} onChangeHandler={setProvider} />;
};

export default Providers;
