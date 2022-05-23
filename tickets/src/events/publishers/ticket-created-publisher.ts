import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@redbaron_utk/common/build";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.ticketCreated;
}
