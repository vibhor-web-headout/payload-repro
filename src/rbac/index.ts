import {FieldAccess} from 'payload/types';
import {User} from 'payload/auth';
import type { User as PayloadUser } from 'payload/generated-types';

export const checkRole = (
    allRoles: PayloadUser['role'][] = [],
    user: User | null
) => {
    if (!user) {
        return false;
    }

    return allRoles.some(role =>
        Boolean((user?.role as string)?.includes(role))
    );
};


export const canCreateOrUpdateLocalizedField: FieldAccess<
    { id: string },
    unknown,
    User
> = ({ req: { user, locale } }) => {
    if (locale !== user?.locale) {
        return false;
    }

    return checkRole(['admin', 'writer', 'translator'], user);
};

export const canCreateOrUpdateNonLocalizedField: FieldAccess<
    { id: string },
    unknown,
    User
> = ({ req: { user } }) => checkRole(['admin', 'writer', 'editor'], user);