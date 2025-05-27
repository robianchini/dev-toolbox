// array.js
export function orderArray(array: any[]): any[];
export function orderNumericArray(array: number[]): number[];
export function orderObjectArray<T extends Record<string, any>>(array: T[], property: keyof T): T[];

// birthdate.js
export function isBirthDateValid(birthDate: string): boolean | undefined;
export function formatBirthdate(date: string | undefined): string;

// creditcard.js
export function formatCreditCard(value: string | number): string;
export function getCardFlagName(cardNumber: string): string | undefined;

// currency.js
export function formatCurrency(value: number | string): string;

// document.js
export function formatCPF(value: string | number): string;
export function formatCNPJ(value: string | number): string;
export function formatDocument(value: string | number): string;
export function isCPFValid(value: string | number): boolean;
export function isCNPJValid(value: string | number): boolean;
export function isDocumentValid(value: string | number): boolean;

// greeting.js
export function getGreeting(datetime?: string | Date): string;
export const greeting: string;

// length.js
export function mToKm(value: number): number;
export function mToCm(value: number): number;
export function mToMm(value: number): number;
export function mToIn(value: number): number;
export function mToFt(value: number): number;
export function mToMi(value: number): number;
export function inToM(value: number): number;
export function inToKm(value: number): number;
export function inToCm(value: number): number;
export function inToMm(value: number): number;
export function inToFt(value: number): number;
export function inToMi(value: number): number;
export function ftToM(value: number): number;
export function ftToKm(value: number): number;
export function ftToCm(value: number): number;
export function ftToMm(value: number): number;
export function ftToFt(value: number): number;
export function ftToMi(value: number): number;

// number.js
export function formatBrNumber(value: number): string;
export function formatEnNumber(value: number): string;
export function random(): number;
export function randomBetween(minValue: number, maxValue: number): number;

// phone.js
export function formatPhone(value: string | number, useParentheses?: boolean): string | undefined;

// time.js
export function formatSeconds(value: number): string;
export function daysBetweenDates(date1: string | Date, date2: string | Date): number;
export function monthsBetweenDates(date1: string | Date, date2: string | Date): number;

// vehicle.js
export function formatPlate(value: string): string;
export function isPlateValid(value: string): boolean;

// zipcode.js
export function formatZipCode(value: string | number): string;
export function isZipCodeValid(value: string | number): boolean;

