export class CreateOrderCommand {
  constructor(
    public readonly orderId: string,
    public readonly productId: string,
    public readonly amount: number,
    public readonly state: string,
  ) {}
}
