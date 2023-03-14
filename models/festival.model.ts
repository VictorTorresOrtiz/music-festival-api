import { Ticket } from "./ticket.model";

export interface Festival {
    id: number;
    name: string;
    city: string;
    date: Date;
    tickets: Ticket[];
  }
  
 
  
