
export interface Card{
    category: string
    term: string;
    image: string;
}

export interface Deck{
    deckTitle: string;
    cards: Card[]; 
}