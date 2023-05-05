import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CalendarItem, CalendarItemProps } from "./CalendarItem";
import dayjs from "dayjs";
import F1logo from "../../assets/logo/F1.png";

const meta: Meta<typeof CalendarItem> = {
    title: "CalendarItem",
    component: CalendarItem
};

export default meta;

type Story = StoryObj<typeof CalendarItem>;

const primaryProps: CalendarItemProps = {
    event: {
        genre: "Motorsport",
        seriesName: "Formula 1",
        seriesLogo: F1logo,
        title: "Japanese Grand Prix",
        session: "Free Practice 1",
        location: {
            name: "鈴鹿サーキット",
            country: "Japan",
            googleMapUrl: undefined
        },
        date: dayjs.utc("2021-07-17T12:00:00.000Z")
    },
    notify: true
};
export const Primary: Story = {
    render: () => <CalendarItem {...primaryProps} />
};
