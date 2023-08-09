export interface User {
    username: string;
    email: string;
    password: string;
    address: Address;
}

export interface Address {
    street: string;
    postalCode: string;
    city: string;
}