export default {
    "scalars": [
        1,
        2,
        3,
        12,
        18
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
            "getUserCategories": [
                9,
                {
                    "userId": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "getCategory": [
                9,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "getUserBoards": [
                13,
                {
                    "userId": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "getTransaction": [
                17,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "getCategoryTransactions": [
                17,
                {
                    "categoryId": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "getBoardTransactions": [
                19,
                {
                    "boardId": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "getDateTransactions": [
                17,
                {
                    "date": [
                        12,
                        "DateTime!"
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
            "createCategory": [
                3,
                {
                    "input": [
                        10,
                        "createCategoryInput!"
                    ]
                }
            ],
            "updateCategory": [
                3,
                {
                    "input": [
                        11,
                        "updateCategoryInput!"
                    ]
                }
            ],
            "deleteCategory": [
                3,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "createBoard": [
                3,
                {
                    "input": [
                        15,
                        "createBoardInput!"
                    ]
                }
            ],
            "updateBoard": [
                3,
                {
                    "input": [
                        16,
                        "updateBoardInput!"
                    ]
                }
            ],
            "deleteBoard": [
                3,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "createTransaction": [
                3,
                {
                    "input": [
                        21,
                        "createTransactionInput!"
                    ]
                }
            ],
            "updateTransaction": [
                3,
                {
                    "input": [
                        22,
                        "updateTransactionInput!"
                    ]
                }
            ],
            "deleteTransaction": [
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
        "Category": {
            "id": [
                1
            ],
            "name": [
                2
            ],
            "type": [
                2
            ],
            "icon": [
                2
            ],
            "userId": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "createCategoryInput": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "icon": [
                2
            ],
            "userId": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "updateCategoryInput": {
            "id": [
                1
            ],
            "name": [
                2
            ],
            "type": [
                2
            ],
            "icon": [
                2
            ],
            "userId": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "DateTime": {},
        "Board": {
            "id": [
                1
            ],
            "name": [
                2
            ],
            "owner": [
                4
            ],
            "createdAt": [
                12
            ],
            "boardPermissions": [
                14
            ],
            "__typename": [
                2
            ]
        },
        "BoardPermission": {
            "permissions": [
                2
            ],
            "user": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "createBoardInput": {
            "owner": [
                1
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "updateBoardInput": {
            "owner": [
                1
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Transaction": {
            "id": [
                1
            ],
            "description": [
                2
            ],
            "amount": [
                18
            ],
            "date": [
                12
            ],
            "categoryId": [
                1
            ],
            "boardId": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "Float": {},
        "BoardTransaction": {
            "id": [
                1
            ],
            "description": [
                2
            ],
            "amount": [
                18
            ],
            "date": [
                12
            ],
            "category": [
                20
            ],
            "boardId": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "CategoryTransaction": {
            "id": [
                1
            ],
            "name": [
                2
            ],
            "type": [
                2
            ],
            "icon": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "createTransactionInput": {
            "description": [
                2
            ],
            "amount": [
                18
            ],
            "date": [
                12
            ],
            "categoryId": [
                1
            ],
            "boardId": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "updateTransactionInput": {
            "id": [
                1
            ],
            "description": [
                2
            ],
            "amount": [
                18
            ],
            "date": [
                12
            ],
            "categoryId": [
                1
            ],
            "boardId": [
                1
            ],
            "__typename": [
                2
            ]
        }
    }
}