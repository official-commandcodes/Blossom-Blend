const Select = ({ data, label, onChange }) => {
     return (
          <select
               className='w-full px-4 py-3 rounded-md text-[14px]'
               onChange={onChange}
          >
               <option value=''>{label}</option>
               {data.map((d, i) => (
                    <option key={i + 1} value={d.name}>
                         {d.name}
                    </option>
               ))}
          </select>
     );
};

export default Select;
