import { Listener } from "./base-listener";
import { Message } from "node-nats-streaming";
import { Subjects } from "./subjects";
import { TicketCreatedEvent } from "./ticket-created-event";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject: Subjects.ticketCreated = Subjects.ticketCreated;
  queueGroupName = "payments-service";

  onMessage(data: any, msg: Message) {
    console.log("Event data!", data);
    msg.ack();
  }
}
