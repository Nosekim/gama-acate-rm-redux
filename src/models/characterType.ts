//{"__typename": "Character", "id": "1", "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg", "name": "Rick Sanchez", "origin": {"__typename": "Location", "name": "Earth (C-137)"}, "species": "Human", "status": "Alive"}

export interface Character {
  __typename: string;
  id: string;
  image: string;
  name: string;
  origin: {
    __typename: string;
    name: string;
  };
  species: string;
  status: string;
}

export interface IBookmarks {
  bookmarks: string[];
  status: "idle" | "loading" | "error";
}

export interface IBookmarksState {
  bookmark: {
    bookmarks: string[];
    status: "idle" | "loading" | "error";
  };
}
