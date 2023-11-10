import React, { MouseEventHandler } from 'react';

import {Panel, Header, Group, Cell, Div, Avatar, PanelHeader, CellButton} from '@vkontakte/vkui';
import { HomeProps } from "./model/types";

export const Home: React.FC<HomeProps> = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		{fetchedUser &&
		<Group>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}
		<PanelHeader>Список задач для фронтенд интервью</PanelHeader>
		<Group header={<Header mode="secondary">Интересные задачи на тему JS</Header>}>
			<Group>
				<Div>
					<CellButton data-to="promise" onClick={go}>
						Написать промис с нуля
					</CellButton>
					<CellButton data-to="flatten" onClick={go}>
						Array flatten
					</CellButton>
					<CellButton data-to="debounce" onClick={go}>
						Debounce
					</CellButton>
					<CellButton data-to="sort" onClick={go}>
						Сортировка массива
					</CellButton>
				</Div>
			</Group>
		</Group>
		<Group header={<Header mode="secondary">Алгоритмические задачи</Header>}>
			<Group>
				<Div>
					<CellButton data-to="promise" onClick={go}>
						Бинарный поиск
					</CellButton>
					<CellButton data-to="flatten" onClick={go}>
						Quick sort
					</CellButton>
					<CellButton data-to="debounce" onClick={go}>
						Написать связный список
					</CellButton>
					<CellButton data-to="sort" onClick={go}>
						Графы
					</CellButton>
				</Div>
			</Group>
		</Group>
	</Panel>
);
