/** Функция возвращающая название класса для определенного свойства по его значению
 * @param style - набор классов из файла стилей
 * @param prefix - префикс свойство, которое используется для именования стилей (как правило это название свойства)
 * @param value - значение свойства
 * @returns название класса
 *
 * @example
 * import styled from './index.scss'
 * const className = getClass(styled, 'size', size);
 */
export const getClass = (
  style: { [x: string]: string },
  prefix: string,
  value?: string | number
) => {
  return value && style[`${prefix}_${value}`];
};

/**
 * Функция возвращает массив классов из таблицы стилей компонента.
 * @param style - набор классов из файла стилей
 * @param prefixes - объект содержащий пару, где key - название свойства, value - значение свойства
 * @param breakpoint - текущее значение брейкпоинта
 *
 * Основным ключевым параметром является `prefixes`.
 * Т.к. при разработке мы используем одинаковые название свойства компонента и название класса, то мы можем просто передовать в функцию такие значение
 *
 * @example
 * getClasses(styled,
 *    size
 *    view,
 *    color,
 * });
 *
 * @description В результате `getClasses` найдет классы в `style` Объекте соответствующие `size_{значение size}` и т.д.
 * Мы также можем использовать фильтрацию классов в зависимости от брейкпоинта. Для любого ключа передайте значение в виде объекта типа `Partial<TQueries<string | number>>`
 * !!! В текущей реализации значение для `TAB` если они отсутствуют, берутся у значения `DESKTOP`
 */
export const getClasses = (
  style: { [x: string]: string },
  prefixes: { [prefix: string]: string | number }
) => {
  return Object.entries(prefixes)
    .map(([prefix, value]) => {
      if (typeof value === "string" || typeof value === "number") {
        return style[`${prefix}_${value}`];
      }
    })
    .filter((c) => c);
};
