import React, { useState, useEffect, ReactNode, MouseEventHandler } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import { Home } from '../features/Home';
import { PromiseView } from '../features/PromiseView';
import {useAppInfo} from "./model/useAppInfo";

const App = () => {
	const { go, fetchedUser, activePanel } = useAppInfo();

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<View activePanel={activePanel}>
						<Home id='home' fetchedUser={fetchedUser} go={go} />
						<PromiseView id='promise' go={go} />
					</View>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
