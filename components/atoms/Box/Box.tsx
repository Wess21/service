import React, { forwardRef, useEffect, useState } from 'react';
import {
  IAlignItemsProps,
  IJustifyContentProps,
  IMarginProps,
  IPaddingProps,
  TSpaceAdaptive,
  IDefaultComponentProps,
} from '../../../models';
import styled from './Box.module.scss';
import { classnames, getClasses } from '../../../utils';

export interface IBoxProps
  extends IDefaultComponentProps,
    IMarginProps,
    IPaddingProps,
    IAlignItemsProps,
    IJustifyContentProps {
  /** Направление базовой линии */
  column?: boolean;

  fullWidth?: boolean;

  noOverflow?: boolean;

  /** Свойство для добавление переносов элементов 'flex-wrap: wrap' */
  wrap?: boolean;

  /** Расстояние между дочерними элементами */
  gap?: TSpaceAdaptive;
}

/** Div контейнер для использования в flex верстке */
// eslint-disable-next-line react/display-name
export const Box = forwardRef<HTMLDivElement, IBoxProps>(
  (
    {
      className,
      children,
      column,
      alignItems = '',
      justifyContent = '',
      marginBottom = '',
      margin = '',
      marginLeft = '',
      marginRight = '',
      marginTop = '',
      padding = '',
      paddingBottom = '',
      paddingLeft = '',
      paddingRight = '',
      paddingTop = '',
      gap = '',
      wrap,
      fullWidth,
      noOverflow,
      ...rest
    },
    ref,
  ) => {
    /** @link https://nextjs.org/docs/messages/react-hydration-error */
    const preClasses = classnames(
      className,
      styled.root,
      ...getClasses(styled, {
        alignItems,
        justifyContent,
        margin,
        marginBottom,
        marginTop,
        marginLeft,
        marginRight,
        padding,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        gap,
      }),
      {
        [styled.flexDirection_column]: column,
        [styled.wrap]: wrap,
        [styled.fullWidth]: fullWidth,
        [styled.noOverflow]: noOverflow,
      },
    );

    const [classes, setClasses] = useState<string>('');

    useEffect(() => {
      setClasses(preClasses);
    }, [preClasses]);

    return (
      <div ref={ref} className={classes} {...rest}>
        {children}
      </div>
    );
  },
);
