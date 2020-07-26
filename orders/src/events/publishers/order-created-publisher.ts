import { Publisher, OrderCreatedEvent, Subjects } from '@ticketdemo/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
