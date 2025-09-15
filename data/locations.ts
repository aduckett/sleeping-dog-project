export type BowlStatus = "Installed" | "Planned";

export interface BowlLocation {
  id: string;
  name: string;
  city: string;
  coords?: { lat: number; lng: number };
  status: BowlStatus;
  notes?: string;
}

export const LOCATIONS: BowlLocation[] = [
  // sample rows — replace with yours
  { id: "1", name: "Papago Bark Park", city: "Tempe, AZ", status: "Planned", notes: "Pilot site" },
{ id: "2", name: "Eliot Ramada Loop", city: "Phoenix, AZ", status: "Planned", notes: "Pilot site" },
{ id: "3", name: "Pomelo Dog Park", city: "Phoenix, AZ", status: "Planned", notes: "Pilot site" },

{ id: "4", name: "Margaret T. Hance Dog Park", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "5", name: "Steele Indian School Dog Park", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "6", name: "Esteban Dog Park", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "7", name: "Washington Dog Park", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "8", name: "RJ Dog Park at Pecos Park", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "9", name: "Rose Mofford Sports Complex Dog Park", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "10", name: "Paradise Valley Dog Park", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "11", name: "Grovers Basin Dog Park", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "12", name: "Chaparral Off-Leash Area", city: "Scottsdale, AZ", status: "Planned", notes: "" },

{ id: "13", name: "Double Butte Loop (Papago Park)", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "14", name: "Papago Park Butte Loop", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "15", name: "Elliott Ramada Loop (Papago Park)", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "16", name: "Governor Hunt’s Tomb Path (Papago Park)", city: "Phoenix, AZ", status: "Planned", notes: "" },

{ id: "17", name: "Dreamy Draw Nature Trail", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "18", name: "Dreamy Draw Loop Trail", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "19", name: "Dreamy Draw Short Loop", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "20", name: "Quartz Ridge Trail #8A (Phoenix Mtns Preserve)", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "21", name: "Freedom Trail #302 (Piestewa base loop)", city: "Phoenix, AZ", status: "Planned", notes: "" },

{ id: "22", name: "Hayden Butte 'A' Mountain – Leonard Monti Trail", city: "Tempe, AZ", status: "Planned", notes: "" },
{ id: "23", name: "Hayden Butte Trail (A-Mountain)", city: "Tempe, AZ", status: "Planned", notes: "" },

{ id: "24", name: "Beverly Canyon Loop (South Mountain)", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "25", name: "Pima East Loop (South Mountain)", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "26", name: "Javelina Canyon Loop (South Mountain)", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "27", name: "Mormon Loop (South Mountain)", city: "Phoenix, AZ", status: "Planned", notes: "" },
{ id: "28", name: "National Trail – East Segment (on-leash sections)", city: "Phoenix, AZ", status: "Planned", notes: "" },

{ id: "29", name: "Mitchell Park Dog Park", city: "Tempe, AZ", status: "Planned", notes: "" },
{ id: "30", name: "Tempe Sports Complex Dog Park", city: "Tempe, AZ", status: "Planned", notes: "" }

];
