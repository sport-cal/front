import { Dayjs } from "dayjs";

export type Location = {
    country: string; // e.g. "日本"
    name: string; // e.g. "鈴鹿サーキット"
    googleMapUrl: string | undefined; // url
};

export type SportEvent = {
    genre: string; // e.g. "Motorsport"
    seriesName: string; // e.g. "Formula 1"
    seriesLogo: string | undefined; // logo url
    title: string; // e.g. "Japanese Grand Prix"
    session: string | undefined; // e.g. "Free Practice 1", "予選", "決勝"
    location: Location;
    date: Dayjs | undefined; // undefined is TBD schedule. e.g. "2021-10-10 12:00:00 UTC". convert to local time in render.
};

export type SportEvents = SportEvent[];
