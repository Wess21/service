/** Тип для определения отступов.
 *  При редактировании значений данного типа
 *  не забудь изменить переменную $spaces в файле src/styles/variables.scss */
export type TSpace =
  | 2
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80;
export type TSpaceAdaptive = TSpace;
/** Размерность grid сетки
 *  не забудь изменить переменную $grid-cols в файле src/styles/variables.scss */
export type TGrid =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 12
  | 13
  | 14
  | 15;
export type TGridAdaptive = TGrid;
/**
 * Тип для использования у grid для определения начала/конца контейнера в сетке.
 * В виду особенностей расчета необходимо иметь возможность устанавливать значение на 1 больше чем количество ячеек
 * @link https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
 */
export type TGridSize = TGrid | 16;
export type TGridSizeAdaptive =TGridSize;

/** Тип для css align-items */
export type TAlignItems = "start" | "end" | "center";
export type TAlignItemsAdaptive = TAlignItems;

/** Тип для css justify-content */
export type TJustifyContent =
  | "start"
  | "center"
  | "end"
  | "spaceBetween"
  | "spaceAround";
export type TJustifyContentAdaptive =TJustifyContent;

/** Тип для определения внутренних отступов */
export type TPadding = TSpaceAdaptive;

/** Тип для определения внешних отступов */
export type TMargin = TSpaceAdaptive;

/** Свойства определения внешних отступов */
export interface IMarginProps {
  margin?: TMargin;
  marginTop?: TMargin;
  marginBottom?: TMargin;
  marginLeft?: TMargin;
  marginRight?: TMargin;
}

/** Тип для определения внешних отступов */
export interface IPaddingProps {
  padding?: TPadding;
  paddingTop?: TPadding;
  paddingBottom?: TPadding;
  paddingLeft?: TPadding;
  paddingRight?: TPadding;
}

export interface IAlignItemsProps {
  /** Cвойство для css align-items */
  alignItems?: TAlignItemsAdaptive;
}

export interface IJustifyContentProps {
  /** Cвойство для css justify-content */
  justifyContent?: TJustifyContentAdaptive;
}
