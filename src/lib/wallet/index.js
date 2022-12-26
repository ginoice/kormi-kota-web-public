import { ethers } from "ethers"
import abi from './abi/AnimalCharity.json'

const netURL = 'https://bsc-dataseed3.binance.org'
const chainId = '0x38'
const address = '0x18cbBe41E80474a8C91522689Cf8b97dd7FeDC06'

const gasLimit = 300_000

class Wallet {

  constructor () {
    this.account = null

    this.provider = new ethers.providers.JsonRpcProvider(netURL)
    this.contract = new ethers.Contract(address, abi.abi, this.provider)
    this.web3Provider = null

    this.singer = null
  }


  async connectWallet () {
    const ethereum = window.ethereum

    if (typeof ethereum !== "undefined") {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      this.web3Provider = new ethers.providers.Web3Provider(ethereum)
      this.account = accounts[0]
      this.singer = await this.web3Provider.getSigner()

      if ( ethereum.chainId == chainId ) {
        return {active: true, provider: this.account, activeModal: false}
      }
      else {
        try {
          await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: chainId}],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            try {
              await ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: chainId,
                  rpcUrls: [netURL],
                  chainName: "Binance Mainnet",
                  nativeCurrency: {
                    name: "BNB",
                    symbol: "BNB",
                    decimals: 18,
                  }
                }],
              })
            } catch (addError) {
              console.log(addError)
           }
          }
        }
        return {active: true, provider: this.account, activeModal: false}
      }
    }
    else if (typeof ethereum == "undefined") window.open(`https://metamask.app.link/dapp/${window.location.host}`)
  }

  async getBalanceContract () {
    return ethers.utils.formatEther(await this.provider.getBalance(address))
  }

  async getTokenLevelPrice () {
    let priceCode = {
      conventional: await this.contract.tokenLevelPrice(1) .then(price => { return ethers.utils.formatEther(price)} ),
      conventionalMint: await this.contract.amountMinted(1) .then(mint => {return mint}),
      conventionalTotal: await this.contract.amountTotal(1) .then(total => {return total}),

      rare: await this.contract.tokenLevelPrice(3) .then(price => { return ethers.utils.formatEther(price) }),
      rareMint: await this.contract.amountMinted(3) .then(mint => {return mint}),
      rareTotal: await this.contract.amountTotal(3) .then(total => {return total}),

      elite: await this.contract.tokenLevelPrice(2) .then(price => { return ethers.utils.formatEther(price) }),
      eliteMint: await this.contract.amountMinted(2) .then(mint => {return mint}),
      eliteTotal: await this.contract.amountTotal(2) .then(total => {return total}),
    }

    return priceCode
  }

  async buyToken (data) {
    await this.contract.connect(this.web3Provider.getUncheckedSigner())
              .buyToken(this.account, 1, data.name, {
                gasLimit: ethers.utils.hexlify(gasLimit),
                value: ethers.utils.parseEther(String(data.price)).toHexString()
              })
  }

  async tokensOwner () {
    return await this.contract.tokensOfOwner(this.account)
          .then(tokenIds => {return tokenIds})
  }

  async tokenURI(tokenId) {
    return await this.contract.tokenURI(tokenId)
          .then(res => {return JSON.stringify(res)})
  }

  async tokenLevel(tokenId) {
    return await this.contract.tokenLevel(tokenId)
          .then(res => res)
  }

  async tokenTokenIdInLevel(tokenId) {
    return await this.contract.tokenTokenIdInLevel(tokenId)
          .then(res => res)
  }

  async getMyPresent(tokenId, intent_id) {
    return this.contract.connect(this.web3Provider.getUncheckedSigner())
            .getMyPresent(tokenId, intent_id, {
              gasLimit: ethers.utils.hexlify(gasLimit),
            })
  }
}

export const wallet = new Wallet()
