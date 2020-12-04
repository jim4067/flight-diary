export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';

export type Visibility = 'great' | 'good' | 'ok' | 'poort';

export interface diary_entry {
    id: number,
    date: string,
    weather: Weather,
    visibilty: Visibility,
    comment: string
}