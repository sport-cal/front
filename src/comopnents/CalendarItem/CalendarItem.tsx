import React, { ReactElement, useMemo } from "react";
import { css } from "@emotion/react";
import { SportEvent } from "../../type/events";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
import { IoMdNotifications, IoMdNotificationsOff } from "react-icons/all";

dayjs.extend(utc);

export type CalendarItemProps = {
    event: SportEvent;
    notify: boolean;
};

export const CalendarItem: React.FC<CalendarItemProps> = ({ event, notify }): ReactElement => {
    const time = useMemo<string>(() => {
        const date = event.date;
        if (date === undefined) {
            return "TBD";
        } else {
            return date.local().format("HH:MM");
        }
    }, []);

    return (
        <article className="p-8 flex justify-between items-center">
            <img
                src={event.seriesLogo}
                alt="sports logo"
                className="bg-white rounded-full border border-gray-300 w-16 h-16"
                css={css`
                    object-fit: contain;
                `}
            />
            <div className="flex flex-col justify-center items-center mx-3">
                <h1 className="font-bold">{event.title}</h1>
                {event.session && <h2>{event.session}</h2>}
                <p className="m-1 px-2 font-extrabold rounded bg-blue-300">{time}</p>
            </div>
            <button className="h-8 w-8">
                {notify ? (
                    <IoMdNotifications className="w-full h-full" />
                ) : (
                    <IoMdNotificationsOff className="w-full h-full" />
                )}
            </button>
        </article>
    );
};
