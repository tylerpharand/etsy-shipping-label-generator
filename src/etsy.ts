import { Etsy } from 'etsy-ts'
import config from './config'
import { SecurityDataStorage } from './security-data-storage'

export const etsy = new Etsy({
  apiKey: config.etsyApiKey,
  securityDataStorage: new SecurityDataStorage(),
})
