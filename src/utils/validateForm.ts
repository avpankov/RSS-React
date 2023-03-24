import { RefObject } from 'react';
import { IValidationFields } from 'interfaces';

export function validateForm(newProduct: IValidationFields) {
  const arr = [];
  arr.push(validateInput(newProduct.title));
  arr.push(validateInput(newProduct.brand));
  arr.push(validateCategorySelect(newProduct.category));
  arr.push(validateInput(newProduct.price));
  arr.push(validateInput(newProduct.discountPercentage));
  arr.push(validateInput(newProduct.stock));
  arr.push(validateInput(newProduct.date));
  arr.push(validateInput(newProduct.thumbnail));
  return arr.every((el) => el === true) ? true : false;
}

function validateInput(input: RefObject<HTMLInputElement>) {
  const value = input.current?.value;
  const message = input.current?.parentElement?.querySelector('.absolute');
  if (value !== '') {
    input.current?.classList.add('border-slate-200');
    input.current?.classList.remove('border-2', 'border-red-500');
    message?.classList.remove('visible');
    message?.classList.add('invisible');
    return true;
  } else {
    if (input.current?.type !== 'file') {
      input.current?.classList.remove('border-slate-200');
      input.current?.classList.add('border-2', 'border-red-500');
    }
    message?.classList.remove('invisible');
    message?.classList.add('visible');
    return false;
  }
}

function validateCategorySelect(select: RefObject<HTMLSelectElement>) {
  const value = select.current?.value;
  const message = select.current?.parentElement?.querySelector('.absolute');
  if (value !== 'defaultValue') {
    select.current?.classList.add('border-slate-200');
    select.current?.classList.remove('border-2', 'border-red-500');
    message?.classList.remove('visible');
    message?.classList.add('invisible');
    return true;
  } else {
    select.current?.classList.remove('border-slate-200');
    select.current?.classList.add('border-2', 'border-red-500');
    message?.classList.remove('invisible');
    message?.classList.add('visible');
    return false;
  }
}
