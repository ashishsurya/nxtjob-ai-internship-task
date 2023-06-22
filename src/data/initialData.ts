import { Job } from '../types/index';

export const data: Job[] = [
  {
    id: 'e1f529e8-7dae-4cbd-a66e-57efbd61327f',
    status: 'saved',
    isSavedByLoop : true
  },
  {
    id: '8028fb2e-b156-4f04-83fd-5d82ef3e64c2',
    mockInterViewPercentage: 25,

    status: 'saved',
  },
  { id: '374baa5c-28e0-4c6f-b2f7-7173c0722bc5', status: 'saved' },
  { id: '668a4afa-d193-4f0b-891b-79a7bab26315', status: 'saved' },
  { id: '7ccd67f6-ff0e-481b-b0f4-1d7b9d55d3c3', status: 'applied' },
  { id: '110441ca-395f-40d6-9b5b-625b46fdf172', status: 'interviewing' },
  {
    id: 'd5d44c0c-1bb0-4c02-9370-066a23eb1a2d',
    isSavedByLoop: true,
    status: 'offer',
  },
  {
    id: 'fc28833f-b53a-44c0-a7bd-e3589698ff13',
    isSavedByLoop: true,
    status: 'rejected',
  },
];
