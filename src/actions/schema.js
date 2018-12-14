import { schema } from 'normalizr'

export const booking = new schema.Entity('bookings')
export const arrayOfBookings = [ booking ]