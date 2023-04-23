import { Dayjs } from "dayjs";

export type Location = {
    country: string; // e.g. "日本"
    name: string; // e.g. "鈴鹿サーキット"
    googleMapUrl: string | undefined; // url
};

export type Event = {
    genre: string; // e.g. "Motorsport"
    seriesLogo: string | undefined; // logo url
    seriesName: string; // e.g. "Formula 1"
    title: string; // e.g. "Japanese Grand Prix"
    formalName: string; // e.g. "Honda Japanese Grand Prix 2021" normally, `${titleSponsor} ${title}`
    session: string; // e.g. "Free Practice 1", "予選", "決勝"
    location: Location;
    date: Dayjs | undefined; // undefined is TBD schedule. e.g. "2021-10-10 12:00:00 UTC". convert to local time in render.
};
