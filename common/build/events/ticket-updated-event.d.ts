import { Subjects } from "./subjects";
export interface TicketUpdatedEvent {
    subject: Subjects.ticketCreated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    };
}
