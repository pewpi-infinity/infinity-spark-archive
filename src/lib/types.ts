export type WebsiteTheme = 'cosmic' | 'minimal' | 'editorial' | 'technical' | 'vibrant'

export interface Collaborator {
  wallet: string
  role: 'owner' | 'editor' | 'viewer'
  addedAt: number
  addedBy: string
}

export interface Website {
  id: string
  tokenId: string
  title: string
  description: string
  query: string
  content: string
  url: string
  ownerWallet: string
  value: number
  createdAt: number
  lastModified: number
  pages: Page[]
  theme: WebsiteTheme
  collaborators: Collaborator[]
  isListedForSale: boolean
  salePrice?: number
}

export interface Page {
  id: string
  title: string
  content: string
  createdAt: number
  author: string
}

export interface Token {
  id: string
  websiteId: string
  websiteUrl: string
  ownerWallet: string
  value: number
  createdAt: number
  metadata: {
    title: string
    description: string
    query: string
  }
}

export interface Wallet {
  address: string
  balance: number
  tokens: Token[]
  createdAt: number
  infinityBalance: number
}

export interface MarketplaceListing {
  id: string
  website: Website
  token: Token
  price: number
  seller: string
  listedAt: number
}

export interface Transaction {
  id: string
  type: 'purchase' | 'sale' | 'listing' | 'delisting'
  websiteId: string
  from: string
  to: string
  amount: number
  timestamp: number
}

export type ViewMode = 'home' | 'website' | 'wallet' | 'marketplace' | 'builder'
