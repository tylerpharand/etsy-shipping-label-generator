import { IShopReceipt } from 'etsy-ts'
import { etsy } from './etsy'

export const getPendingOrders = async (
  shopId: number,
): Promise<IShopReceipt[]> => {
  const shopReceipts = await etsy.ShopReceipt.getShopReceipts({
    shopId,
  })

  if (shopReceipts.status !== 200) {
    throw new Error(`Failed to get shop receipts: ${shopReceipts.statusText}`)
  }

  return (
    shopReceipts.data.results?.filter(
      (receipt) => receipt.is_paid && !receipt.is_shipped,
    ) ?? []
  )
}
