export interface RootObject {
  id: number;
  name: string;
  username: string;
  routerLink: string;
  icon: string;
  expi: string;
  workLinks?: Link[];
  website?: string;
}

export interface Link {
  link: string;
  name: string;
}
