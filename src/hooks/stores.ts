import { useContext } from 'react'
import { IStores } from '@core/types/stores'
import { StoreContext } from '@/stores'

export function useStores(): IStores {
  return useContext(StoreContext)
}
