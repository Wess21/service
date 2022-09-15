import React from "react";

export type AnyType = any;

/**
 * Свойство CSS-стилей.
 */
export interface IStylesProps {
  /** CSS-стили. */
  style?: React.CSSProperties;
}

/**
 * Свойство CSS-класса.
 */
export interface IClassNameProps {
  /** CSS-класс. */
  className?: string;
}

/** Интерфейс с стилями и классами */
export interface IWithStylesProps extends IClassNameProps, IStylesProps {}

export interface IComponentChildrenProps {
  children?: React.ReactNode;
}

/** Дефолтный интерфейс с стандартными для компонента свойствами */
export interface IDefaultComponentProps
  extends IWithStylesProps,
    IComponentChildrenProps {}

export interface IRefProps {
  ref: React.Ref<AnyType>;
}
