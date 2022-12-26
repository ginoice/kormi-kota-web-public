import { wallet } from '@/lib/wallet/index'
import { postData, getData } from '@/lib/api/axios'

export default {
  actions: {
    async tokensOfOwner (ctx) {

      const userTokenIds = await wallet.tokensOwner()
      userTokenIds.forEach(async (idToken, id) => {

        let tokenURI = await wallet.tokenURI(idToken)
        let tokenLevel = await wallet.tokenLevel(idToken)
        let tokenTokenIdInLevel = await wallet.tokenTokenIdInLevel(idToken)
        let metaData = await fetch(tokenURI.replace(/^.|.$/g,"")).then(res => res.json())

        let data = {nft_ids: [{
          category_id: tokenLevel,
          nft_id: tokenTokenIdInLevel
        }]}

        let presents = await postData('gifts', data)

        const activeBtn = await getData(tokenLevel, tokenTokenIdInLevel).then(res => {
          let status = null

          if (res.status === 'pending') status = true
          else if(res.status === 'Intent request not found') status = true
          else status = false
          console.log(res.status)
          console.log(status)

          return status
        })

        const response = {
          id: id,
          activeBtn: activeBtn,
          idToken: idToken,
          tokenLevel: tokenLevel,
          tokenTokenIdInLevel: tokenTokenIdInLevel,
          tokenURI: tokenURI.replace(/^.|.$/g,""),
          present: presents.data[0].gifts,
          metadata: metaData
        }

        ctx.commit('setTokenUser', response)
        ctx.commit('setMetaDataUserToken', response)
      })
    },

    async pushPhone(ctx, fetch) {
      const intentId = await postData('gifts/redeem', {
        category_id: fetch.category_id,
        nft_id: fetch.nft_id ,
        phone: fetch.phone
      }).then(res => res)
        .catch(() => {
          ctx.commit('setSatus', {
            disabled: true,
            description: 'Номер указен некорректно'
          })
        })


      if (intentId){
        console.log(fetch.nft_id, intentId.intent_id)
        await wallet.getMyPresent(fetch.idToken, intentId.intent_id)
              .then(() => {
                ctx.commit('setSuccess', true)
              })
              .catch(() => {
                ctx.commit('setSuccess', false)
              })
      }
    }
  },

  mutations: {
    setTokenUser(state, data) {
      state.tokenData[data.id] = data
    },

    setMetaDataUserToken(state, data) {
      Array.from(state.tokenData[data.id].metadata.attributes).forEach((attributesItem, attributesIndex, attributesItemArray) => {
        Array.from(data.present).forEach(presentItem => {
          if (attributesItem.trait_type === presentItem.forAttributeName) {
            attributesItemArray[attributesIndex]['present'] = presentItem.forAttributeName
            attributesItemArray[attributesIndex]['presentName'] = presentItem.name
            attributesItemArray[attributesIndex]['presentBoolean'] = true
          }
        })
      })
    },

    setSatus(state, data) {
      state.valid.disabled = data.disabled
      state.valid.description = data.description
    },

    setSuccess(state, data) {
      state.success = data
    }
  },

  state: {
    tokenData: [],
    tokenId: null,
    valid: {
      disabled: true,
      description: ''
    },
    success: false
  },
  
  getters: {
    getTokenData(state) {
      return state.tokenData
    },
    getValid(state) {
      return state.valid
    },
    getSuccess(state) {
      return state.success
    }
  }
}
