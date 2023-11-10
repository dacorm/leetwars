import React from 'react';

import { Card, CardGrid, Group, Header, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import './Promise.css';
import {PromiseViewProps} from "./model/types";
import { CodeBlock, dracula } from "react-code-blocks";
import { code } from "./model/myPromise";

export const PromiseView: React.FC<PromiseViewProps> = ({id, go}) => (
	<Panel id={id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={go} data-to="home"/>}
		>
			Promise
		</PanelHeader>
		<Group>
			<Header mode="primary">Реализация промиса с нуля [DOM API, HARD, DETAILS]</Header>
			<Group mode="plain" header={<Header mode="secondary">JavaScript</Header>}>
				<CardGrid size="l">
					<Card mode="shadow">
						<CodeBlock
							customStyle={{
								height: '550px',
								overflowY: 'scroll',
							}}
							text={code}
							language={'ts'}
							showLineNumbers={true}
							startingLineNumber={0}
							theme={dracula}
						/>
					</Card>
				</CardGrid>
			</Group>
		</Group>
	</Panel>
);

