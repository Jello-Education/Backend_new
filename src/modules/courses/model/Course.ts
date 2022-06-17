import { v4 as uuidV4 } from "uuid";

class Course {
  id?: string;
  name: string;
  description: string;
  author: string;
  url: string;
  isPremium: boolean;
  classification: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Course };
