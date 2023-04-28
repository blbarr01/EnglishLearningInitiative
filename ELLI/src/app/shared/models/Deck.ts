
export interface Card{
    category: string
    term: string;
    imageUrl: string;
}

export interface Deck{
    deckTitle: string;
    cards: Card[]; 
}