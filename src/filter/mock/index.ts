//example for filter variable which gets from query
export const filter1 = {
    or: [
        {
            and: [
                {
                    name: {
                        eq: 1,
                    },
                },
                {
                    id: {
                        eq: 2,
                    },
                },
            ],
        },
        {
            and: [
                {
                    or: [
                        {
                            name: {
                                eq: 1,
                            },
                            id: {
                                eq: 2,
                            },
                        },
                    ],
                },
                {
                    name: {
                        eq: 1,
                    },
                },
            ],
        },
    ],
};

export const filter2 = {
    name: {
        eq: 1,
    },
};

export const filter3 = {
    and: [
        {
            name: {
                eq: 1,
            },
        },
        {
            id: {
                eq: 2,
            },
        },
    ],
};

export const filter4 = {
    or: [
        {
            or: [
                {
                    name: {
                        eq: 'Luan',
                    },
                },
                {
                    name: {
                        eq: 'Test',
                    },
                },
            ],
        },
        {
            name: {
                eq: 'Luan22',
            },
        },
    ],
};

//example api with query 
//localhost:3000/test?and[0][name][eq]=Luan&and[1][id][eq]=1&and[2][or][0][name][eq]=Luan&and[2][or][1][name][eq]=Test
