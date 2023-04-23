import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from '../../redux/slice';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onChangeFilter}
      />
    </label>
  );
};
