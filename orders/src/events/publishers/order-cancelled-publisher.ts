import {
  Subjects,
  Publisher,
  OrderCancelledEvent,
} from "@redbaron_utk/common/build";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
