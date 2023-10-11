const Filter = ({ filter }) => {
     return (
          <select className='text-[12px] outline-none px-2 py-1 rounded-sm bg-gray-100'>
               {filter.map((filter, i) => (
                    <option key={i + 1} value={filter.value}>
                         {filter.label}
                    </option>
               ))}
          </select>
     );
};

export default Filter;
