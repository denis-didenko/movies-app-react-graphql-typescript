import { FC } from 'react';
import FormSelect from '../../../../components/Form/select';

const providers = [
  { id: '', value: 'Всi' },
  { id: '8', value: 'Netflix' },
  { id: '350', value: 'Apple TV Plus' },
];

interface IProps {
  setProvider: (year: string) => void;
}

const Providers: FC<IProps> = ({ setProvider }) => (
  <FormSelect options={providers} onChangeHandler={setProvider} />
);

export default Providers;
