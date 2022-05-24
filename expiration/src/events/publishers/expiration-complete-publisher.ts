import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@redbaron_utk/common/build";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
