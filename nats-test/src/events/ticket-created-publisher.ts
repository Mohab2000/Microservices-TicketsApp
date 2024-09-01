import { Publisher } from "@tickets-mohab/common";
import { Subjects } from "@tickets-mohab/common";
import { TicketCreatedEvent } from "@tickets-mohab/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
