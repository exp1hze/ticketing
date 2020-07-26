import { Publisher, Subjects, TicketUpdatedEvent } from '@ticketdemo/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
