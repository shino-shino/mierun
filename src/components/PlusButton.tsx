import { Icon } from 'semantic-ui-react';

const PlusButton = () => {
  return (
    <div className='pl-1 flex w-24 h-24 justify-center items-center rounded-full border-8 border-yuzu bg-white'>
      <Icon name='plus' size='huge' color='yellow' inverted  className='outline-none'/>
    </div>
  );
}
export default PlusButton;