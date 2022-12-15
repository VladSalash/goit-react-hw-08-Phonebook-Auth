import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from 'redux/contacts/filterSlice';
import contactSelectors from 'redux/contacts/contactSelectors';

import { Label, Input } from './Filter.style';

const Filter = () => {
  const filter = useSelector(contactSelectors.getFilter);
  const dispatch = useDispatch();

  const onFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onFilter} />
    </Label>
  );
};

export default Filter;
