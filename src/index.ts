import config from './config'
import { getPendingOrders } from './helpers'

const main = async (): Promise<void> => {
  try {
    const pendingOrders = await getPendingOrders(config.shopId)

    // TODO: Format orders in PDF
    console.log('pendingOrders')
    console.log(pendingOrders)
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('An error occurred:', err.message)
    }

    process.exit(1)
  }
}

main()
