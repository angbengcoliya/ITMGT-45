/**
 * Set 3
 *
 * This assignment will develop your ability to manipulate data.
 * You should be ready for JS tutorials on more advanced topics after this.
 */

/**
 * Relationship status
 *
 * Describes the relationship that two users have with each other based on a social graph.
 *
 * @param {string} fromMember The subject member
 * @param {string} toMember The object member
 * @param {object} socialGraph The relationship data
 * @returns {string} The relationship status between the two members
 */
function relationshipStatus(fromMember, toMember, socialGraph) {
    const fromFollowsTo = socialGraph[fromMember]?.includes(toMember);
    const toFollowsFrom = socialGraph[toMember]?.includes(fromMember);

    if (fromFollowsTo && toFollowsFrom) return "friends";
    if (fromFollowsTo) return "follower";
    if (toFollowsFrom) return "followed by";
    return "no relationship";
}

/**
 * Tic tac toe
 *
 * Evaluates a Tic Tac Toe game board and returns the winner.
 *
 * @param {Array} board The representation of the Tic Tac Toe board as a square array of arrays.
 * @returns {string} The symbol of the winner, or "No Winner" if there is no winner.
 */
function ticTacToe(board) {
    const size = board.length;
    
    // Check rows and columns
    for (let i = 0; i < size; i++) {
        if (new Set(board[i]).size === 1 && board[i][0] !== null) return board[i][0];
        if (new Set(board.map(row => row[i])).size === 1 && board[0][i] !== null) return board[0][i];
    }
    
    // Check diagonals
    if (new Set(board.map((row, i) => row[i])).size === 1 && board[0][0] !== null) return board[0][0];
    if (new Set(board.map((row, i) => row[size - 1 - i])).size === 1 && board[0][size - 1] !== null) return board[0][size - 1];
    
    return "No Winner";
}

/**
 * ETA
 *
 * Returns the time it takes the shuttle to travel from firstStop to secondStop.
 *
 * @param {string} firstStop The stop that the shuttle will leave
 * @param {string} secondStop The stop that the shuttle will arrive at
 * @param {object} routeMap The data describing the routes
 * @returns {Number} The time it will take the shuttle to travel between stops
 */
function eta(firstStop, secondStop, routeMap) {
    let totalTime = 0;
    let stops = Object.keys(routeMap);
    let currentStop = firstStop;
    
    while (currentStop !== secondStop) {
        totalTime += routeMap[currentStop];
        let currentIndex = stops.indexOf(currentStop);
        currentStop = stops[(currentIndex + 1) % stops.length];
    }
    
    return totalTime;
}