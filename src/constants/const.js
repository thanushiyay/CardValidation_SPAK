export const DEFAULT_CVC_LENGTH = 3
export const DEFAULT_ZIP_LENGTH = 5
export const DEFAULT_CARD_FORMAT = /(\d{1,4})/g

export const CARD_TYPES = {
    AMEX: {
    name: 'Amex',
    color: 'green',
    imageUrl:'spake/src/assets/2.jpeg'
  },
  VISA: {
    name: 'Visa',
    color: 'lime',
    imageUrl:'spake/src/assets/7.jpeg'
  },
  MAESTRO: {
    name: 'Maestro',
    color: 'yellow',
    imageUrl:'spake/src/assets/15.jpeg'
  },
  MASTERCARD: {
    name: 'Mastercard',
    color: 'lightblue',
    imageUrl:'spake/src/assets/25.jpeg'
  },
  RUPAY: {
    name: 'RuPay',
    color: 'lightblue',
    imageUrl:'spake/src/assets/14.jpeg'
  },
  diners: {
    name: 'Diners',
    color: 'orange'
  },
  discover: {
    name: 'Discover',
    color: 'purple'
  },
  jcb: {
    name: 'Jcb',
    color: 'red'
  },
  jcb15: {
    name: 'Jcb',
    color: 'red'
  },
 
  unionpay: {
    name: 'Unipay',
    color: 'cyan'
  }
}