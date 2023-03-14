import { Ticket } from "./ticket.model";

export interface User {
    id: number;
    name: string;
    role: string; // "admin" or "user"
    tickets?: Ticket[];
  }