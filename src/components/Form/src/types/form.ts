import type { ColProps, RowProps, FormProps, FormItemProps } from 'element-plus'
import type { ComponentType } from './'

export interface Schema<T> extends FormItemProps  {
  colProps: ColProps
  component: T,
  componentProps: object,
  slot: string,
  colSlot :string,
}

export interface BaseForm<T extends ComponentType> extends FormProps {
  rowProps: RowProps
  colProps: ColProps
  schemas: Schema<T>[]
}
type a = number | string
type b = number & a
