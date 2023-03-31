import { twMerge } from 'tailwind-merge';
import { type ClassNameValue } from 'tailwind-merge/dist/lib/tw-join';

const cn = (...inputs: ClassNameValue[]) => twMerge(inputs);

export default cn;
