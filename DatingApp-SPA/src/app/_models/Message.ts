export interface Message {
  id: number;
  senderId: number;
  senderKnownAs: string;
  senderPhotoUrl: string;
  recepientId: number;
  recepientKnownAs: string;
  recepientUrl: string;
  recepientPhotoUrl: string;
  content: string;
  isRead: boolean;
  dateRead: Date;
  messageSent: Date;
}
