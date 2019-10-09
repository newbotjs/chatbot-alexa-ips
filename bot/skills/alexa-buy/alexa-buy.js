import code from './alexa-buy.converse'
import formats from 'newbot-formats'

async function getProducts(converse) {
    const { handlerInput } = converse.data.session
    const locale = handlerInput.requestEnvelope.request.locale
    const monetizationClient = handlerInput.serviceClientFactory.getMonetizationServiceClient()
    const { inSkillProducts } = await monetizationClient.getInSkillProducts(locale)
    return inSkillProducts
}

export default {
    code,
    skills: {
        formats
    },
    functions: {
        async getProduct(name) {
            const products = await getProducts(this.converse)
            return products.find(p => p.referenceName == name)
        }
    },
    constants: {
        PRODUCT_NAME: 'my_product'
    }
}