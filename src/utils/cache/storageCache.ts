import { type Encryption, EncryptionFactory, type EncryptionParams } from '@/utils/cipher'

export const cacheCipher = {
  key: '_11111000001111@', // 秘钥
  iv: '@11111000001111_', // 秘钥偏移量
}

export interface CreateStorageParams extends EncryptionParams {
  storage: Storage
  hasEncrypt: boolean // 是否加密
}

// 本地存储工具类
export const createStorage = ({
  storage = sessionStorage,
  hasEncrypt = true,
  key = cacheCipher.key,
  iv = cacheCipher.iv,
}: Partial<CreateStorageParams> = {}) => {
  if (hasEncrypt && [key.length, iv.length].some((item) => item !== 16)) {
    throw new Error('When hasEncrypt is true, the key or iv must be 16 bits!')
  }

  const persistEncryption: Encryption = EncryptionFactory.createAesEncryption({
    key: cacheCipher.key,
    iv: cacheCipher.iv,
  })
  /**
   * 缓存类
   * @class Cache
   * @example
   */
  const WebStorage = class WebStorage {
    private storage: Storage
    private encryption: Encryption
    private hasEncrypt: boolean
    
    constructor() {
      this.storage = storage
      this.encryption = persistEncryption
      this.hasEncrypt = hasEncrypt
    }

    private getKey(key: string) {
      return `${key}`.toUpperCase()
    }

    /**
     * 设置缓存
     * @param {string} key
     * @param {*} value
     */
    set(key: string, value: any) {
      const stringData = JSON.stringify(value)
      const stringifyValue = this.hasEncrypt ? this.encryption.encrypt(stringData) : stringData
      this.storage.setItem(this.getKey(key), stringifyValue)
    }

    /**
     * 获取缓存
     * @param {string} key
     * @param {*} def
     * @memberof Cache
     */
    get(key: string, def: any = null): any {
      const val = this.storage.getItem(this.getKey(key))
      if (!val) return def

      try {
        const decVal = this.hasEncrypt ? this.encryption.decrypt(val) : val
        return JSON.parse(decVal)
      } catch (e) {
        return def
      }
    }

    /**
     * 指定 key 删除缓存
     * @param {string} key
     */
    remove(key: string) {
      this.storage.removeItem(this.getKey(key))
    }

    /**
     * 删除此实例的所有缓存
     */
    clear(): void {
      this.storage.clear()
    }
  }
  // return new WebStorage()
  return WebStorage
}
