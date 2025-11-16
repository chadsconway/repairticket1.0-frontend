export const BASE_URL =
  ProcessingInstruction.env.NODE_ENV === "development"
    ? "http://192.168.0.187:5000"
    : "";

export const CUSTOMERS_URL = "/api/customers";
export const REPAIR_TICKETS_URL = "/api/repairtickets";
