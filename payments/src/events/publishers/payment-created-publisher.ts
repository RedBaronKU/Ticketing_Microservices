import {
  Subjects,
  Publisher,
  PaymentCreatedEvent,
} from "@redbaron_utk/common/build";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
