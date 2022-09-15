import React, { forwardRef, useEffect, useState } from 'react';
import {
  IAlignItemsProps,
  IDefaultComponentProps,
  IJustifyContentProps,
  TGridAdaptive,
  TGridSizeAdaptive,
  TSpace,
} from '../../../models';
import { classnames, getClasses } from '../../../utils';

import styled from './Grid.module.scss';

interface IProps extends IDefaultComponentProps, IAlignItemsProps, IJustifyContentProps {
  /**
   * Отступы между элементами.
   * Внимание!!! При наличии значения в свойстве columns, gap будет всегда 16px в соответствии с правилами дизайн системы
   */
  gap?: TSpace;

  /** Количество колонок для каждого из размеров экрана. */
  columns?: TGridAdaptive;

  /** Количество строк для каждого из размеров экрана. */
  rows?: TGridAdaptive;

  /** Начальная позиция контейнера */
  colStart?: TGridSizeAdaptive;

  /** Конечная позиция контейнера */
  colEnd?: TGridSizeAdaptive;

  /** Начальная позиция контейнера */
  rowStart?: TGridSizeAdaptive;

  /** Конечная позиция контейнера */
  rowEnd?: TGridSizeAdaptive;

  /** ширина 100% */
  fullWidth?: boolean;
}

/** Компонент для создания grid сетки */
// eslint-disable-next-line react/display-name
export const Grid = forwardRef<HTMLDivElement, IProps>(
  (
    {
      children,
      className,
      fullWidth,
      style,
      columns = '',
      gap = '',
      colStart = '',
      colEnd = '',
      rowStart = '',
      rowEnd = '',
      rows = '',
      alignItems = '',
      justifyContent = '',
    },
    ref,
  ) => {
    /** @link https://nextjs.org/docs/messages/react-hydration-error */
    const preClasses = classnames(
      styled.root,
      className,
      ...getClasses(styled, { gap, columns, colStart, colEnd, rows, rowStart, rowEnd, alignItems, justifyContent }),
      {
        [styled.fullWidth]: fullWidth,
      },
    );

    const [classes, setClasses] = useState<string>('');

    useEffect(() => {
      setClasses(preClasses);
    }, [preClasses]);

    return (
      <div ref={ref} className={classes} style={style}>
        {children}
      </div>
    );
  },
);
