/* eslint-disable */
import { useSearchParams } from 'react-router-dom';

const Filter = ({ options, filterField }) => {
     const [searchParams, setSearchParams] = useSearchParams();

     function handleChange(e) {
          searchParams.set([filterField], e.target.value);
          searchParams.set('page', 1);
          setSearchParams(searchParams);
     }

     return (
          <select
               onChange={handleChange}
               className='text-[12px] outline-none px-2 py-1 rounded-sm bg-gray-100'
          >
               {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                         {label}
                    </option>
               ))}
          </select>
     );
};

export default Filter;
