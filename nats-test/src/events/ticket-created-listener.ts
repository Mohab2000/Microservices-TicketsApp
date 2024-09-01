import { Message } from "node-nats-streaming";
import { Listener } from "@tickets-mohab/common";
import { TicketCreatedEvent } from "@tickets-mohab/common";
import { Subjects } from "@tickets-mohab/common";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "payments-service";
  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("Event data! ", data);

    msg.ack();
  }
}
