import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

import { Label, Input } from './Filter.style';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onFilter} />
    </Label>
  );
};

export default Filter;
