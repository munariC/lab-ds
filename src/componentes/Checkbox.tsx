//import { clsx } from 'clsx';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {Check} from 'phosphor-react'

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
   return (
        <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-900 rounded">
         <CheckboxPrimitive.Checkbox asChild>
            <Check weight='bold' className='w-5 h-5 text-cyan-300'/>
         </CheckboxPrimitive.Checkbox>
        </CheckboxPrimitive.Root>
       
   )
}