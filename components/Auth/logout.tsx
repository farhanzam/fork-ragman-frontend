import { SidebarButton } from '@/components/Sidebar/SidebarButton';
import { IconLogout } from '@tabler/icons-react';
import { useTranslation } from 'next-i18next';


const logout = () => {
    /* TODO: logout */
    window.location.href = '/login';  // redirect to login page
}

export const LogoutButton = () => {
    const { t } = useTranslation('chat');

    return (
        <SidebarButton
            text={t('Log out')}
            icon={<IconLogout size={18} />}
            onClick={() => logout()}
        />
    )
}
