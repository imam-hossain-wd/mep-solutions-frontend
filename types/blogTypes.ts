export interface BlogSection {
  id: string
  title: string
  content: string[]
  image?: string
  list?: string[]
}

export interface BlogFAQ {
  question: string
  answer: string
}

export interface BlogCTA {
  title: string
  description: string
  buttonText: string
  link: string
}

export interface Blog {
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  coverImage: string
  readTime: string
  publishedAt: string
  author: {
    name: string
    role: string
    image: string
  }
  sections: BlogSection[]
  faqs: BlogFAQ[]
  cta: BlogCTA
}
