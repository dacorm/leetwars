import React, {MouseEventHandler, ReactNode, useEffect, useState} from "react";
import bridge, {UserInfo} from "@vkontakte/vk-bridge";
import {ScreenSpinner} from "@vkontakte/vkui";

export const useAppInfo = () => {
    const [activePanel, setActivePanel] = useState('home');
    const [fetchedUser, setUser] = useState<UserInfo | undefined>();
    const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size='large' />);

    useEffect(() => {
        async function fetchData() {
            const user = await bridge.send('VKWebAppGetUserInfo');
            setUser(user);
            setPopout(null);
        }
        fetchData();
    }, []);

    const go: MouseEventHandler<HTMLElement> = e => {
        setActivePanel(e.currentTarget.dataset.to ?? 'home');
    };

    return { go, activePanel, fetchedUser }
}
