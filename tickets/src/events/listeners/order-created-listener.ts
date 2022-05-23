import { Message } from "node-nats-streaming";
import {
  Listener,
  OrderCreatedEvent,
  Subjects,
} from "@redbaron_utk/common/build";
import { queueGroupName } from "./queue-group-name";

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent["data"], msg: Message) {}
}
