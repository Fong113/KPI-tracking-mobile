import { Cascader } from 'antd';
import type { CascaderProps, GetProp } from 'antd';

type DefaultOptionType = GetProp<CascaderProps, 'options'>[number];

interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
}

interface CascaderInputProps {
  label: string;
  defaultvalue: string;
  options: Option[]; 
  width?: string;
}

const filter = (inputValue: string, path: DefaultOptionType[]) =>
  path.some(
    (option) => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1,
  );

const CascaderInput: React.FC<CascaderInputProps> = ({ label, options, defaultvalue, width }) => {
  return (
    <div className='flex flex-col gap-[5px] text-xl font-medium'>
      <div className=''>{label}</div>
      <Cascader
        className='w-full'
        size='large'
        style={{
          height: '46px',
          width: `${width}`,
        }}
        popupClassName='h-[80px]' 
        options={options}
        defaultValue={[defaultvalue]}
        showSearch={{ filter }}
      />
    </div>
  )
}

export default CascaderInput;