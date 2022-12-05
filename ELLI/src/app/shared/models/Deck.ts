
export interface Card{
    keyWord: string;
    image: string;
    audio?: string;
}

export interface Deck{
    deckTitle: string;
    cards: Card[]; 
}