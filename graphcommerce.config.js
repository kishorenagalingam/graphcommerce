// @ts-check

/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */
const config = {
  hygraphEndpoint: 'https://api-ap-northeast-1.hygraph.com/v2/clqas34hw0a1201t78za29czk/master',
  magentoEndpoint: 'https://backend.reachdigital.dev/graphql',
  canonicalBaseUrl: 'https://graphcommerce.vercel.app',
  storefront: [{ locale: 'en', magentoStoreCode: 'en_US' }],
}

module.exports = config
