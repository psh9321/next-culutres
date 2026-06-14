import { signOut } from 'next-auth/react';
import { DeleteToken } from '@/shared/lib/token';

export async function LogoutCallback() {
    await DeleteToken();
    signOut();
}