
export interface Card{
    keyWord: string;
    category: string;
    img: string;
    audio?: string;
}

export interface Deck{
    deckTitle: string;
    cards: Card[]; 
}