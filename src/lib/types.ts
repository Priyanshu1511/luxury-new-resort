export interface FeedbackItem {
    id: string
    name: string
    email: string
    rating: number
    comment: string
    room_type: string
    approved: boolean
    created_at: string
  }
  
  export interface ContactMessage {
    id: string
    name: string
    email: string
    phone: string
    subject: string
    message: string
    read: boolean
    created_at: string
  }
  
