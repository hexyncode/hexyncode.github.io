export type TicketStatus = 'Open' | 'In Progress' | 'Closed';
export type TicketPriority = 'High' | 'Medium' | 'Low';

export interface Message {
  id: string;
  author: string;
  avatarUrl: string;
  text: string;
  timestamp: string;
  type: 'public' | 'internal';
}

export interface Ticket {
  id: string;
  subject: string;
  customer: {
    name: string;
    avatarUrl: string;
  };
  assignedTo: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: string;
  lastUpdate: string;
  conversation: Message[];
}