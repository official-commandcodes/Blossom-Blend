import { Country as CountryProvices } from 'country-and-province/dist/index';
import { Country, State, City } from 'country-state-city';

import Input from '../../ui/Input';
import ActionButton from '../../ui/ActionButton';
import Select from '../../ui/Select';
import { useEffect, useState } from 'react';

const CheckoutCustomer = () => {
     const [currentState, setCurrentState] = useState('');
     const [stateCode, setStateCode] = useState('');

     const states = new CountryProvices('NG').provinces.data;

     useEffect(() => {
          if (currentState) {
               const state = states.find((st) => st.name === currentState);

               setStateCode(state.code);
          }
     }, [states, currentState]);

     const cities = City.getCitiesOfState('NG', stateCode);

     const handleStateChange = (e) => {
          setCurrentState(e.target.value);
     };

     const handleCitiesChange = (e) => {
          console.log(e.target.value);
     };

     return (
          <div className='border-[1px] border-gray-300 p-3 rounded-md'>
               <h2 className='text-[20px] font-medium]'>1. Customer Address</h2>

               <form className='px-6 py-4 flex flex-col space-y-8 text-[24px]'>
                    <div className='flex space-x-4 w-full'>
                         <Input label='First Name' type='text' />
                         <Input label='Last Name' type='text' />
                    </div>

                    <div className='flex space-x-4 w-full'>
                         <Input label='Phone Number' type='number' />
                         <Input label='Additional Phone Number' type='number' />
                    </div>

                    <div>
                         <Input label='Delivery Address' type='text' />
                    </div>

                    <div className='flex space-x-4 w-full'>
                         <Select
                              data={states}
                              label='Please select State'
                              onChange={handleStateChange}
                         />
                         <Select
                              data={cities}
                              label='Please select City'
                              onChange={handleCitiesChange}
                         />
                    </div>

                    <ActionButton>Save</ActionButton>
               </form>
          </div>
     );
};

export default CheckoutCustomer;
