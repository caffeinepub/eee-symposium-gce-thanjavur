import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ScheduleItem {
    title: string;
    time: string;
    speaker: string;
    location: string;
}
export interface RegistrationFee {
    category: string;
    amount: bigint;
}
export interface Speaker {
    topic: string;
    name: string;
    designation: string;
    affiliation: string;
}
export interface Event {
    venue: string;
    date: string;
    name: string;
    description: string;
}
export interface backendInterface {
    getAllEvents(): Promise<Array<Event>>;
    getEvent(name: string): Promise<Event>;
    getFees(): Promise<Array<RegistrationFee>>;
    getSchedule(): Promise<Array<ScheduleItem>>;
    getSpeakers(): Promise<Array<Speaker>>;
}
