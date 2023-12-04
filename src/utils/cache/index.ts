import { createStorage as create, type CreateStorageParams } from './storageCache'

export type Options = Partial<CreateStorageParams>;

const createOptions = (storage: Storage): Options => {
  return {
    storage,
    hasEncrypt: true
  }
}

export const createSessionStorage = (storage: Storage = sessionStorage) => {
  return create(createOptions(storage))
}

export const createLocalStorage = (storage: Storage = localStorage) => {
  return create(createOptions(storage))
}