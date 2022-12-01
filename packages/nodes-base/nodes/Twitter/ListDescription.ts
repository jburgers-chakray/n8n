import { INodeProperties } from 'n8n-workflow';

export const listOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['list'],
			},
		},
		options: [
			{
				name: 'Add Member',
				value: 'add',
				description: 'Add a member to a list',
				action: 'Add a member to a list',
			},
		],
		default: 'add',
	},
];

export const listFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                list:add                        */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'List',
		name: 'list',
		type: 'resourceLocator',
		default: { mode: 'name', value: '' },
		required: true,
		description: 'The list you want to add the user to',
		displayOptions: {
			show: {
				operation: ['add'],
				resource: ['list'],
			},
		},
		modes: [
			{
				displayName: 'By Name',
				name: 'name',
				type: 'string',
				validation: [],
				placeholder: 'Automation Tools',
				url: '',
			},
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string',
				validation: [],
				placeholder: '99923132',
				url: '',
			},
			{
				displayName: 'By URL',
				name: 'url',
				type: 'string',
				validation: [],
				placeholder: 'https://twitter.com/i/lists/99923132',
				url: '',
			},
		],
	},
	{
		displayName: 'User',
		name: 'user',
		type: 'resourceLocator',
		default: { mode: 'username', value: '' },
		required: true,
		description: 'The user you want to add to the list',
		displayOptions: {
			show: {
				operation: ['add'],
				resource: ['list'],
			},
		},
		modes: [
			{
				displayName: 'By Username',
				name: 'username',
				type: 'string',
				validation: [],
				placeholder: 'n8n',
				url: '',
			},
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string',
				validation: [],
				placeholder: '1068479892537384960',
				url: '',
			},
		],
	},
];