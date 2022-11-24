/***
 * 
 */


export interface Card{
    keyWord: string;
    image: string;
    audio?: string;
}


interface Deck{
    deckTitle: string;
    cards: Card[]; 
}