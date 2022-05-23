import { Listener } from "./base-listener";
import { Subjects } from "./subjects";

export interface TicketCreatedEvent {
  subject: Subjects.ticketCreated;
  data: {
    id: string;
    title: string;
    version: number;
    price: number;
    userId: string;
  };
}
