export default {
    "scalars": [
        1,
        2,
        3
    ],
    "types": {
        "User": {
            "id": [
                1
            ],
            "email": [
                2
            ],
            "name": [
                2
            ],
            "lastName": [
                2
            ],
            "avatar": [
                2
            ],
            "password": [
                2
            ],
            "isActive": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "String": {},
        "Boolean": {},
        "UserBoard": {
            "id": [
                1
            ],
            "email": [
                2
            ],
            "name": [
                2
            ],
            "lastName": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "createUserInput": {
            "email": [
                2
            ],
            "lastName": [
                2
            ],
            "name": [
                2
            ],
            "password": [
                2
            ],
            "avatar": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "updateUserInput": {
            "id": [
                1
            ],
            "email": [
                2
            ],
            "lastName": [
                2
            ],
            "name": [
                2
            ],
            "password": [
                2
            ],
            "avatar": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "getUsers": [
                0
            ],
            "getUser": [
                0,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "getUserByEmail": [
                4,
                {
                    "email": [
                        2,
                        "String!"
                    ]
                }
            ],
            "getVideoGames": [
                9
            ],
            "getVideoGame": [
                9,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "getVideoGameByTitle": [
                9,
                {
                    "title": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Mutation": {
            "createUser": [
                3,
                {
                    "input": [
                        5,
                        "createUserInput!"
                    ]
                }
            ],
            "updateUser": [
                3,
                {
                    "input": [
                        6,
                        "updateUserInput!"
                    ]
                }
            ],
            "deleteUser": [
                3,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "createVideoGame": [
                3,
                {
                    "input": [
                        10,
                        "createVideoGameInput!"
                    ]
                }
            ],
            "updateVideoGame": [
                3,
                {
                    "input": [
                        11,
                        "updateVideoGameInput!"
                    ]
                }
            ],
            "deleteVideoGame": [
                3,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "VideoGame": {
            "id": [
                1
            ],
            "title": [
                2
            ],
            "description": [
                2
            ],
            "genre": [
                2
            ],
            "difficulty": [
                2
            ],
            "state": [
                2
            ],
            "isActive": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "createVideoGameInput": {
            "title": [
                2
            ],
            "description": [
                2
            ],
            "genre": [
                2
            ],
            "difficulty": [
                2
            ],
            "state": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "updateVideoGameInput": {
            "id": [
                1
            ],
            "title": [
                2
            ],
            "description": [
                2
            ],
            "genre": [
                2
            ],
            "difficulty": [
                2
            ],
            "state": [
                2
            ],
            "__typename": [
                2
            ]
        }
    }
}