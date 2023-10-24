import { TailSpin } from 'react-loader-spinner';

const Spinner = ({ h, w }) => {
     return (
          <TailSpin
               height={h}
               width={w}
               color='orange'
               ariaLabel='tail-spin-loading'
               radius='1'
               visible={true}
          />
     );
};

export default Spinner;
