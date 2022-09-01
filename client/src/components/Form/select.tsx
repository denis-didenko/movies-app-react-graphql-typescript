import { memo } from 'react';

interface IProps<T> {
    options: T[] | undefined;
    onChangeHandler: (id: string) => void;
}

interface IOption {
    id: string;
    value: string;
}

const FormSelect = <Opt extends IOption>({ options, onChangeHandler }: IProps<Opt>) => {
    const changeSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.selectedOptions[0];
        const id = selectedOption.dataset.optionId as string;

        onChangeHandler(id);
    };

    return (
        <div className='form-select'>
            <select onChange={changeSelectHandler}>
                {options?.map(({ id, value }) => (
                    <option key={id} value={value} data-option-id={id}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default memo(FormSelect);
