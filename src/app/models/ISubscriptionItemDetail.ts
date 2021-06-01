export interface SubscriptionItem {
  listId: Number;
  itemId: Number;
  serviceName: string;
  addDate: Date;
  dueDate: Date;
  price: Number;
  isArchived: Boolean;
  subscriptionType: string;
  recurringOption: string;
  reminderMethod: string;
}
