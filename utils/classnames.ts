import classNames from 'classnames';
import { AnyType } from '../models';

/**
 * Class dictionary interface.
 */
export interface IClassDictionary extends Record<string, boolean | undefined | null> {}

// This is the only way I found to break circular references between IClassArray and ClassValue
// https://github.com/Microsoft/TypeScript/issues/3496#issuecomment-128553540
/**
 * Class array interface.
 */
export interface IClassArray extends Array<TClassValue> {}

export type TClassValue = string | number | IClassDictionary | IClassArray | undefined | null | false;

function sanitize(original: IClassDictionary): IClassDictionary {
  const sanitized: IClassDictionary = {};

  // eslint-disable-next-line
  for (let prop in original) {
    if (original.hasOwnProperty(prop) && prop !== 'undefined') {
      sanitized[prop] = original[prop];
    }
  }

  return sanitized;
}

function isIClassDictionary(arg: AnyType): arg is IClassDictionary {
  return typeof arg === 'object';
}

/** Немного доработанная функция classnames знаменитой библиотеки classname для работы с классами */
export function classnames(...classes: TClassValue[]): string {
  const args = classes.map((arg) => {
    if (isIClassDictionary(arg)) {
      return sanitize(arg);
    } else {
      return arg;
    }
  });
  return classNames(...args);
}
