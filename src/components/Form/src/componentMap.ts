import type { Component } from 'vue'
import type { ComponentType } from './types'
import { 
  ElAutocomplete,
  ElCascader,
  ElCheckbox,
  ElColorPicker,
  ElDatePicker,
  ElInput,
  ElInputNumber,
  ElRadio,
  ElRate,
  ElSelect,
  ElSelectV2,
  ElSlider,
  ElSwitch,
  ElTimePicker,
  ElTimeSelect,
  ElTransfer,
  ElUpload
} from 'element-plus'

const componentMap = new Map<ComponentType, Component>()

componentMap.set('el-autocomplete', ElAutocomplete)
componentMap.set('el-cascader', ElCascader)
componentMap.set('el-checkbox', ElCheckbox)
componentMap.set('el-color-picker', ElColorPicker)
componentMap.set('el-date-picker', ElDatePicker)
componentMap.set('el-input', ElInput)
componentMap.set('el-input-number', ElInputNumber)
componentMap.set('el-radio', ElRadio)
componentMap.set('el-rate', ElRate)
componentMap.set('el-select', ElSelect)
componentMap.set('el-select-v2', ElSelectV2)
componentMap.set('el-slider', ElSlider)
componentMap.set('el-switch', ElSwitch)
componentMap.set('el-time-picker', ElTimePicker)
componentMap.set('el-time-select', ElTimeSelect)
componentMap.set('el-transfer', ElTransfer)
componentMap.set('el-upload', ElUpload)

export { componentMap }
