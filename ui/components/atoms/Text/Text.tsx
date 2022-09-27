import React, { FC } from 'react';
import { IDefaultComponentProps } from '../../../models';
import { classnames, getClasses } from '../../../utils';
import { TTextAlign, TTextColor, TTextDecoration, TTextSize, TTextWeight } from './models';
import styled from './Text.module.scss';

export interface ITextProps extends IDefaultComponentProps {
  /** Размер шрифта. */
  size?: TTextSize;

  /** Преобразовывает текста в заглавные символы. */
  uppercase?: boolean;

  /** Начертание. */
  weight?: TTextWeight;

  /** Не дает тексты переситься на другую строку */
  nowrap?: boolean;

  /** Обрезает текст и добавляет многоточие. */
  ellipsis?: boolean;

  /** Цвет текста */
  color?: TTextColor;

  /** Подчеркивание текста */
  textDecoration?: TTextDecoration;

  /** Выравнивание текста */
  align?: TTextAlign;

  /** Тег для переопределения, если не подходит поведение по умолчанию для параграфа */
  tag?: string;

  /** Свойство для использования дефолтного отступа */
  withMargin?: boolean;
}

/** Компонент для вывода текста */
export const Text: FC<ITextProps> = ({
  children,
  textDecoration = '',
  className,
  size = 'primary',
  uppercase,
  weight = 'regular',
  color = '',
  ellipsis,
  nowrap,
  align = 'left',
  tag,
  withMargin,
  ...rest
}) => {
  const classes = classnames(
    className,
    styled.root,
    ...getClasses(styled, { align, weight, color, textDecoration, size }),
    {
      [styled.ellipsis]: ellipsis,
      [styled.uppercase]: uppercase,
      [styled.nowrap]: nowrap,
    },
  );

  tag = tag || 'p';
  const title = ellipsis && typeof children === 'string' ? children : undefined;

  switch (size) {
    case 'h1':
      tag = 'h1';
      break;
    case 'h2':
      tag = 'h2';
      break;
    case 'h3':
      tag = 'h3';
      break;
    case 'h4':
      tag = 'h4';
      break;
    case 'h5':
      tag = 'h5';
      break;
    case 'wysiwyg':
      // Вывод данных из редактора
      // Проблематика в том, что там нет классов у заголовков и абзацев
      tag = 'div';
      break;
  }

  return React.createElement(tag, { className: classes, title, ...rest }, children);
};
