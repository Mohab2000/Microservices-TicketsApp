import { Publisher, Subjects, TicketCreatedEvent } from "@tickets-mohab/common";


export class TicketCreatedPublisher extends Publisher <TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
    
}

