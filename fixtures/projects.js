export const projects = [
  {
    id: 1,
    name: 'Project 1',
    beds: 2,
    sqft: 1000,
    bathroom: 2,
    address: 'Some address 1',
    mileStones: [
      {
        name: 'Milestone 1',
        status: 'completed',
        invoices: [
          {
            id: 0,
            created_at: '2022-03-21T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 500,
            due_amount: 1000,
          },
          {
            id: 1,
            created_at: '2022-03-27T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 1000,
            due_amount: 0,
          },
        ],
      },
      {
        name: 'Milestone 2',
        status: 'pending',
        invoices: [
          {
            id: 2,
            created_at: '2022-03-21T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 1000,
            due_amount: 1500,
          },
        ],
      }
    ]
  },
  {
    id: 2,
    name: 'Project 2',
    beds: 1,
    sqft: 900,
    bathroom: 1,
    address: 'Some address 2',
    mileStones: [
      {
        name: 'Milestone 1',
        status: 'completed',
        invoices: [
          {
            id: 3,
            created_at: '2022-03-21T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 500,
            due_amount: 1000,
          },
          {
            id: 4,
            created_at: '2022-03-27T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 1000,
            due_amount: 0,
          },
        ],
      },
      {
        name: 'Milestone 2',
        status: 'completed',
        invoices: [
          {
            id: 5,
            created_at: '2022-03-21T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 1000,
            due_amount: 1500,
          },
          {
            id: 6,
            created_at: '2022-03-27T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 500,
            due_amount: 0,
          },
        ],
      }
    ],
  },
  {
    id: 3,
    name: 'Project 3',
    beds: 3,
    sqft: 1500,
    bathroom: 2,
    address: 'Some address 3',
    mileStones: [
      {
        name: 'Milestone 1',
        status: 'completed',
        invoices: [
          {
            id: 7,
            created_at: '2022-03-21T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 500,
            due_amount: 1000,
          },
          {
            id: 8,
            created_at: '2022-03-27T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 1000,
            due_amount: 0,
          },
        ],
      },
      {
        name: 'Milestone 2',
        status: 'pending',
        invoices: [
          {
            id: 9,
            created_at: '2022-03-21T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 1000,
            due_amount: 1500,
          },
          {
            id: 10,
            created_at: '2022-03-27T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 500,
            due_amount: 0,
          },
        ],
      }
    ],
  },
  {
    id: 4,
    name: 'Project 4',
    beds: 2,
    sqft: 600,
    bathroom: 1,
    address: 'Some address 4',
    mileStones: [
      {
        name: 'Milestone 1',
        status: 'pending',
        invoices: [
          {
            id: 11,
            created_at: '2022-03-21T15:43:23.407Z',
            due_date: '2022-03-30T15:43:23.407Z',
            paid_amount: 500,
            due_amount: 1000,
          }
        ],
      },
      {
        name: 'Milestone 2',
        status: 'pending',
        invoices: [],
      }
    ],
  },
  {
    id: 5,
    name: 'Project 5',
    beds: 5,
    sqft: 2000,
    bathroom: 4,
    address: 'Some address 5',
    mileStones: [
      {
        name: 'Milestone 1',
        status: 'pending',
        invoices: [],
      },
      {
        name: 'Milestone 2',
        status: 'pending',
        invoices: [],
      }
    ],
  },
];
