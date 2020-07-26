import { Publisher, Subjects, TicketCreatedEvent } from '@ticketdemo/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
