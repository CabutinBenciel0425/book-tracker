export type BookStatus = "completed" | "reading" | "to-read";

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  status: BookStatus;
  rating: number; // 1-5;
  isFavorite: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
}
