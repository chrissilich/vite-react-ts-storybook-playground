export interface DummyJsonUserAddressInterface {
	university: string
	state: string
	postalCode: string
	city: string
}
export interface DummyJsonUserInterface {
	university: DummyJsonUserAddressInterface[]
	address: any
	email: string
	image: string
	firstName: string
	lastName: string
}
export interface DummyJsonUserDataInterface {
	users: DummyJsonUserInterface[]
}
