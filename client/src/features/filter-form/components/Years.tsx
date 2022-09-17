import FormSelect from '../../../components/Form/select';
import { useFilter } from '../useFilter';

const years = [
  { id: '', value: 'Всi' },
  { id: '2023', value: '2023' },
  { id: '2022', value: '2022' },
  { id: '2021', value: '2021' },
  { id: '2020', value: '2020' },
  { id: '2019', value: '2019' },
  { id: '2018', value: '2018' },
  { id: '2017', value: '2017' },
  { id: '2016', value: '2016' },
  { id: '2015', value: '2015' },
  { id: '2014', value: '2014' },
  { id: '2013', value: '2013' },
  { id: '2012', value: '2012' },
  { id: '2011', value: '2011' },
  { id: '2010', value: '2010' },
];

const Years = () => {
  const { setYear } = useFilter();

  return <FormSelect options={years} onChangeHandler={setYear} />;
};

export default Years;
