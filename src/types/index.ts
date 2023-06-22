export interface Job {
  id: string;
  isSavedByLoop: boolean;
  expiresOn: Date;
  company: Company;
  documentPercentage: number;
  mockInterViewPercentage: number;
  status: string;
}

interface Company {
  name: string;
  location: string;
}

const job: Job = {
  status: 'saved',
  company: {
    location: '',
    name: '',
  },
  documentPercentage: 80,
  expiresOn: new Date(),
  id: '1',
  isSavedByLoop: false,
  mockInterViewPercentage: 85,
};

job.status = 'ddddd';
