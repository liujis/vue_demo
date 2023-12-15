import type { Component, ExtractPublicPropTypes } from 'vue'
import { 
  autocompleteProps,
  cascaderProps,
  checkboxProps,
  colorPickerProps,
  datePickerProps,
  inputProps,
  inputNumberProps,
  radioProps,
  rateProps,
  sliderProps,
  switchProps,
  transferProps,
} from 'element-plus'

export type componentMapType = {
  'el-autocomplete': ExtractPublicPropTypes<typeof autocompleteProps>,
  'el-cascader': ExtractPublicPropTypes<typeof cascaderProps>,
  'el-checkbox': ExtractPublicPropTypes<typeof checkboxProps>,
  'el-color-picker': ExtractPublicPropTypes<typeof colorPickerProps>,
  'el-date-picker': ExtractPublicPropTypes<typeof datePickerProps>,
  'el-input': ExtractPublicPropTypes<typeof inputProps>,
  'el-input-number': ExtractPublicPropTypes<typeof inputNumberProps>,
  'el-radio': ExtractPublicPropTypes<typeof radioProps>,
  'el-rate': ExtractPublicPropTypes<typeof rateProps>,
  'el-select': object,
  'el-select-v2': object,
  'el-slider': ExtractPublicPropTypes<typeof sliderProps>,
  'el-switch': ExtractPublicPropTypes<typeof switchProps>,
  'el-time-picker': object,
  'el-time-select': object,
  'el-transfer': ExtractPublicPropTypes<typeof transferProps>,
  'el-upload': object,
}