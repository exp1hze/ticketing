import { Subjects, Publisher, PaymentCreatedEvent } from '@ticketdemo/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
