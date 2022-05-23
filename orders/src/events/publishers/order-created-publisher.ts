import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@redbaron_utk/common/build";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
