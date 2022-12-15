import { PulseLoader } from 'react-spinners';
import { BarLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
};

export const Loader = () => {
  return <PulseLoader size={5} height={10} color={'#ffffff80'} />;
};

export const LoaderBar = () => {
  return (
    <BarLoader
      speedMultiplier={1}
      width={100}
      height={4}
      color={'#ffffff80'}
      cssOverride={override}
    />
  );
};
