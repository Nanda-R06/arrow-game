/**
 * Handcrafted & Procedurally-Verified Difficult Campaign Levels & Progress Store.
 * 20 Brain-Bending Levels scaling from 4x4 up to 9x9 with dense arrows and obstacle stones.
 * All levels verified 100% solvable.
 */
const CAMPAIGN_LEVELS = [
    {
        "id": 1,
        "title": "The Interlock",
        "hintText": "Look for the single arrow with a clear path to begin the chain reaction!",
        "rows": 4,
        "cols": 4,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 2,
                "c": 2,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 1,
                "c": 2,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 0,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 2,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 3,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 1,
                "c": 3,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 1,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 2,
                "c": 3,
                "dir": "RIGHT",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 2,
        "title": "Traffic Knot",
        "hintText": "Perimeter arrows must be peeled away before the inner traffic can move.",
        "rows": 5,
        "cols": 5,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 4,
                "c": 0,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 4,
                "c": 4,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 1,
                "c": 1,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 3,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 1,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 2,
                "c": 3,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 1,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 0,
                "c": 2,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 2,
                "c": 1,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 4,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 0,
                "c": 3,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 0,
                "c": 1,
                "dir": "UP",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 3,
        "title": "Diagonal Cross",
        "hintText": "Diagonals slice across lanes! Check corner trajectories.",
        "rows": 5,
        "cols": 5,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 3,
                "c": 1,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 2,
                "c": 2,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 1,
                "c": 0,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 2,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 1,
                "c": 4,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 1,
                "c": 1,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 2,
                "c": 0,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 3,
                "c": 3,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 4,
                "c": 0,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 0,
                "c": 0,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 0,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 4,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 1,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 3,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 2,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 4,
        "title": "Stone Sanctuary",
        "hintText": "The stone pillar redirects traffic. Work around the boundary.",
        "rows": 5,
        "cols": 5,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 3,
                "c": 2,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 0,
                "c": 1,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 3,
                "c": 1,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 0,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 2,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 0,
                "c": 0,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 2,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 4,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 3,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 2,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 3,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 1,
                "c": 3,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 1,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 4,
                "c": 1,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 4,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 3,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            }
        ],
        "obstacles": [
            {
                "id": "obs_0",
                "r": 1,
                "c": 1,
                "type": "rock",
                "isObstacle": true
            }
        ]
    },
    {
        "id": 5,
        "title": "Double Spiral",
        "hintText": "Two interlocking spirals. Identify which spiral has the escape tail.",
        "rows": 6,
        "cols": 6,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 5,
                "c": 2,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 0,
                "c": 1,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 2,
                "c": 2,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 1,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 5,
                "c": 1,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 3,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 1,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 4,
                "c": 3,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 3,
                "c": 1,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 4,
                "c": 0,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 1,
                "c": 5,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 4,
                "c": 4,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 1,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 2,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 1,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 2,
                "c": 5,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 4,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 0,
                "c": 0,
                "dir": "UP",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 6,
        "title": "The Crossfire",
        "hintText": "Diagonal arrows criss-cross cardinal lines. Plan 3 steps ahead.",
        "rows": 6,
        "cols": 6,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 3,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 5,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 2,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 4,
                "c": 5,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 4,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 3,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 3,
                "c": 3,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 2,
                "c": 2,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 5,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 5,
                "c": 2,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 0,
                "c": 5,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 4,
                "c": 0,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 2,
                "c": 4,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 3,
                "c": 2,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 5,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 1,
                "c": 5,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 0,
                "c": 3,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 3,
                "c": 1,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 4,
                "c": 1,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 2,
                "c": 5,
                "dir": "DOWN_RIGHT",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 7,
        "title": "The Fortress",
        "hintText": "Two solid pillars guard the interior. Clear the flanks first.",
        "rows": 6,
        "cols": 6,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 5,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 3,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 4,
                "c": 4,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 5,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 4,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 2,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 3,
                "c": 5,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 0,
                "c": 2,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 2,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 0,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 1,
                "c": 0,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 0,
                "c": 3,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 4,
                "c": 5,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 1,
                "c": 1,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 4,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 1,
                "c": 5,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 0,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 5,
                "c": 3,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 2,
                "c": 4,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 0,
                "c": 5,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 0,
                "c": 0,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 3,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            }
        ],
        "obstacles": [
            {
                "id": "obs_0",
                "r": 4,
                "c": 1,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_1",
                "r": 1,
                "c": 3,
                "type": "rock",
                "isObstacle": true
            }
        ]
    },
    {
        "id": 8,
        "title": "Vortex 360",
        "hintText": "Swirling vortex of arrows. Untangle from the outer edge inward.",
        "rows": 6,
        "cols": 6,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 2,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 2,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 5,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 4,
                "c": 3,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 3,
                "c": 3,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 3,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 4,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 0,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 1,
                "c": 3,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 3,
                "c": 1,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 4,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 1,
                "c": 5,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 3,
                "c": 2,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 1,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 2,
                "c": 0,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 3,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 5,
                "c": 5,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 5,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 0,
                "c": 0,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 2,
                "c": 3,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 0,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 5,
                "c": 0,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 0,
                "c": 1,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 1,
                "c": 0,
                "dir": "LEFT",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 9,
        "title": "The Labyrinth",
        "hintText": "Dense 7x7 grid. Don't rush—trace each arrow's ray to the border.",
        "rows": 7,
        "cols": 7,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 3,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 5,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 6,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 6,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 1,
                "c": 2,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 5,
                "c": 0,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 1,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 0,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 6,
                "c": 1,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 2,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 4,
                "c": 5,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 3,
                "c": 5,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 6,
                "c": 2,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 4,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 6,
                "c": 6,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 1,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 5,
                "c": 1,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 6,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 2,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 5,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 0,
                "c": 0,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 4,
                "c": 3,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 4,
                "c": 0,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 5,
                "c": 2,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 2,
                "c": 4,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 1,
                "c": 5,
                "dir": "UP_RIGHT",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 10,
        "title": "The Great Divide",
        "hintText": "Two obstacle rocks split the board into narrow escape corridors.",
        "rows": 7,
        "cols": 7,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 1,
                "c": 6,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 6,
                "c": 3,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 5,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 1,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 0,
                "c": 5,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 1,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 0,
                "c": 2,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 3,
                "c": 5,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 3,
                "c": 0,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 0,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 5,
                "c": 6,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 1,
                "c": 1,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 4,
                "c": 0,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 4,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 5,
                "c": 0,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 5,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 1,
                "c": 3,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 6,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 0,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 5,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 5,
                "c": 5,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 6,
                "c": 2,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 6,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 0,
                "c": 0,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 3,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 2,
                "c": 4,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_27",
                "r": 1,
                "c": 5,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_28",
                "r": 6,
                "c": 5,
                "dir": "DOWN",
                "active": true
            }
        ],
        "obstacles": [
            {
                "id": "obs_0",
                "r": 3,
                "c": 3,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_1",
                "r": 3,
                "c": 1,
                "type": "rock",
                "isObstacle": true
            }
        ]
    },
    {
        "id": 11,
        "title": "Spider's Web",
        "hintText": "A complex web of dependencies. Find the anchor point to unravel it.",
        "rows": 7,
        "cols": 7,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 3,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 0,
                "c": 3,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 2,
                "c": 3,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 0,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 1,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 1,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 3,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 6,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 1,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 3,
                "c": 5,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 5,
                "c": 3,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 4,
                "c": 0,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 0,
                "c": 6,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 3,
                "c": 4,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 2,
                "c": 4,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 3,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 5,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 1,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 2,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 3,
                "c": 2,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 0,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 6,
                "c": 2,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 5,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 4,
                "c": 3,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 1,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 5,
                "c": 1,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_27",
                "r": 2,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_28",
                "r": 5,
                "c": 2,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_29",
                "r": 2,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_30",
                "r": 6,
                "c": 1,
                "dir": "DOWN",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 12,
        "title": "Diagonal Storm",
        "hintText": "Heavy diagonal density. Watch out for deep cross-board blockers!",
        "rows": 7,
        "cols": 7,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 1,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 6,
                "c": 2,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 3,
                "c": 5,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 2,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 4,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 3,
                "c": 2,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 6,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 4,
                "c": 6,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 5,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 3,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 0,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 1,
                "c": 4,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 5,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 3,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 1,
                "c": 6,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 3,
                "c": 3,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 2,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 1,
                "c": 0,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 3,
                "c": 0,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 6,
                "c": 5,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 4,
                "c": 5,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 2,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 0,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 1,
                "c": 1,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 5,
                "c": 2,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 2,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_27",
                "r": 5,
                "c": 5,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_28",
                "r": 6,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_29",
                "r": 0,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_30",
                "r": 4,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_31",
                "r": 6,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_32",
                "r": 0,
                "c": 5,
                "dir": "UP",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 13,
        "title": "Castle Bastion",
        "hintText": "Three stone pillars protect the core. Peel away the defensive outer rings.",
        "rows": 7,
        "cols": 7,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 2,
                "c": 2,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 1,
                "c": 4,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 1,
                "c": 1,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 1,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 4,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 3,
                "c": 5,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 6,
                "c": 5,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 5,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 0,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 5,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 6,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 0,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 5,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 6,
                "c": 2,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 6,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 3,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 5,
                "c": 2,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 4,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 6,
                "c": 4,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 6,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 1,
                "c": 5,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 6,
                "c": 6,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 0,
                "c": 5,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 4,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 2,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 3,
                "c": 0,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_27",
                "r": 0,
                "c": 2,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_28",
                "r": 3,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_29",
                "r": 0,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_30",
                "r": 1,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_31",
                "r": 5,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_32",
                "r": 2,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_33",
                "r": 3,
                "c": 4,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_34",
                "r": 2,
                "c": 3,
                "dir": "UP_LEFT",
                "active": true
            }
        ],
        "obstacles": [
            {
                "id": "obs_0",
                "r": 5,
                "c": 5,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_1",
                "r": 4,
                "c": 5,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_2",
                "r": 4,
                "c": 2,
                "type": "rock",
                "isObstacle": true
            }
        ]
    },
    {
        "id": 14,
        "title": "The Hive",
        "hintText": "8x8 mega grid! Identify isolated edge corridors before touching the cluster.",
        "rows": 8,
        "cols": 8,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 6,
                "c": 5,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 2,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 4,
                "c": 4,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 3,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 5,
                "c": 3,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 0,
                "c": 3,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 1,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 6,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 3,
                "c": 7,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 4,
                "c": 5,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 7,
                "c": 5,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 0,
                "c": 1,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 6,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 2,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 6,
                "c": 0,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 5,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 0,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 1,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 2,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 3,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 4,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 5,
                "c": 4,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 7,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 5,
                "c": 7,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 6,
                "c": 4,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 7,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_27",
                "r": 4,
                "c": 3,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_28",
                "r": 7,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_29",
                "r": 0,
                "c": 0,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_30",
                "r": 3,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_31",
                "r": 7,
                "c": 7,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_32",
                "r": 4,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_33",
                "r": 2,
                "c": 7,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_34",
                "r": 0,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_35",
                "r": 2,
                "c": 5,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_36",
                "r": 4,
                "c": 7,
                "dir": "DOWN_RIGHT",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 15,
        "title": "Twin Citadels",
        "hintText": "Stone pillars divide the battlefield. Untangle one flank at a time.",
        "rows": 8,
        "cols": 8,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 7,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 6,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 6,
                "c": 2,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 4,
                "c": 6,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 4,
                "c": 2,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 5,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 2,
                "c": 3,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 1,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 3,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 4,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 1,
                "c": 5,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 3,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 5,
                "c": 7,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 6,
                "c": 7,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 0,
                "c": 7,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 7,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 0,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 6,
                "c": 3,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 1,
                "c": 3,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 0,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 2,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 7,
                "c": 5,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 1,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 5,
                "c": 1,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 7,
                "c": 0,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 7,
                "c": 7,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_27",
                "r": 0,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_28",
                "r": 0,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_29",
                "r": 4,
                "c": 7,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_30",
                "r": 2,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_31",
                "r": 3,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_32",
                "r": 4,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_33",
                "r": 2,
                "c": 7,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_34",
                "r": 1,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_35",
                "r": 5,
                "c": 6,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_36",
                "r": 3,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_37",
                "r": 4,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_38",
                "r": 1,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            }
        ],
        "obstacles": [
            {
                "id": "obs_0",
                "r": 4,
                "c": 5,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_1",
                "r": 5,
                "c": 4,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_2",
                "r": 5,
                "c": 5,
                "type": "rock",
                "isObstacle": true
            }
        ]
    },
    {
        "id": 16,
        "title": "Quantum Cascade",
        "hintText": "Massive 40-arrow puzzle. Releasing one arrow can trigger a multi-combo!",
        "rows": 8,
        "cols": 8,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 5,
                "c": 7,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 3,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 3,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 4,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 6,
                "c": 0,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 3,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 1,
                "c": 6,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 5,
                "c": 5,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 0,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 4,
                "c": 0,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 3,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 2,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 4,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 3,
                "c": 5,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 7,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 2,
                "c": 2,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 2,
                "c": 7,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 0,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 6,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 5,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 2,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 4,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 4,
                "c": 5,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 0,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 7,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 4,
                "c": 7,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_27",
                "r": 7,
                "c": 0,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_28",
                "r": 6,
                "c": 7,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_29",
                "r": 1,
                "c": 5,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_30",
                "r": 2,
                "c": 1,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_31",
                "r": 7,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_32",
                "r": 5,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_33",
                "r": 6,
                "c": 4,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_34",
                "r": 4,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_35",
                "r": 4,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_36",
                "r": 6,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_37",
                "r": 3,
                "c": 7,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_38",
                "r": 1,
                "c": 2,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_39",
                "r": 7,
                "c": 5,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_40",
                "r": 6,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 17,
        "title": "City Rush Hour",
        "hintText": "Dense urban gridlock. Keep combo alive by spotting consecutive unblocks.",
        "rows": 8,
        "cols": 8,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 3,
                "c": 7,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 3,
                "c": 5,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 7,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 1,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 1,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 7,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 4,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 0,
                "c": 0,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 4,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 4,
                "c": 7,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 6,
                "c": 7,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 7,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 3,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 6,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 5,
                "c": 2,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 3,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 7,
                "c": 6,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 5,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 5,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 0,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 6,
                "c": 0,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 6,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 2,
                "c": 2,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 6,
                "c": 3,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 0,
                "c": 1,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 2,
                "c": 4,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_27",
                "r": 5,
                "c": 3,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_28",
                "r": 2,
                "c": 7,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_29",
                "r": 3,
                "c": 0,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_30",
                "r": 2,
                "c": 6,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_31",
                "r": 3,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_32",
                "r": 1,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_33",
                "r": 7,
                "c": 7,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_34",
                "r": 1,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_35",
                "r": 2,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_36",
                "r": 0,
                "c": 7,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_37",
                "r": 1,
                "c": 7,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_38",
                "r": 0,
                "c": 5,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_39",
                "r": 4,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_40",
                "r": 7,
                "c": 2,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_41",
                "r": 7,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_42",
                "r": 4,
                "c": 5,
                "dir": "DOWN",
                "active": true
            }
        ],
        "obstacles": [
            {
                "id": "obs_0",
                "r": 1,
                "c": 4,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_1",
                "r": 1,
                "c": 5,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_2",
                "r": 4,
                "c": 3,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_3",
                "r": 6,
                "c": 4,
                "type": "rock",
                "isObstacle": true
            }
        ]
    },
    {
        "id": 18,
        "title": "The Hyper-Spiral",
        "hintText": "Deep multi-layer spiral. Only one outer thread unlocks the maze.",
        "rows": 8,
        "cols": 8,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 3,
                "c": 1,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 1,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 7,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 2,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 2,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 4,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 1,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 1,
                "c": 5,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 0,
                "c": 4,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 0,
                "c": 1,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 4,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 5,
                "c": 7,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 3,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 5,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 2,
                "c": 3,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 2,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 1,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 6,
                "c": 6,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 0,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 4,
                "c": 3,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 1,
                "c": 4,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 6,
                "c": 5,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 5,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 0,
                "c": 0,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 5,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 4,
                "c": 2,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_27",
                "r": 4,
                "c": 7,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_28",
                "r": 6,
                "c": 3,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_29",
                "r": 7,
                "c": 3,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_30",
                "r": 6,
                "c": 7,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_31",
                "r": 6,
                "c": 0,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_32",
                "r": 0,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_33",
                "r": 3,
                "c": 3,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_34",
                "r": 3,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_35",
                "r": 7,
                "c": 2,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_36",
                "r": 7,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_37",
                "r": 5,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_38",
                "r": 7,
                "c": 6,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_39",
                "r": 0,
                "c": 6,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_40",
                "r": 1,
                "c": 0,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_41",
                "r": 5,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_42",
                "r": 2,
                "c": 7,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_43",
                "r": 0,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_44",
                "r": 3,
                "c": 7,
                "dir": "RIGHT",
                "active": true
            }
        ],
        "obstacles": []
    },
    {
        "id": 19,
        "title": "Titan's Maze",
        "hintText": "9x9 colossal maze! Master-level patience and spatial planning required.",
        "rows": 9,
        "cols": 9,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 7,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 4,
                "c": 2,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 2,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 1,
                "c": 0,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 6,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 3,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 1,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 8,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 4,
                "c": 3,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 1,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 0,
                "c": 5,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 5,
                "c": 2,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 3,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 0,
                "c": 2,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 6,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 8,
                "c": 8,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 1,
                "c": 2,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 8,
                "c": 3,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 2,
                "c": 2,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 6,
                "c": 8,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 1,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 0,
                "c": 8,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 5,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 5,
                "c": 8,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 8,
                "c": 1,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 4,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_27",
                "r": 0,
                "c": 6,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_28",
                "r": 7,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_29",
                "r": 0,
                "c": 3,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_30",
                "r": 4,
                "c": 8,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_31",
                "r": 4,
                "c": 7,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_32",
                "r": 3,
                "c": 7,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_33",
                "r": 5,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_34",
                "r": 8,
                "c": 6,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_35",
                "r": 2,
                "c": 7,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_36",
                "r": 7,
                "c": 3,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_37",
                "r": 2,
                "c": 0,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_38",
                "r": 3,
                "c": 0,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_39",
                "r": 0,
                "c": 1,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_40",
                "r": 3,
                "c": 8,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_41",
                "r": 5,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_42",
                "r": 7,
                "c": 7,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_43",
                "r": 8,
                "c": 2,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_44",
                "r": 5,
                "c": 1,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_45",
                "r": 8,
                "c": 7,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_46",
                "r": 0,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            }
        ],
        "obstacles": [
            {
                "id": "obs_0",
                "r": 7,
                "c": 5,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_1",
                "r": 4,
                "c": 1,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_2",
                "r": 3,
                "c": 2,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_3",
                "r": 3,
                "c": 4,
                "type": "rock",
                "isObstacle": true
            }
        ]
    },
    {
        "id": 20,
        "title": "Omega Singularity",
        "hintText": "The ultimate 50-arrow brain burner. Clear all to become the Grandmaster!",
        "rows": 9,
        "cols": 9,
        "arrows": [
            {
                "id": "arrow_1",
                "r": 8,
                "c": 3,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_2",
                "r": 8,
                "c": 7,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_3",
                "r": 5,
                "c": 0,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_4",
                "r": 3,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_5",
                "r": 6,
                "c": 3,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_6",
                "r": 7,
                "c": 7,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_7",
                "r": 4,
                "c": 8,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_8",
                "r": 2,
                "c": 7,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_9",
                "r": 5,
                "c": 1,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_10",
                "r": 1,
                "c": 2,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_11",
                "r": 3,
                "c": 7,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_12",
                "r": 5,
                "c": 4,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_13",
                "r": 8,
                "c": 4,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_14",
                "r": 4,
                "c": 4,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_15",
                "r": 6,
                "c": 6,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_16",
                "r": 5,
                "c": 5,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_17",
                "r": 4,
                "c": 6,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_18",
                "r": 7,
                "c": 3,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_19",
                "r": 0,
                "c": 7,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_20",
                "r": 5,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_21",
                "r": 0,
                "c": 4,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_22",
                "r": 8,
                "c": 8,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_23",
                "r": 1,
                "c": 7,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_24",
                "r": 7,
                "c": 8,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_25",
                "r": 2,
                "c": 8,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_26",
                "r": 3,
                "c": 6,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_27",
                "r": 6,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_28",
                "r": 5,
                "c": 3,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_29",
                "r": 2,
                "c": 2,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_30",
                "r": 7,
                "c": 4,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_31",
                "r": 5,
                "c": 7,
                "dir": "RIGHT",
                "active": true
            },
            {
                "id": "arrow_32",
                "r": 4,
                "c": 2,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_33",
                "r": 7,
                "c": 0,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_34",
                "r": 4,
                "c": 3,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_35",
                "r": 1,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_36",
                "r": 0,
                "c": 2,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_37",
                "r": 1,
                "c": 0,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_38",
                "r": 7,
                "c": 6,
                "dir": "DOWN",
                "active": true
            },
            {
                "id": "arrow_39",
                "r": 1,
                "c": 8,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_40",
                "r": 8,
                "c": 6,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_41",
                "r": 0,
                "c": 5,
                "dir": "UP_RIGHT",
                "active": true
            },
            {
                "id": "arrow_42",
                "r": 1,
                "c": 1,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_43",
                "r": 2,
                "c": 1,
                "dir": "LEFT",
                "active": true
            },
            {
                "id": "arrow_44",
                "r": 6,
                "c": 0,
                "dir": "DOWN_RIGHT",
                "active": true
            },
            {
                "id": "arrow_45",
                "r": 4,
                "c": 0,
                "dir": "UP_LEFT",
                "active": true
            },
            {
                "id": "arrow_46",
                "r": 0,
                "c": 8,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_47",
                "r": 6,
                "c": 2,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_48",
                "r": 8,
                "c": 1,
                "dir": "DOWN_LEFT",
                "active": true
            },
            {
                "id": "arrow_49",
                "r": 0,
                "c": 3,
                "dir": "UP",
                "active": true
            },
            {
                "id": "arrow_50",
                "r": 4,
                "c": 1,
                "dir": "UP_LEFT",
                "active": true
            }
        ],
        "obstacles": [
            {
                "id": "obs_0",
                "r": 7,
                "c": 2,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_1",
                "r": 2,
                "c": 4,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_2",
                "r": 7,
                "c": 5,
                "type": "rock",
                "isObstacle": true
            },
            {
                "id": "obs_3",
                "r": 3,
                "c": 5,
                "type": "rock",
                "isObstacle": true
            }
        ]
    }
];

