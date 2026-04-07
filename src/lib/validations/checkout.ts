import { z } from 'zod';

export const checkoutSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  country: z.string().min(1, 'Please select a country'),
  address: z.string().min(5, 'Please enter your delivery address'),
  deliveryMethod: z.enum(['kampala', 'international', 'pickup']),
  paymentMethod: z.enum(['mtn', 'airtel', 'bank', 'paypal']),
  notes: z.string().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
