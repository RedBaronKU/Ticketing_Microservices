import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@redbaron_utk/common/build";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
