import { Subjects } from "./subjects";

export interface TicketUpdatedEvent {
  subject: Subjects.ticketUpdated;
  data: {
    id: string;
    title: string;
    version: number;
    price: number;
    userId: string;
  };
}
