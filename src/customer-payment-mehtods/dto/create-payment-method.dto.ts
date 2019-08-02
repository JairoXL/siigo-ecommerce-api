export class CreatePaymentMethodDto {
  readonly customer: string;
  readonly ccToken: string;
  readonly franchise: string;
  readonly orders: object;
}
