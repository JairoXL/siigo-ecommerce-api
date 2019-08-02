export class CreateOrderDto {
  readonly status: string;
  readonly customerPlanId: object;
  readonly paymentMethodId: object;
  readonly couponId: object;
  readonly amount: object;
  readonly createdAt: string;
  readonly updatedAt: string;
}
