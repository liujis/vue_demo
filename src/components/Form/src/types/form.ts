import type { ExtractPublicPropTypes } from 'vue'
import type { colProps, rowProps, formProps, formItemProps } from 'element-plus'
import type { componentMapType } from './componentMap'

export interface Schema<T> extends ExtractPublicPropTypes<typeof formItemProps>  {
  colProps?: ExtractPublicPropTypes<typeof colProps>
  component: T
  componentProps?: componentMapType[keyof componentMapType & T]
  slot?: string
  colSlot?: string
}

export interface BaseForm<T extends keyof componentMapType> extends ExtractPublicPropTypes<typeof formProps> {
  rowProps: ExtractPublicPropTypes<typeof rowProps>
  colProps: ExtractPublicPropTypes<typeof colProps>
  schemas: Schema<T>[]
}

export const inputProp: Schema<'el-input'> = {
  colProps: {
    span: 6
  },
  component: 'el-input',
  componentProps: {}
}
export const inputProp2: Schema<'el-input'> = {
  component: 'el-input',
  componentProps: {}
}
