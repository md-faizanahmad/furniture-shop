export interface InteriorScene {
  id: string;
  title: string;
  description: string;
  image: string;
  theme: string;
  products: string[];
}

export interface InteriorClientUIProps {
  scenes: InteriorScene[];
}
