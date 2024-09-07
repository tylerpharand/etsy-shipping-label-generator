import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config()

const envSchema = z.object({
  ETSY_SHOP_ID: z.string().transform((val) => parseInt(val, 10)),
  ETSY_API_KEY: z.string().min(1),
  ETSY_SHARED_SECRET: z.string().min(1),
})

// Parse and validate environment variables
const env = envSchema.safeParse(process.env)

if (!env.success) {
  console.error('Invalid environment variables:', env.error.format())
  process.exit(1)
}

export default {
  shopId: env.data.ETSY_SHOP_ID,
  etsyApiKey: env.data.ETSY_API_KEY,
  etsySharedSecret: env.data.ETSY_SHARED_SECRET,
}
