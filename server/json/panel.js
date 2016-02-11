exports.panel = [
    {
        id: 1,
        type: {
            category: 'EDITOR',
            subcategory: ''
        },
        name:'note',
        title: 'Bloc Notes',
        icons: 'fa fa-clipboard',
        options: {
            toggle: {
                active: true,
                icons: '',
                title: ''
            },
            close: {
                active: true,
                icons: 'fa fa-close',
                title: 'Fermer le panneau'
            },
            collapse: {
                active: true,
                icons: 'fa fa-minus',
                title: 'Réduire le panneau'
            },
            actions: {
                active: false,
                icons: '',
                title: 'actions',
                list: [
                    {
                        type: 'ITEM',
                        title: 'Action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Another action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Something else here',
                        fn: ''
                    },
                    {
                        type: 'divider',
                        title: '',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Separated link',
                        fn: ''
                    }

                ]
            }
        },
        footer: {
            list: []
        },
        data: '',
        urlData: 'http://localhost:3000/blocnotes',
        location: {
            zone: 2,
            order: 2
        }
    },
    {
        id: 2,
        type: {
            category: 'LIST',
            subcategory: ''
        },
        name:'consultations',
        title: 'Mes consultations',
        icons: 'fa fa-folder',
        options: {
            toggle: {
                active: false,
                icons: '',
                title: ''
            },
            close: {
                active: true,
                icons: '',
                title: ''
            },
            collapse: {
                active: true,
                icons: '',
                title: ''
            },
            actions: {
                active: false,
                icons: '',
                title: 'actions',
                list: [
                    {
                        type: 'ITEM',
                        title: 'Action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Another action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Something else here',
                        fn: ''
                    },
                    {
                        type: 'divider',
                        title: '',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Separated link',
                        fn: ''
                    }

                ]
            }
        },
        footer: {
            list: [
                {
                    type: 'LINK',
                    title: 'Toutes mes consultations',
                    link: ''
                }
            ]
        },
        data: '',
        urlData: '',
        location: {
            zone: 2,
            order: 1
        }
    },
    {
        id: 3,
        type: {
            category: 'SEARCH',
            subcategory: ''
        },
        name:'search',
        title: 'Recherche rapide',
        icons: 'fa fa-search fa-flip-horizontal',
        options: {
            toggle: {
                active: false,
                icons: '',
                title: ''
            },
            close: {
                active: true,
                icons: '',
                title: ''
            },
            collapse: {
                active: true,
                icons: '',
                title: ''
            },
            actions: {
                active: false,
                icons: '',
                title: 'actions',
                list: [
                    {
                        type: 'ITEM',
                        title: 'Action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Another action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Something else here',
                        fn: ''
                    },
                    {
                        type: 'divider',
                        title: '',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Separated link',
                        fn: ''
                    }

                ]
            }
        },
        footer: {
            list: [
                {
                    type: 'LINK',
                    title: 'Recherche avancée',
                    link: ''
                }
            ]
        },
        data: '',
        urlData: '',
        location: {
            zone: 3,
            order: 1
        }
    },
    {
        id: 4,
        type: {
            category: 'ARTICLE',
            subcategory: ''
        },
        name: 'news',
        title: 'Actualités',
        icons: 'fa fa-newspaper-o',
        options: {
            toggle: {
                active: false,
                icons: '',
                title: ''
            },
            close: {
                active: true,
                icons: '',
                title: ''
            },
            collapse: {
                active: true,
                icons: '',
                title: ''
            },
            actions: {
                active: false,
                icons: '',
                title: 'actions',
                list: [
                    {
                        type: 'ITEM',
                        title: 'Action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Another action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Something else here',
                        fn: ''
                    },
                    {
                        type: 'divider',
                        title: '',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Separated link',
                        fn: ''
                    }

                ]
            }
        },
        footer: {
            list: []
        },
        data: '',
        urlData: 'http://localhost:3000/news',
        location: {
            zone: 3,
            order: 2
        }
    },
    {
        id: 5,
        type: {
            category: 'LIST',
            subcategory: ''
        },
        name: 'publication',
        title: 'Dernières publications',
        icons: 'fa fa-file',
        options: {
            toggle: {
                active: false,
                icons: '',
                title: ''
            },
            close: {
                active: true,
                icons: '',
                title: ''
            },
            collapse: {
                active: true,
                icons: '',
                title: ''
            },
            actions: {
                active: false,
                icons: '',
                title: 'actions',
                list: [
                    {
                        type: 'ITEM',
                        title: 'Action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Another action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Something else here',
                        fn: ''
                    },
                    {
                        type: 'divider',
                        title: '',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Separated link',
                        fn: ''
                    }

                ]
            }
        },
        footer: {
            list: [
                {
                    type: 'LINK',
                    title: 'Voir toutes les publications',
                    link: ''
                }
            ]
        },
        data: '',
        urlData: '',
        location: {
            zone: 2,
            order: 2
        }
    },
    {
        id: 6,
        type: {
            category: 'CHART',
            subcategory: ''
        },
        name: 'evolution-procedure',
        title: 'Evolution types de procédure',
        icons: 'fa fa-bar-chart',
        options: {
            toggle: {
                active: false,
                icons: '',
                title: ''
            },
            close: {
                active: true,
                icons: '',
                title: ''
            },
            collapse: {
                active: true,
                icons: '',
                title: ''
            },
            actions: {
                active: false,
                icons: '',
                title: 'actions',
                list: [
                    {
                        type: 'ITEM',
                        title: 'Action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Another action',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Something else here',
                        fn: ''
                    },
                    {
                        type: 'divider',
                        title: '',
                        fn: ''
                    },
                    {
                        type: 'ITEM',
                        title: 'Separated link',
                        fn: ''
                    }

                ]
            }
        },
        footer: {
            list: []
        },
        data: '',
        urlData: 'http://localhost:5600/server/mocks/chart.csv',
        location: {
            zone: 1,
            order: 1
        },
    }
];