import type { FC } from 'react'
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

interface ItemInfo {
  name?: string;
  description?: string;
  itemClass?: string;
  Weight?: number;
  stats?: {
    str: number;
    agi: number;
    vit: number;
    int: number;
    dex: number;
    luk: number;
    atk: number;
    matk: number;
    def: number;
    mdef: number;
    hit: number;
    flee: number;
    crit: number;
    aspd: number;
    hp: number;
    sp: number;
  } | null;
}

const CraftableItemsInfo: FC<ItemInfo> = ({ stats, name, description, Weight, itemClass }) => {
  return (<Alert>
    <AlertTitle className='text-sm text-yellow-300'>{name}</AlertTitle>
    <AlertDescription>
      {description}
      <ul className='mt-5 uppercase text-gray-400'>
        {stats && Object.entries(stats).map(([key, value]) => {
          if (value && key !== 'id') {
            return <li key={key}>{key}: {value}</li>
          }
        })}
      </ul>
      <div className='text-gray-400'>
        <p>Weight: {Weight}</p>
        <p>Class: {itemClass}</p>
      </div>
    </AlertDescription>
  </Alert>)
}

export default CraftableItemsInfo;