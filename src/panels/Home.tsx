import React, { MouseEventHandler } from 'react';

import { Panel, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';

interface Props {
	id: string;
	go: MouseEventHandler<HTMLElement>;
	fetchedUser?: UserInfo;
}

const Home: React.FC<Props> = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		{fetchedUser &&
		<Group>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Navigation Example</Header>}>
			<Div>
				test
			</Div>
		</Group>
	</Panel>
);

export default Home;