class LevelManager {
    constructor() {
        this.currentLevelIndex = 0;
        this.progress = this.loadProgress();
    }

    loadProgress() {
        try {
            if (typeof localStorage !== 'undefined') {
                const data = localStorage.getItem('arrow_game_progress');
                if (data) {
                    return JSON.parse(data);
                }
            }
        } catch (e) {
            console.warn("Could not load level progress", e);
        }
        return {
            unlockedLevel: 1,
            levels: {} // { [levelId]: { completed: true, stars: 3, bestTime: 12.4, bestMoves: 10 } }
        };
    }

    saveProgress() {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem('arrow_game_progress', JSON.stringify(this.progress));
            }
        } catch (e) {
            console.warn("Could not save level progress", e);
        }
    }

    recordCompletion(levelId, stars, timeSeconds, moves) {
        if (!this.progress.levels[levelId]) {
            this.progress.levels[levelId] = {
                completed: true,
                stars: stars,
                bestTime: timeSeconds,
                bestMoves: moves
            };
        } else {
            const rec = this.progress.levels[levelId];
            rec.completed = true;
            rec.stars = Math.max(rec.stars, stars);
            rec.bestTime = Math.min(rec.bestTime || 9999, timeSeconds);
            rec.bestMoves = Math.min(rec.bestMoves || 9999, moves);
        }

        // Unlock next level
        if (levelId >= this.progress.unlockedLevel && levelId < CAMPAIGN_LEVELS.length) {
            this.progress.unlockedLevel = levelId + 1;
        }

        this.saveProgress();
    }

    getLevel(levelId) {
        return CAMPAIGN_LEVELS.find(l => l.id === levelId) || CAMPAIGN_LEVELS[0];
    }

    getLevelCount() {
        return CAMPAIGN_LEVELS.length;
    }

    isUnlocked(levelId) {
        return levelId <= (this.progress.unlockedLevel || 1);
    }

    getLevelStats(levelId) {
        return this.progress.levels[levelId] || null;
    }
}

if (typeof window !== 'undefined') {
    window.CAMPAIGN_LEVELS = CAMPAIGN_LEVELS;
    window.levelManager = new LevelManager();
}
